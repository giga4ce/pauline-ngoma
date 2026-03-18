import { CABINET_EMAIL } from '@/config/cabinet'

export const CONTACT_DELIVERY_EMAIL = CABINET_EMAIL

export const CONTACT_FORM_ENDPOINT =
  process.env.REACT_APP_CONTACT_FORM_ENDPOINT ||
  `https://formsubmit.co/ajax/${CONTACT_DELIVERY_EMAIL}`

export const CONTACT_FORM_ERROR_MESSAGE =
  "L'envoi du message a échoué. Merci de réessayer ou d'écrire directement au cabinet."
