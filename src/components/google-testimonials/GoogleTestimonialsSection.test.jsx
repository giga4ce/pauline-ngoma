import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'

import { useGooglePlace } from '@/hooks/useGooglePlace'

import GoogleTestimonialsSection from './GoogleTestimonialsSection'

jest.mock('@/hooks/useGooglePlace', () => ({
  useGooglePlace: jest.fn(),
}))

const place = {
  rating: 5,
  userRatingCount: 21,
  placeUrl: 'https://www.google.com/maps/place/example',
  reviewsUrl: 'https://www.google.com/maps/reviews/example',
  writeReviewUrl: 'https://www.google.com/maps/writereview/example',
}

describe('GoogleTestimonialsSection', () => {
  let container

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container)
    container.remove()
    jest.clearAllMocks()
  })

  const renderSection = (props = {}) => {
    act(() => {
      ReactDOM.render(<GoogleTestimonialsSection {...props} />, container)
    })
  }

  it('displays the dynamic rating, count and Google links', () => {
    useGooglePlace.mockReturnValue(place)

    renderSection()

    expect(container.textContent).toContain('5,0/5 — 21 avis Google')
    expect(container.textContent).toContain('Note Google : 5 sur 5')

    const links = Array.from(container.querySelectorAll('a'))
    expect(links.map((link) => link.href)).toEqual([
      place.reviewsUrl,
      place.writeReviewUrl,
      place.placeUrl,
    ])
    links.forEach((link) => {
      expect(link.target).toBe('_blank')
      expect(link.rel).toBe('noopener noreferrer')
    })
  })

  it('renders nothing when the endpoint fails and no testimonial exists', () => {
    useGooglePlace.mockReturnValue(null)

    renderSection()

    expect(container.innerHTML).toBe('')
  })

  it('displays several valid manual testimonials', () => {
    useGooglePlace.mockReturnValue(null)
    const testimonials = [
      {
        author: 'Personne A',
        rating: 5,
        text: 'Premier avis Google vérifié.',
        date: 'Septembre 2026',
      },
      {
        author: 'Personne B',
        rating: 4,
        text: 'Deuxième avis Google vérifié.',
      },
    ]

    renderSection({ testimonials })

    expect(container.querySelectorAll('.google-testimonial-card')).toHaveLength(2)
    expect(container.textContent).toContain('Premier avis Google vérifié.')
    expect(container.textContent).toContain('Deuxième avis Google vérifié.')
  })

  it('does not render incomplete manual testimonials', () => {
    useGooglePlace.mockReturnValue(null)

    renderSection({
      testimonials: [
        { author: '', rating: 5, text: 'Texte sans auteur' },
        { author: 'Auteur', rating: 5, text: '' },
      ],
    })

    expect(container.innerHTML).toBe('')
  })

  it('hides buttons whose URL is absent', () => {
    useGooglePlace.mockReturnValue({
      ...place,
      reviewsUrl: null,
      writeReviewUrl: null,
    })

    renderSection()

    expect(container.querySelectorAll('a')).toHaveLength(1)
    expect(container.querySelector('a').href).toBe(place.placeUrl)
  })

  it('does not render an empty actions container', () => {
    useGooglePlace.mockReturnValue({
      ...place,
      placeUrl: null,
      reviewsUrl: null,
      writeReviewUrl: null,
    })

    renderSection()

    expect(container.querySelector('.google-reviews-actions')).toBeNull()
  })
})
