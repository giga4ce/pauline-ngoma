import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'

import ExpertiseGridSection from './ExpertiseGridSection'

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

test('renders four expertise cards', () => {
  act(() => {
    ReactDOM.render(<ExpertiseGridSection />, container)
  })

  expect(container.querySelectorAll('.expertise-item-card').length).toBe(4)
  expect(container.textContent).toContain('Droit du dommage corporel')
  expect(container.textContent).toContain('Droit pénal des victimes')
})
