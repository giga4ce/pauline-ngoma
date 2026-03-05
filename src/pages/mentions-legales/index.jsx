import React from 'react'

import { Helmet } from 'react-helmet'

import MainLayout from '@/layouts/MainLayout'
import '@/pages/legal/legal.css'

const MentionsLegales = () => {
  return (
    <div className="legal-page-container">
      <Helmet>
        <title>Mentions légales - Cabinet Pauline NGOMA-MABALA</title>
        <meta
          property="og:title"
          content="Mentions légales - Cabinet Pauline NGOMA-MABALA"
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
                  Le présent site est édité par le Cabinet de Maître Pauline
                  NGOMA-MABALA.
                </p>
                <ul className="legal-list section-content">
                  <li>Adresse: 12 Avenue des Champs-Élysées, 75008 Paris</li>
                  <li>Téléphone: +33 (0)1 40 50 60 70</li>
                  <li>Email: cabinet@avocat-prestige.fr</li>
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
                  Le site est hébergé par un prestataire technique. Les
                  informations complètes de l&apos;hébergeur (raison sociale,
                  adresse, téléphone) sont à compléter avant mise en production.
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
                  personnalisé. Le cabinet ne saurait être tenu responsable de
                  l&apos;utilisation faite des informations diffusées.
                </p>
              </section>

              <section className="legal-section">
                <h2 className="section-title">Contact</h2>
                <p className="section-content">
                  Pour toute question relative au site ou à son contenu, vous
                  pouvez écrire à: cabinet@avocat-prestige.fr.
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
