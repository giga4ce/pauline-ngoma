import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'

import ValuesSection from './ValuesSection'

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

test('renders values content with emphasis classes', () => {
  act(() => {
    ReactDOM.render(
      <ValuesSection emphasisClasses={['first-emphasis', 'second-emphasis', 'third-emphasis']} />,
      container
    )
  })

  expect(container.textContent).toContain('Mon Engagement')
  expect(container.textContent).toContain('Excellence :')
  expect(container.querySelector('.first-emphasis')).not.toBeNull()
  expect(container.querySelector('.second-emphasis')).not.toBeNull()
  expect(container.querySelector('.third-emphasis')).not.toBeNull()
})
