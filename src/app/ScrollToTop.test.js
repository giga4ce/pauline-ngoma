import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import ScrollToTop from './ScrollToTop'

let container = null

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
  window.scrollTo = jest.fn()
})

afterEach(() => {
  ReactDOM.unmountComponentAtNode(container)
  container.remove()
  container = null
  jest.restoreAllMocks()
})

test('scrolls to top when pathname changes', () => {
  const history = createMemoryHistory({
    initialEntries: ['/'],
  })

  act(() => {
    ReactDOM.render(
      <Router history={history}>
        <ScrollToTop />
      </Router>,
      container
    )
  })

  expect(window.scrollTo).toHaveBeenCalledWith(0, 0)

  window.scrollTo.mockClear()

  act(() => {
    history.push('/contact')
  })

  expect(window.scrollTo).toHaveBeenCalledWith(0, 0)
})
