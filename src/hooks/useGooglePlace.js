import { useEffect, useState } from 'react'

const GOOGLE_PLACE_ENDPOINT = '/api/google-place.php'

const isValidUrl = (value) => {
  if (typeof value !== 'string') {
    return false
  }

  try {
    return new URL(value).protocol === 'https:'
  } catch {
    return false
  }
}

const parseGooglePlace = (payload) => {
  if (!payload || typeof payload !== 'object') {
    return null
  }

  const { rating, userRatingCount } = payload

  if (
    typeof rating !== 'number' ||
    !Number.isFinite(rating) ||
    rating < 1 ||
    rating > 5 ||
    typeof userRatingCount !== 'number' ||
    !Number.isInteger(userRatingCount) ||
    userRatingCount < 0
  ) {
    return null
  }

  return {
    rating,
    userRatingCount,
    placeUrl: isValidUrl(payload.placeUrl) ? payload.placeUrl : null,
    reviewsUrl: isValidUrl(payload.reviewsUrl) ? payload.reviewsUrl : null,
    writeReviewUrl: isValidUrl(payload.writeReviewUrl)
      ? payload.writeReviewUrl
      : null,
  }
}

export const useGooglePlace = () => {
  const [place, setPlace] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    const loadGooglePlace = async () => {
      try {
        const response = await fetch(GOOGLE_PLACE_ENDPOINT, {
          headers: { Accept: 'application/json' },
          signal: controller.signal,
        })

        if (!response.ok) {
          return
        }

        const parsedPlace = parseGooglePlace(await response.json())

        if (parsedPlace) {
          setPlace(parsedPlace)
        }
      } catch (error) {
        if (error.name !== 'AbortError') {
          setPlace(null)
        }
      }
    }

    loadGooglePlace()

    return () => controller.abort()
  }, [])

  return place
}

export { parseGooglePlace }
