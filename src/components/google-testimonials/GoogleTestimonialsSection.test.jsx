import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'

import { useGooglePlace } from '@/hooks/useGooglePlace'

import {
  GOOGLE_REVIEWS_SUMMARY,
  GOOGLE_REVIEWS_URL,
  GOOGLE_TESTIMONIALS,
} from '@/data/googleTestimonials'

import GoogleTestimonialsSection, {
  getTestimonialExcerpt,
} from './GoogleTestimonialsSection'

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

  it('falls back to the manual summary, with its date, when the API is unavailable', () => {
    useGooglePlace.mockReturnValue(null)

    renderSection()

    expect(container.textContent).toContain(
      `5,0/5 — ${GOOGLE_REVIEWS_SUMMARY.userRatingCount} avis Google (au ${GOOGLE_REVIEWS_SUMMARY.asOf})`
    )

    const hrefs = Array.from(
      container.querySelectorAll('.google-reviews-actions a')
    ).map((link) => link.href)
    expect(hrefs).toEqual([
      GOOGLE_REVIEWS_SUMMARY.reviewsUrl,
      GOOGLE_REVIEWS_SUMMARY.writeReviewUrl,
    ])
    hrefs.forEach((href) => {
      expect(href).toContain('ChIJPVYDeN-NyRIRZYHZKHFWd08')
    })
  })

  it('prefers live API data over the manual summary', () => {
    useGooglePlace.mockReturnValue(place)

    renderSection()

    expect(container.textContent).toContain('21 avis Google')
    expect(container.querySelector('.google-reviews-as-of')).toBeNull()
  })

  it('displays the dynamic rating, count and Google links', () => {
    useGooglePlace.mockReturnValue(place)

    renderSection({ testimonials: [] })

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

  it('renders nothing without API data, manual summary or testimonial', () => {
    useGooglePlace.mockReturnValue(null)

    renderSection({ testimonials: [], summary: null })

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
      summary: null,
    })

    expect(container.innerHTML).toBe('')
  })

  it('hides buttons whose URL is absent', () => {
    useGooglePlace.mockReturnValue({
      ...place,
      reviewsUrl: null,
      writeReviewUrl: null,
    })

    renderSection({ testimonials: [] })

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

    renderSection({ testimonials: [] })

    expect(container.querySelector('.google-reviews-actions')).toBeNull()
  })

  describe('manual Google reviews', () => {
    it('keeps every excerpt as the exact beginning of the review', () => {
      expect(GOOGLE_TESTIMONIALS).toHaveLength(3)
      GOOGLE_TESTIMONIALS.forEach((testimonial) => {
        expect(testimonial.rating).toBe(5)
        expect(testimonial.text.startsWith(testimonial.excerpt)).toBe(true)
        expect(testimonial.excerpt.length).toBeLessThan(testimonial.text.length)
        expect(testimonial.date).toBeUndefined()
      })
    })

    it('renders the three reviews, most recent first, as excerpts', () => {
      useGooglePlace.mockReturnValue(null)

      renderSection()

      const cards = Array.from(
        container.querySelectorAll('.google-testimonials-grid > li')
      )
      expect(cards).toHaveLength(3)
      expect(
        cards.map((card) => card.querySelector('strong').textContent)
      ).toEqual(['Yasmina Khadraoui', 'Naomi Baluti', 'adebayo'])

      cards.forEach((card, index) => {
        const quote = card.querySelector('blockquote').textContent
        expect(quote).toBe(`${GOOGLE_TESTIMONIALS[index].excerpt}…`)
        expect(card.textContent).toContain('Lire les avis sur Google')
      })
    })

    it('makes each whole card an accessible link to the Google reviews', () => {
      useGooglePlace.mockReturnValue(null)

      renderSection()

      const links = Array.from(
        container.querySelectorAll('a.google-testimonial-card-link')
      )
      expect(links).toHaveLength(3)

      links.forEach((link, index) => {
        expect(link.getAttribute('href')).toBe(GOOGLE_REVIEWS_URL)
        expect(link.target).toBe('_blank')
        expect(link.rel).toBe('noopener noreferrer')

        const name = link
          .getAttribute('aria-labelledby')
          .split(' ')
          .map((id) => container.querySelector(`#${id}`).textContent)
          .join(' ')
        expect(name).toContain(`Avis de ${GOOGLE_TESTIMONIALS[index].author}`)
        expect(name).toContain('Lire les avis sur Google')
        expect(name).toContain('(nouvel onglet)')

        const description = link
          .getAttribute('aria-describedby')
          .split(' ')
          .map((id) => container.querySelector(`#${id}`).textContent)
          .join(' ')
        expect(description).toContain('Note Google : 5 sur 5')
        expect(description).toContain(GOOGLE_TESTIMONIALS[index].excerpt)
      })
    })

    it('uses the reviews link from the API when it is available', () => {
      useGooglePlace.mockReturnValue(place)

      renderSection()

      container
        .querySelectorAll('a.google-testimonial-card-link')
        .forEach((link) => {
          expect(link.href).toBe(place.reviewsUrl)
        })
    })

    it('never alters the review when the excerpt is not its beginning', () => {
      const text = 'Texte complet de l’avis.'

      expect(getTestimonialExcerpt({ text, excerpt: 'Autre texte' })).toBe(text)
      expect(getTestimonialExcerpt({ text })).toBe(text)
      expect(getTestimonialExcerpt({ text, excerpt: 'Texte complet' })).toBe(
        'Texte complet…'
      )
    })
  })
})
