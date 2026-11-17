import { useEffect, useState } from 'react'

import {
  CONTACT_FORM_ENDPOINT,
  CONTACT_FORM_ERROR_MESSAGE,
  CONTACT_FORM_FIELD_MESSAGES,
  CONTACT_FORM_INVALID_MESSAGE,
} from '@/config/contact'

const PHONE_ALLOWED_CHARACTERS = /^\+?[0-9\s.\-()]+$/
const PHONE_MIN_DIGITS = 8
const PHONE_MAX_DIGITS = 15

export const isValidPhoneNumber = (value) => {
  if (typeof value !== 'string') {
    return false
  }

  const trimmedValue = value.trim()

  if (!PHONE_ALLOWED_CHARACTERS.test(trimmedValue)) {
    return false
  }

  const digitCount = trimmedValue.replace(/\D/g, '').length

  return digitCount >= PHONE_MIN_DIGITS && digitCount <= PHONE_MAX_DIGITS
}

export const getFieldErrorMessage = (field) => {
  const messages = CONTACT_FORM_FIELD_MESSAGES[field.name] || {}
  const { validity } = field

  if (validity.valueMissing) {
    return messages.valueMissing || CONTACT_FORM_INVALID_MESSAGE
  }

  if (validity.typeMismatch || validity.patternMismatch || validity.customError) {
    return messages.invalid || CONTACT_FORM_INVALID_MESSAGE
  }

  if (validity.tooShort) {
    return messages.tooShort || CONTACT_FORM_INVALID_MESSAGE
  }

  return CONTACT_FORM_INVALID_MESSAGE
}

const applyCustomValidity = (field) => {
  if (!field || field.name !== 'telephone') {
    return
  }

  const value = field.value.trim()

  field.setCustomValidity(
    value !== '' && !isValidPhoneNumber(value)
      ? CONTACT_FORM_FIELD_MESSAGES.telephone.invalid
      : ''
  )
}

const buildPayload = (formData, subject) => {
  const payload = new URLSearchParams()

  formData.forEach((value, key) => {
    if (typeof value !== 'string') {
      return
    }

    const trimmedValue = value.trim()

    if (!trimmedValue) {
      return
    }

    payload.append(key, trimmedValue)
  })

  payload.append('_subject', subject)
  payload.append('_template', 'table')

  const email = formData.get('email')

  if (typeof email === 'string' && email.trim()) {
    payload.append('_replyto', email.trim())
  }

  return payload
}

export const useContactForm = ({ subject, successMessage }) => {
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')
  const [fieldErrors, setFieldErrors] = useState({})

  useEffect(() => {
    if (status !== 'success' && status !== 'error') {
      return undefined
    }

    const timeoutId = window.setTimeout(() => {
      setStatus('idle')
      setFeedback('')
    }, 5000)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [status])
  const resetFeedback = () => {
    if (status === 'idle') {
      return
    }

    setStatus('idle')
    setFeedback('')
  }

  const handleFieldInvalid = (event) => {
    // Inline messages replace the browser bubbles (the form uses noValidate).
    event.preventDefault()

    const field = event.currentTarget

    setFieldErrors((previousErrors) => ({
      ...previousErrors,
      [field.name]: getFieldErrorMessage(field),
    }))
  }

  const handleFieldInput = (event) => {
    const field = event.currentTarget

    applyCustomValidity(field)

    if (!fieldErrors[field.name]) {
      return
    }

    setFieldErrors((previousErrors) => {
      const nextErrors = { ...previousErrors }

      if (field.checkValidity()) {
        delete nextErrors[field.name]
      } else {
        nextErrors[field.name] = getFieldErrorMessage(field)
      }

      return nextErrors
    })
  }

  const getFieldProps = (name, errorId) => {
    const hasError = Boolean(fieldErrors[name])

    return {
      'aria-describedby': hasError ? errorId : undefined,
      'aria-invalid': hasError ? 'true' : undefined,
      onInput: handleFieldInput,
      onInvalid: handleFieldInvalid,
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    if (formData.get('_honey')) {
      form.reset()
      setStatus('success')
      setFeedback(successMessage)
      return
    }

    applyCustomValidity(form.elements.namedItem('telephone'))
    setFieldErrors({})

    // checkValidity() fires an "invalid" event on each invalid field.
    if (!form.checkValidity()) {
      const firstInvalidField = form.querySelector(':invalid')

      if (firstInvalidField) {
        firstInvalidField.focus()
      }

      setStatus('error')
      setFeedback(CONTACT_FORM_INVALID_MESSAGE)
      return
    }

    setStatus('submitting')
    setFeedback('')

    try {
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: buildPayload(formData, subject),
      })

      const responseData = await response.json().catch(() => null)

      if (
        response.status === 422 &&
        responseData?.errors &&
        typeof responseData.errors === 'object'
      ) {
        setFieldErrors(responseData.errors)
        setStatus('error')
        setFeedback(CONTACT_FORM_INVALID_MESSAGE)

        const firstErrorField = Object.keys(responseData.errors)
          .map((name) => form.elements.namedItem(name))
          .find((field) => field && typeof field.focus === 'function')

        if (firstErrorField) {
          firstErrorField.focus()
        }

        return
      }

      if (!response.ok || responseData?.success === false) {
        throw new Error(responseData?.message || 'Contact form submission failed')
      }

      form.reset()
      setFieldErrors({})
      setStatus('success')
      setFeedback(successMessage)
    } catch (error) {
      setStatus('error')
      setFeedback(CONTACT_FORM_ERROR_MESSAGE)
    }
  }

  return {
    feedback,
    fieldErrors,
    getFieldProps,
    handleSubmit,
    isError: status === 'error',
    isSubmitting: status === 'submitting',
    isSuccess: status === 'success',
    resetFeedback,
    status,
  }
}
