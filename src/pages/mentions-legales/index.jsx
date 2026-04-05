import React from 'react'

import { Helmet } from 'react-helmet'

import {
  CABINET_ADDRESS_LINES,
  CABINET_EMAIL,
  CABINET_EMAIL_HREF,
  CABINET_PHONE,
  CABINET_PHONE_HREF,
} from '@/config/cabinet'
import MainLayout from '@/layouts/MainLayout'

const MentionsLegales = () => {
  return (
    <div className="legal-page-container">
      <Helmet>
        <title>Mentions légales | Maître Pauline NGOMA-MABALA</title>
        <meta
          property="og:title"
          content="Mentions légales | Maître Pauline NGOMA-MABALA"
        />
      </Helmet>
      <MainLayout>
        <section className="legal-page-wrapper">
          <div className="legal-page-content">
            <header className="legal-page-header">
              <span className="section-subtitle">Informations légales</span>
              <h1 className="hero-title">Mentions légales</h1>
              <div className="header-divider"></div>
            </header>

            <div className="legal-sections">
              <section className="legal-section">
                <h2 className="section-title">Éditeur du site</h2>
                <p className="section-content">
                  Le présent site est édité par Maître Pauline NGOMA-MABALA,
                  avocate au barreau d&apos;Aix-en-Provence.
                </p>
                <ul className="legal-list section-content">
                  <li>
                    Adresse: {CABINET_ADDRESS_LINES[0]}, {CABINET_ADDRESS_LINES[1]}
                  </li>
                  <li>
                    Téléphone: <a href={CABINET_PHONE_HREF}>{CABINET_PHONE}</a>
                  </li>
                  <li>
                    Email : <a href={CABINET_EMAIL_HREF}>{CABINET_EMAIL}</a>
                  </li>
                </ul>
              </section>

              <section className="legal-section">
                <h2 className="section-title">Directeur de la publication</h2>
                <p className="section-content">
                  Le directeur de la publication est Maître Pauline
                  NGOMA-MABALA.
                </p>
              </section>

              <section className="legal-section">
                <h2 className="section-title">Hébergement</h2>
                <p className="section-content">
                  Le site est hébergé par OVH SAS, 2 rue Kellermann, 59100
                  Roubaix, France.
                </p>
              </section>

              <section className="legal-section">
                <h2 className="section-title">Propriété intellectuelle</h2>
                <p className="section-content">
                  L&apos;ensemble des contenus (textes, images, logos, charte
                  graphique, structure du site) est protégé par le droit
                  d&apos;auteur et, le cas échéant, par le droit des marques.
                  Toute reproduction, représentation ou adaptation, totale ou
                  partielle, sans autorisation écrite préalable, est interdite.
                </p>
              </section>

              <section className="legal-section">
                <h2 className="section-title">Responsabilité</h2>
                <p className="section-content">
                  Les informations publiées sur ce site sont fournies à titre
                  informatif. Elles ne constituent pas un conseil juridique
                  personnalisé. Maître Pauline NGOMA-MABALA ne saurait être tenue responsable de
                  l&apos;utilisation faite des informations diffusées.
                </p>
              </section>

              <section className="legal-section">
                <h2 className="section-title">Contact</h2>
                <p className="section-content">
                  Pour toute question relative au site ou à son contenu, vous
                  pouvez écrire à:{' '}
                  <a href={CABINET_EMAIL_HREF}>{CABINET_EMAIL}</a>.
                </p>
              </section>
            </div>
          </div>
        </section>
      </MainLayout>
    </div>
  )
}

export default MentionsLegales
