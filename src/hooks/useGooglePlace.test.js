import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'

import { parseGooglePlace, useGooglePlace } from './useGooglePlace'

const HookProbe = ({ onRender }) => {
  onRender(useGooglePlace())

  return null
}

describe('useGooglePlace', () => {
  let container

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container)
    container.remove()
    jest.restoreAllMocks()
  })

  it('loads and validates Google place data', async () => {
    const payload = {
      rating: 5,
      userRatingCount: 21,
      placeUrl: 'https://www.google.com/maps/place/example',
      reviewsUrl: 'https://www.google.com/maps/reviews/example',
      writeReviewUrl: 'https://www.google.com/maps/writereview/example',
    }
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(payload),
    })
    const onRender = jest.fn()

    await act(async () => {
      ReactDOM.render(<HookProbe onRender={onRender} />, container)
    })

    expect(global.fetch).toHaveBeenCalledWith('/api/google-place.php', {
      headers: { Accept: 'application/json' },
      signal: expect.any(AbortSignal),
    })
    expect(onRender).toHaveBeenLastCalledWith(payload)
  })

  it('keeps data hidden when the endpoint fails', async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error('Network failure'))
    const onRender = jest.fn()

    await act(async () => {
      ReactDOM.render(<HookProbe onRender={onRender} />, container)
    })

    expect(onRender).toHaveBeenLastCalledWith(null)
  })

  it('rejects incomplete or invalid values', () => {
    expect(parseGooglePlace({ rating: 5 })).toBeNull()
    expect(
      parseGooglePlace({
        rating: '5',
        userRatingCount: '21',
      })
    ).toBeNull()
    expect(
      parseGooglePlace({
        rating: 6,
        userRatingCount: 21,
      })
    ).toBeNull()
  })

  it('omits invalid optional URLs', () => {
    expect(
      parseGooglePlace({
        rating: 4.9,
        userRatingCount: 18,
        placeUrl: 'javascript:alert(1)',
      })
    ).toEqual({
      rating: 4.9,
      userRatingCount: 18,
      placeUrl: null,
      reviewsUrl: null,
      writeReviewUrl: null,
    })
  })
})
