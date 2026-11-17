import React from 'react'
import { Link } from 'react-router-dom'

export const RequiredMark = () => (
  <span className="form-required-mark" aria-hidden="true">
    {' '}
    *
  </span>
)

export const RequiredFieldsNote = () => (
  <p className="form-required-note">
    Les champs marqués d&apos;un astérisque (
    <span className="form-required-mark">*</span>) sont obligatoires.
  </p>
)

export const FieldError = ({ id, message }) => {
  if (!message) {
    return null
  }

  return (
    <p id={id} className="form-field-error">
      {message}
    </p>
  )
}

export const FormPrivacyNotice = () => (
  <p className="form-privacy-notice">
    Les informations saisies dans ce formulaire (nom, adresse e-mail, numéro de
    téléphone et message) sont transmises à Maître Pauline NGOMA MABALA afin de
    répondre à votre demande, notamment en vous rappelant par téléphone. Pour
    en savoir plus sur le traitement de vos données et sur vos droits,
    consultez la{' '}
    <Link to="/politique-de-confidentialite">politique de confidentialité</Link>
    .
  </p>
)
