import React from 'react'

import {
  GOOGLE_REVIEWS_SUMMARY,
  GOOGLE_REVIEWS_URL,
  GOOGLE_TESTIMONIALS,
} from '@/data/googleTestimonials'
import { useGooglePlace } from '@/hooks/useGooglePlace'

const ExternalLink = ({ children, className, href }) => {
  if (!href) {
    return null
  }

  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

const isValidTestimonial = (testimonial) =>
  testimonial &&
  typeof testimonial.author === 'string' &&
  testimonial.author.trim() !== '' &&
  typeof testimonial.text === 'string' &&
  testimonial.text.trim() !== '' &&
  Number.isInteger(testimonial.rating) &&
  testimonial.rating >= 1 &&
  testimonial.rating <= 5

const RatingStars = ({ id, rating }) => (
  <div className="google-reviews-stars">
    <span aria-hidden="true">★★★★★</span>
    <span id={id} className="sr-only">
      Note Google : {rating} sur 5
    </span>
  </div>
)

// The excerpt is only used when it is the exact beginning of the review, so
// that the author's words are never altered.
export const getTestimonialExcerpt = ({ excerpt, text }) => {
  const trimmedText = text.trim()
  const trimmedExcerpt = typeof excerpt === 'string' ? excerpt.trim() : ''

  if (
    trimmedExcerpt === '' ||
    trimmedExcerpt.length >= trimmedText.length ||
    !trimmedText.startsWith(trimmedExcerpt)
  ) {
    return trimmedText
  }

  return `${trimmedExcerpt}…`
}

const TestimonialCard = ({ href, index, testimonial }) => {
  const idPrefix = `google-testimonial-${index}`
  const content = (
    <>
      <RatingStars id={`${idPrefix}-rating`} rating={testimonial.rating} />
      <blockquote id={`${idPrefix}-quote`}>
        {getTestimonialExcerpt(testimonial)}
      </blockquote>
      <footer>
        <strong id={`${idPrefix}-author`}>{testimonial.author}</strong>
        {testimonial.date ? <span>{testimonial.date}</span> : null}
      </footer>
    </>
  )

  if (!href) {
    return <article className="google-testimonial-card">{content}</article>
  }

  return (
    <a
      className="google-testimonial-card google-testimonial-card-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-labelledby={`${idPrefix}-cta`}
      aria-describedby={`${idPrefix}-rating ${idPrefix}-quote`}
    >
      {content}
      <span id={`${idPrefix}-cta`} className="google-testimonial-cta">
        <span className="sr-only">Avis de {testimonial.author} — </span>
        Lire les avis sur Google
        <span aria-hidden="true"> ↗</span>
        <span className="sr-only"> (nouvel onglet)</span>
      </span>
    </a>
  )
}

const GoogleTestimonialsSection = ({
  summary = GOOGLE_REVIEWS_SUMMARY,
  testimonials = GOOGLE_TESTIMONIALS,
}) => {
  const apiPlace = useGooglePlace()
  // Live data from the API when configured, otherwise the manual summary.
  const place = apiPlace || summary
  const manualAsOf = !apiPlace && summary ? summary.asOf : null
  const validTestimonials = testimonials.filter(isValidTestimonial)
  const reviewsUrl = (place && place.reviewsUrl) || GOOGLE_REVIEWS_URL
  const hasGoogleLinks =
    place && (place.reviewsUrl || place.writeReviewUrl || place.placeUrl)

  if (!place && validTestimonials.length === 0) {
    return null
  }

  return (
    <section className="google-reviews" aria-labelledby="google-reviews-title">
      <div className="google-reviews-container">
        <header className="google-reviews-header">
          <h2 id="google-reviews-title" className="section-title">
            Avis Google
          </h2>
          <div className="header-line"></div>
          {place ? (
            <div className="google-reviews-summary">
              <RatingStars rating={place.rating} />
              <p>
                <strong>
                  {place.rating.toLocaleString('fr-FR', {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 1,
                  })}
                </strong>
                /5 —{' '}
                {place.userRatingCount.toLocaleString('fr-FR')} avis Google
                {manualAsOf ? (
                  <span className="google-reviews-as-of">
                    {' '}
                    (au {manualAsOf})
                  </span>
                ) : null}
              </p>
            </div>
          ) : null}
          {hasGoogleLinks ? (
            <div className="google-reviews-actions">
              <ExternalLink className="btn btn-accent" href={place.reviewsUrl}>
                Voir tous les avis Google
              </ExternalLink>
              <ExternalLink className="btn btn-outline" href={place.writeReviewUrl}>
                Donner votre avis sur Google
              </ExternalLink>
              <ExternalLink className="google-reviews-place-link" href={place.placeUrl}>
                Voir la fiche Google
              </ExternalLink>
            </div>
          ) : null}
        </header>
        {validTestimonials.length > 0 ? (
          <ul className="google-testimonials-grid">
            {validTestimonials.map((testimonial, index) => (
              <li key={`${testimonial.author}-${testimonial.text}`}>
                <TestimonialCard
                  href={reviewsUrl}
                  index={index}
                  testimonial={testimonial}
                />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  )
}

export default GoogleTestimonialsSection
