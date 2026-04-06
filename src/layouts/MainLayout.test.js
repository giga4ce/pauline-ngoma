import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import { MemoryRouter } from 'react-router-dom'

import MainLayout from './MainLayout'

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

test('renders children and navigation, without footer when disabled', () => {
  act(() => {
    ReactDOM.render(
      <MemoryRouter>
        <MainLayout showFooter={false}>
          <main>Layout Child Content</main>
        </MainLayout>
      </MemoryRouter>,
      container
    )
  })

  expect(container.textContent).toContain('Layout Child Content')
  expect(container.textContent).toContain('Maître Pauline NGOMA MABALA')
  expect(container.textContent).not.toContain('All rights reserved')
})
