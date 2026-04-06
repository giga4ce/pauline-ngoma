import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

const Cabinet = () => {
  return (
    <>
      <Helmet>
        <title>Cabinet | Maître Pauline NGOMA MABALA</title>
        <meta
          property="og:title"
          content="Cabinet | Maître Pauline NGOMA MABALA"
        />
        <link
          rel="canonical"
          href="https://www.pauline-ngoma-mabala.fr/cabinet"
        />
      </Helmet>
      <Navigation></Navigation>
      <main className="cabinet-expertise-page expertise-page">
        <section className="cabinet-expertise-hero expertise-hero">
          <div className="hero-media-wrapper">
            <img
              alt="Bureau d'avocat luxueux et institutionnel"
              src="https://images.pexels.com/photos/6077381/pexels-photo-6077381.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="hero-bg-image"
            />
            <div className="expertise-hero-overlay"></div>
          </div>
          <div className="cabinet-expertise-hero-content-container">
            <div className="cabinet-content-limit content-limit">
              <h1 className="hero-title">Une avocate engagée à vos côtés</h1>
              <p className="hero-subtitle">
                Expertise, proximité et défense rigoureuse de vos intérêts.
              </p>
              <div className="hero-cta-group">
                <Link to="/contact">
                  <div className="btn btn-primary btn-lg">
                    <span>Prendre rendez-vous</span>
                  </div>
                </Link>
                <a href="#vision">
                  <div className="btn btn-lg btn-outline">
                    <span>Découvrir mon approche</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="vision" className="cabinet-vision-section">
          <div className="cabinet-content-limit content-limit">
            <div className="section-header-centered">
              <h2 className="section-title">Ma pratique</h2>
              <div className="accent-line"></div>
              <p className="max-width-700 section-content">
                Ancré dans une tradition d&apos;excellence et tourné vers
                l&apos;avenir, j&apos;accompagne mes clients avec une rigueur
                absolue et une discrétion totale.
              </p>
            </div>
            <div className="cabinet-values-grid1">
              <div className="cabinet-value-card">
                <div className="cabinet-value-icon-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 3v18m7-13l3 8a5 5 0 0 1-6 0zV7"></path>
                    <path d="M3 7h1a17 17 0 0 0 8-2a17 17 0 0 0 8 2h1M5 8l3 8a5 5 0 0 1-6 0zV7m2 14h10"></path>
                  </svg>
                </div>
                <h3 className="card-title">Rigueur</h3>
                <p className="section-content">
                  Une analyse juridique exhaustive pour chaque dossier,
                  garantissant une défense sans faille.
                </p>
              </div>
              <div className="cabinet-value-card">
                <div className="cabinet-value-icon-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  </svg>
                </div>
                <h3 className="card-title">Confidentialité</h3>
                <p className="section-content">
                  Le secret professionnel est le socle de ma relation de
                  confiance avec chaque client.
                </p>
              </div>
              <div className="cabinet-value-card">
                <div className="cabinet-value-icon-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                </div>
                <h3 className="card-title">Disponibilité</h3>
                <p className="section-content">
                  Une réactivité immédiate pour répondre à vos urgences et
                  interrogations juridiques.
                </p>
              </div>
              <div className="cabinet-value-card">
                <div className="cabinet-value-icon-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m11 17l2 2a1 1 0 1 0 3-3"></path>
                    <path d="m14 14l2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path>
                    <path d="m21 3l1 11h-2M3 3L2 14l6.5 6.5a1 1 0 1 0 3-3M3 4h8"></path>
                  </svg>
                </div>
                <h3 className="card-title">Éthique</h3>
                <p className="section-content">
                  Un exercice professionnel guidé par la déontologie et
                  l&apos;honnêteté intellectuelle.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="approach-section">
          <div className="cabinet-content-limit content-limit">
            <div className="approach-flex-container">
              <div className="approach-image-side">
                <div className="image-frame">
                  <img
                    alt="Accompagnement stratégique"
                    src="https://images.pexels.com/photos/7876314/pexels-photo-7876314.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="approach-img"
                  />
                  <div className="frame-accent"></div>
                </div>
              </div>
              <div className="approach-content-side">
                <span className="section-subtitle">Méthodologie</span>
                <h2 className="section-title">Mon Approche</h2>
                <p className="section-content">
                  Je crois qu&apos;une défense efficace repose sur une
                  compréhension profonde de la situation humaine de mes clients.
                  Chaque stratégie est élaborée sur mesure, après une écoute
                  attentive et une analyse prospective des enjeux.
                </p>
                <p className="section-content">
                  Je privilégie une approche proactive, anticipant
                  les obstacles juridiques pour sécuriser vos intérêts sur le
                  long terme. Je vous accompagne à chaque étape, de la
                  consultation initiale jusqu&apos;à la résolution finale de
                  votre litige.
                </p>
                <div className="approach-stats">
                  <div className="stat-item">
                    <span className="cabinet-stat-number">100%</span>
                    <span className="cabinet-stat-label">Dévouement</span>
                  </div>
                  <div className="stat-item">
                    <span className="cabinet-stat-number">Sur mesure</span>
                    <span className="cabinet-stat-label">Stratégie</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="engagements-section">
          <div className="cabinet-content-limit content-limit">
            <div className="grid-header">
              <h2 className="section-title">Mes Engagements</h2>
              <p className="section-content">
                Quatre piliers fondamentaux qui guident ma pratique
                quotidienne.
              </p>
            </div>
            <div className="engagements-list">
              <div className="engagement-item">
                <div className="engagement-number">
                  <span>01</span>
                </div>
                <div className="engagement-text">
                  <h3 className="card-title">Écoute active</h3>
                  <p className="section-content">
                    Je prends le temps nécessaire pour comprendre vos besoins
                    réels et vos objectifs personnels.
                  </p>
                </div>
              </div>
              <div className="engagement-item">
                <div className="engagement-number">
                  <span>02</span>
                </div>
                <div className="engagement-text">
                  <h3 className="card-title">Réactivité</h3>
                  <p className="section-content">
                    Le temps est un facteur clé en droit. Je m&apos;engage à
                    traiter vos demandes dans les plus brefs délais.
                  </p>
                </div>
              </div>
              <div className="engagement-item">
                <div className="engagement-number">
                  <span>03</span>
                </div>
                <div className="engagement-text">
                  <h3 className="card-title">Transparence des honoraires</h3>
                  <p className="section-content">
                    Une convention d&apos;honoraires claire est établie dès le
                    premier rendez-vous, sans coûts cachés.
                  </p>
                </div>
              </div>
              <div className="engagement-item">
                <div className="engagement-number">
                  <span>04</span>
                </div>
                <div className="engagement-text">
                  <h3 className="card-title">Stratégie personnalisée</h3>
                  <p className="section-content">
                    Pas de solutions génériques. Je bâtis une défense
                    unique adaptée à la complexité de votre dossier.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="cta-banner">
          <div className="cabinet-content-limit content-limit">
            <div className="cta-banner-card">
              <h2 className="section-title">
                Besoin d&apos;un conseil juridique ?
              </h2>
              <p className="section-content">
                Je vous reçois sur rendez-vous pour étudier votre situation.
              </p>
              <Link to="/contact">
                <div className="btn btn-accent btn-xl">
                  <span>Prendre rendez-vous</span>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  )
}

export default Cabinet
