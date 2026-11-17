import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import { MemoryRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Cabinet from '@/pages/cabinet'
import Contact from '@/pages/contact'
import Expertise from '@/pages/expertise'
import Home from '@/pages/home'
import Honoraires from '@/pages/honoraires'
import MentionsLegales from '@/pages/mentions-legales'
import NotFound from '@/pages/not-found'
import PolitiqueConfidentialite from '@/pages/politique-confidentialite'

// The RIN (art. 10.2) reserves "spécialiste", "spécialisé(e)", "spécialité"
// and "spécialisation" to holders of a certificate of specialisation.
const SPECIALISATION_CLAIM = /sp[ée]cialis|sp[ée]cialit/i

const PAGES = {
  Cabinet,
  Contact,
  Expertise,
  Home,
  Honoraires,
  MentionsLegales,
  NotFound,
  PolitiqueConfidentialite,
}

describe.each(Object.entries(PAGES))('%s page', (name, Page) => {
  let container

  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 503,
      json: jest.fn().mockResolvedValue({}),
    })
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container)
    container.remove()
    jest.restoreAllMocks()
  })

  it('does not claim any specialisation (text, title or meta tags)', () => {
    act(() => {
      ReactDOM.render(
        <MemoryRouter>
          <Page />
        </MemoryRouter>,
        container
      )
    })

    const head = Helmet.peek()
    const metaContent = (head.metaTags || [])
      .map((tag) => tag.content || '')
      .join(' ')

    expect(container.textContent).not.toMatch(SPECIALISATION_CLAIM)
    expect(String(head.title || '')).not.toMatch(SPECIALISATION_CLAIM)
    expect(metaContent).not.toMatch(SPECIALISATION_CLAIM)
  })
})
