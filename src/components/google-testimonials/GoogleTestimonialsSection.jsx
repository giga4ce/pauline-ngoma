import React from 'react'

import { GOOGLE_TESTIMONIALS } from '@/data/googleTestimonials'
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

const RatingStars = ({ rating }) => (
  <div className="google-reviews-stars">
    <span aria-hidden="true">★★★★★</span>
    <span className="sr-only">Note Google : {rating} sur 5</span>
  </div>
)

const TestimonialCard = ({ testimonial }) => (
  <article className="google-testimonial-card">
    <RatingStars rating={testimonial.rating} />
    <blockquote>{testimonial.text}</blockquote>
    <footer>
      <strong>{testimonial.author}</strong>
      {testimonial.date ? <span>{testimonial.date}</span> : null}
    </footer>
  </article>
)

const GoogleTestimonialsSection = ({ testimonials = GOOGLE_TESTIMONIALS }) => {
  const place = useGooglePlace()
  const validTestimonials = testimonials.filter(isValidTestimonial)
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
          <div className="google-testimonials-grid">
            {validTestimonials.map((testimonial) => (
              <TestimonialCard
                key={`${testimonial.author}-${testimonial.text}`}
                testimonial={testimonial}
              />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default GoogleTestimonialsSection
