import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'

import CtaSection from './CtaSection'

let container = null

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  ReactDOM.unmountComponentAtNode(container)
  container.remove()
  container = null
})

test('renders CTA heading and actions', () => {
  act(() => {
    ReactDOM.render(<CtaSection />, container)
  })

  expect(container.textContent).toContain('Besoin d\'un conseil juridique ?')
  expect(container.textContent).toContain('Prendre rendez-vous')
  expect(container.textContent).toContain('Nous contacter')
})
