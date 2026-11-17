// Google reviews displayed on the home page, maintained manually.
//
// The Google Places API only returns a handful of reviews per place, so the
// reviews are copied here from the Google Business profile of the cabinet.
// When the automatic mode (/api/google-place.php) is configured, its rating,
// review count and links take precedence over GOOGLE_REVIEWS_SUMMARY.

const GOOGLE_PLACE_ID = 'ChIJPVYDeN-NyRIRZYHZKHFWd08'

// Stable Google link to the reviews of the place (no session parameters).
export const GOOGLE_REVIEWS_URL = `https://search.google.com/local/reviews?placeid=${GOOGLE_PLACE_ID}`

// Fallback used while the automatic mode is not configured.
// Update rating, userRatingCount and asOf together whenever they change.
export const GOOGLE_REVIEWS_SUMMARY = {
  rating: 5,
  userRatingCount: 28,
  asOf: '18 novembre 2026',
  placeUrl: null,
  reviewsUrl: GOOGLE_REVIEWS_URL,
  writeReviewUrl: `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`,
}

// Most recent first. For each review:
// - author and text: copied verbatim from Google, without any modification;
// - excerpt: the exact beginning of `text`, displayed followed by "…";
// - rating: integer from 1 to 5;
// - date: optional. Do not use relative dates ("Hier", "Il y a 4 jours").
export const GOOGLE_TESTIMONIALS = [
  {
    author: 'Yasmina Khadraoui',
    rating: 5,
    excerpt:
      'Un immense merci à Maître Pauline NGOMA MABALA pour son professionnalisme, son sérieux et son accompagnement',
    text: 'Un immense merci à Maître Pauline NGOMA MABALA pour son professionnalisme, son sérieux et son accompagnement. Après deux longues années d’attente, grâce à son travail et à son implication, mon mari a enfin obtenu son titre de séjour. Nous sommes tellement soulagés et reconnaissants ! Je la recommande les yeux fermés. Encore merci pour tout !',
  },
  {
    author: 'Naomi Baluti',
    rating: 5,
    excerpt:
      'Je recommande vivement cette avocate pour son professionnalisme, son écoute et son sérieux',
    text: 'Je recommande vivement cette avocate pour son professionnalisme, son écoute et son sérieux. Elle a su être à l’écoute de mes besoins, m’expliquer clairement les différentes étapes de la procédure et me conseiller avec beaucoup de bienveillance. Son expertise et sa réactivité m’ont permis d’aborder mon dossier avec davantage de sérénité. Une avocate compétente, disponible et très humaine, que je recommande sans hésitation.',
  },
  {
    author: 'adebayo',
    rating: 5,
    excerpt:
      'Une avocate exceptionnellement brillante, un accompagnement humain et très satisfaisant',
    text: 'Une avocate exceptionnellement brillante, un accompagnement humain et très satisfaisant, une maîtrise parfaite des rouages des procédures en droit des étrangers... c’est ce que je retiens de mon expérience avec Maître Pauline NGOMA MABALA. Et c’est sans hésiter que je la recommande. Merci Maître pour votre efficacité. OLIVIER',
  },
]
