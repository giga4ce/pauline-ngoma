import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import { MemoryRouter } from 'react-router-dom'

import Contact from '@/pages/contact'
import Home from '@/pages/home'

import { isValidPhoneNumber } from './useContactForm'

const PHONE_MISSING_MESSAGE =
  'Veuillez indiquer votre numéro de téléphone afin que le cabinet puisse vous rappeler.'

const setFieldValue = (field, value) => {
  act(() => {
    field.value = value
    field.dispatchEvent(new Event('input', { bubbles: true }))
  })
}

const submitForm = async (form) => {
  await act(async () => {
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }))
  })
}

const PAGES = [
  {
    name: 'Contact',
    Page: Contact,
    selectors: {
      email: '#email',
      message: '#message',
      name: '#nom',
      phone: '#telephone',
    },
  },
  {
    name: 'Home',
    Page: Home,
    selectors: {
      email: '#email',
      message: '#message',
      name: '#name',
      phone: '#phone',
    },
  },
]

describe('isValidPhoneNumber', () => {
  it.each(['06 12 34 56 78', '0612345678', '+33 6 12 34 56 78', '04.13.41.47.30'])(
    'accepts %s',
    (value) => {
      expect(isValidPhoneNumber(value)).toBe(true)
    }
  )

  it.each(['', '12345', 'abc 06 12 34 56', '06 12 34 56 78 90 12 34'])(
    'rejects %s',
    (value) => {
      expect(isValidPhoneNumber(value)).toBe(false)
    }
  )
})

describe.each(PAGES)('$name contact form', ({ Page, selectors }) => {
  let container

  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 503,
      json: jest.fn().mockResolvedValue({}),
    })
    container = document.createElement('div')
    document.body.appendChild(container)

    act(() => {
      ReactDOM.render(
        <MemoryRouter>
          <Page />
        </MemoryRouter>,
        container
      )
    })
  })

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container)
    container.remove()
    jest.restoreAllMocks()
  })

  const getForm = () => container.querySelector(selectors.phone).form

  const fillValidFields = () => {
    setFieldValue(container.querySelector(selectors.name), 'Jean Dupont')
    setFieldValue(container.querySelector(selectors.email), 'jean@exemple.fr')
    setFieldValue(
      container.querySelector(selectors.message),
      'Je souhaite prendre rendez-vous.'
    )
  }

  it('marks the phone as required and shows the privacy notice', () => {
    const phone = container.querySelector(selectors.phone)
    const form = getForm()

    expect(phone.required).toBe(true)
    expect(form.noValidate).toBe(true)
    expect(form.textContent).toContain(
      "Les champs marqués d'un astérisque (*) sont obligatoires."
    )
    expect(
      container.querySelector(`label[for="${phone.id}"]`).textContent
    ).toContain('*')

    const notice = form.querySelector('.form-privacy-notice')

    expect(notice.textContent).toContain(
      'sont transmises à Maître Pauline NGOMA MABALA'
    )
    expect(notice.textContent).toContain('notamment en vous rappelant par téléphone')
    expect(notice.querySelector('a').getAttribute('href')).toBe(
      '/politique-de-confidentialite'
    )
  })

  it('blocks the submission and explains why when the phone is missing', async () => {
    fillValidFields()

    await submitForm(getForm())

    const phone = container.querySelector(selectors.phone)
    const errorId = phone.getAttribute('aria-describedby')

    expect(global.fetch).not.toHaveBeenCalledWith(
      '/api/contact.php',
      expect.anything()
    )
    expect(phone.getAttribute('aria-invalid')).toBe('true')
    expect(errorId).toBeTruthy()
    expect(container.querySelector(`#${errorId}`).textContent).toBe(
      PHONE_MISSING_MESSAGE
    )
    expect(document.activeElement).toBe(phone)
  })

  it('rejects an invalid phone number, then clears the error once corrected', async () => {
    fillValidFields()
    const phone = container.querySelector(selectors.phone)
    setFieldValue(phone, 'abc')

    await submitForm(getForm())

    expect(phone.getAttribute('aria-invalid')).toBe('true')
    expect(
      container.querySelector(`#${phone.getAttribute('aria-describedby')}`)
        .textContent
    ).toContain('numéro de téléphone valide')

    setFieldValue(phone, '06 12 34 56 78')

    expect(phone.hasAttribute('aria-invalid')).toBe(false)
    expect(phone.hasAttribute('aria-describedby')).toBe(false)
  })

  it('sends the phone number when every field is valid', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValue({ success: true }),
    })
    fillValidFields()
    setFieldValue(container.querySelector(selectors.phone), '06 12 34 56 78')

    await submitForm(getForm())

    const contactCall = global.fetch.mock.calls.find(
      ([url]) => url === '/api/contact.php'
    )

    expect(contactCall).toBeDefined()
    expect(contactCall[1].body.get('telephone')).toBe('06 12 34 56 78')
  })

  it('displays the field errors returned by the server', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 422,
      json: jest.fn().mockResolvedValue({
        success: false,
        errors: { telephone: PHONE_MISSING_MESSAGE },
      }),
    })
    fillValidFields()
    setFieldValue(container.querySelector(selectors.phone), '06 12 34 56 78')

    await submitForm(getForm())

    const phone = container.querySelector(selectors.phone)

    expect(phone.getAttribute('aria-invalid')).toBe('true')
    expect(
      container.querySelector(`#${phone.getAttribute('aria-describedby')}`)
        .textContent
    ).toBe(PHONE_MISSING_MESSAGE)
  })
})
