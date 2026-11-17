import { CABINET_EMAIL } from '@/config/cabinet'

export const CONTACT_DELIVERY_EMAIL = CABINET_EMAIL

export const CONTACT_FORM_ENDPOINT =
  process.env.REACT_APP_CONTACT_FORM_ENDPOINT || '/api/contact.php'

export const CONTACT_FORM_ERROR_MESSAGE =
  `L'envoi du message a échoué. Merci de réessayer ou d'écrire directement à ${CONTACT_DELIVERY_EMAIL}.`

export const CONTACT_FORM_INVALID_MESSAGE =
  'Certains champs sont à compléter ou à corriger. Merci de vérifier les messages indiqués sous les champs concernés.'

export const CONTACT_FORM_FIELD_MESSAGES = {
  nom: {
    valueMissing: 'Veuillez indiquer votre nom.',
  },
  email: {
    valueMissing: 'Veuillez indiquer votre adresse e-mail.',
    invalid:
      'Veuillez saisir une adresse e-mail valide (par exemple : nom@exemple.fr).',
  },
  telephone: {
    valueMissing:
      'Veuillez indiquer votre numéro de téléphone afin que le cabinet puisse vous rappeler.',
    invalid:
      'Veuillez saisir un numéro de téléphone valide (par exemple : 06 12 34 56 78 ou +33 6 12 34 56 78).',
  },
  message: {
    valueMissing: 'Veuillez écrire votre message.',
    tooShort: 'Votre message doit contenir au moins 10 caractères.',
  },
}
