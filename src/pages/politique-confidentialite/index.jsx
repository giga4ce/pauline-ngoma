import React from 'react'

import { Helmet } from 'react-helmet'

import {
  CABINET_ADDRESS_LINES,
  CABINET_EMAIL,
  CABINET_EMAIL_HREF,
} from '@/config/cabinet'
import MainLayout from '@/layouts/MainLayout'

const PolitiqueConfidentialite = () => {
  return (
    <div className="legal-page-container">
      <Helmet>
        <title>
          Politique de confidentialité | Maître Pauline NGOMA-MABALA
        </title>
        <meta
          property="og:title"
          content="Politique de confidentialité | Maître Pauline NGOMA-MABALA"
        />
      </Helmet>
      <MainLayout>
        <section className="legal-page-wrapper">
          <div className="legal-page-content">
            <header className="legal-page-header">
              <span className="section-subtitle">Protection des données</span>
              <h1 className="hero-title">Politique de confidentialité</h1>
              <div className="header-divider"></div>
            </header>

            <div className="legal-sections">
              <section className="legal-section">
                <h2 className="section-title">Responsable du traitement</h2>
                <p className="section-content">
                  Le responsable du traitement des données personnelles est
                  Maître Pauline NGOMA-MABALA, avocate au barreau
                  d&apos;Aix-en-Provence, domiciliée {CABINET_ADDRESS_LINES[0]},
                  {` ${CABINET_ADDRESS_LINES[1]}`}.
                </p>
              </section>

              <section className="legal-section">
                <h2 className="section-title">Données collectées</h2>
                <p className="section-content">
                  Les données susceptibles d&apos;être collectées via le
                  formulaire de contact sont:
                </p>
                <ul className="legal-list section-content">
                  <li>Nom et prénom</li>
                  <li>Adresse e-mail</li>
                  <li>Numéro de téléphone</li>
                  <li>Contenu du message</li>
                </ul>
              </section>

              <section className="legal-section">
                <h2 className="section-title">
                  Finalités et base juridique
                </h2>
                <p className="section-content">
                  Les données sont utilisées pour répondre aux demandes
                  d&apos;information, organiser un rendez-vous et assurer le
                  suivi des échanges. Le traitement repose sur votre
                  consentement et sur l&apos;intérêt légitime de Maître Pauline
                  NGOMA-MABALA à
                  traiter les sollicitations reçues.
                </p>
              </section>

              <section className="legal-section">
                <h2 className="section-title">Durée de conservation</h2>
                <p className="section-content">
                  Les données sont conservées pendant une durée maximale de 3
                  ans à compter du dernier contact, sauf obligation légale
                  contraire.
                </p>
              </section>

              <section className="legal-section">
                <h2 className="section-title">Destinataires</h2>
                <p className="section-content">
                  Les données sont destinées exclusivement à Maître Pauline
                  NGOMA-MABALA et, le cas échéant, à ses prestataires techniques
                  strictement nécessaires au
                  fonctionnement du site.
                </p>
              </section>

              <section className="legal-section">
                <h2 className="section-title">Vos droits</h2>
                <p className="section-content">
                  Conformément au RGPD et à la loi Informatique et Libertés,
                  vous disposez des droits d&apos;accès, de rectification,
                  d&apos;effacement, d&apos;opposition, de limitation et de
                  portabilité de vos données.
                </p>
                <p className="section-content">
                  Pour exercer vos droits, contactez:{' '}
                  <a href={CABINET_EMAIL_HREF}>{CABINET_EMAIL}</a>. En cas de
                  litige, vous pouvez saisir la CNIL (www.cnil.fr).
                </p>
              </section>

              <section className="legal-section">
                <h2 className="section-title">Mise à jour</h2>
                <p className="section-content">
                  Cette politique peut être mise à jour à tout moment afin de
                  refléter les évolutions légales, techniques ou
                  organisationnelles du site.
                </p>
                <p className="section-content">
                  Dernière mise à jour : 6 avril 2026.
                </p>
              </section>
            </div>
          </div>
        </section>
      </MainLayout>
    </div>
  )
}

export default PolitiqueConfidentialite
