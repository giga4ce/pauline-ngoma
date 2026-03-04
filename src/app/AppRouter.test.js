import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import { MemoryRouter } from 'react-router-dom'

import AppRouter from './AppRouter'

let container = null

const renderAt = (path) => {
  act(() => {
    ReactDOM.render(
      <MemoryRouter initialEntries={[path]}>
        <AppRouter />
      </MemoryRouter>,
      container
    )
  })
}

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  ReactDOM.unmountComponentAtNode(container)
  container.remove()
  container = null
})

test('renders home route', () => {
  renderAt('/')
  expect(container.textContent).toContain('Maître Pauline NGOMA-MABALA')
})

test('renders contact route', () => {
  renderAt('/contact')
  expect(container.textContent).toContain('Prendre rendez-vous')
  expect(container.textContent).toContain('Contact')
})

test('renders legal notice route', () => {
  renderAt('/mentions-legales')
  expect(container.textContent).toContain('Mentions légales')
  expect(container.textContent).toContain('Informations légales')
})

test('renders privacy policy route', () => {
  renderAt('/politique-de-confidentialite')
  expect(container.textContent).toContain('Politique de confidentialité')
  expect(container.textContent).toContain('Protection des données')
})

test('renders not found route', () => {
  renderAt('/this-route-does-not-exist')
  expect(container.textContent).toContain('OOPS! PAGE NOT FOUND')
})
