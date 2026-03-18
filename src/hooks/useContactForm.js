import { useState } from 'react'

import {
  CONTACT_FORM_ENDPOINT,
  CONTACT_FORM_ERROR_MESSAGE,
} from '@/config/contact'

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

  const resetFeedback = () => {
    if (status === 'idle') {
      return
    }

    setStatus('idle')
    setFeedback('')
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

    setStatus('submitting')
    setFeedback('Envoi en cours...')

    try {
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: buildPayload(formData, subject),
      })

      const responseData = await response.json().catch(() => null)

      if (!response.ok || responseData?.success === false) {
        throw new Error(responseData?.message || 'Contact form submission failed')
      }

      form.reset()
      setStatus('success')
      setFeedback(successMessage)
    } catch (error) {
      setStatus('error')
      setFeedback(CONTACT_FORM_ERROR_MESSAGE)
    }
  }

  return {
    feedback,
    handleSubmit,
    isError: status === 'error',
    isSubmitting: status === 'submitting',
    isSuccess: status === 'success',
    resetFeedback,
    status,
  }
}
