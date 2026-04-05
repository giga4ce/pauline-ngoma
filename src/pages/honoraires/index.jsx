import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import MainLayout from '@/layouts/MainLayout'

const Honoraires = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Honoraires | Maître Pauline NGOMA-MABALA</title>
        <meta
          property="og:title"
          content="Honoraires | Maître Pauline NGOMA-MABALA"
        />
        <link
          rel="canonical"
          href="https://www.pauline-ngoma-mabala.fr/honoraires"
        />
      </Helmet>
      <MainLayout>
        <section className="honoraires-hero">
          <div className="honoraires-hero-overlay"></div>
          <div className="hero-content">
            <h1 className="hero-title">Honoraires</h1>
            <p className="hero-subtitle">
              Transparence et clarté pour une défense sereine
            </p>
          </div>
        </section>
        <section className="honoraires-intro">
          <div className="intro-container">
            <div className="intro-text">
              <h2 className="section-title">Une relation de confiance</h2>
              <p className="section-content">
                La question financière est abordée dès le premier rendez-vous,
                en toute transparence. Chaque dossier fait l&apos;objet
                d&apos;une convention d&apos;honoraires écrite, précisant les
                modalités de facturation et les frais prévisibles. Mon
                engagement est de vous offrir une visibilité totale sur le coût
                de votre accompagnement juridique.
              </p>
            </div>
            <div className="intro-decorative">
              <div className="gold-line"></div>
            </div>
          </div>
        </section>
        <section className="billing-methods">
          <div className="methods-grid">
            <div className="method-card">
            <div className="method-icon">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  <rect x="2" y="6" rx="2" width="20" height="14"></rect>
                </g>
              </svg>
            </div>
            <h3 className="method-title">Le Forfait</h3>
            <p className="section-content">
              Pour les dossiers dont la complexité est évaluable à
              l&apos;avance, un honoraire fixe et global est convenu. Cette
              formule offre une sécurité financière totale.
            </p>
            <ul className="method-list">
              <li className="method-item">
                <span>Montant global défini au départ</span>
              </li>
              <li className="method-item">
                <span>Idéal pour les procédures standard</span>
              </li>
              <li className="method-item">
                <span>Paiement échelonné possible</span>
              </li>
            </ul>
          </div>
          <div className="elevated method-card">
            <div className="method-icon">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle r="10" cx="12" cy="12"></circle>
                  <path d="M12 6v6l4 2"></path>
                </g>
              </svg>
            </div>
            <h3 className="method-title">Temps Passé</h3>
            <p className="section-content">
              Pour les dossiers complexes ou à l&apos;issue incertaine, la
              facturation s&apos;effectue sur la base d&apos;un taux horaire
              défini préalablement.
            </p>
            <ul className="method-list">
              <li className="method-item">
                <span>Détail précis des diligences effectuées</span>
              </li>
              <li className="method-item">
                <span>Facturation au fur et à mesure</span>
              </li>
              <li className="method-item">
                <span>Transparence sur le temps consacré</span>
              </li>
            </ul>
          </div>
          <div className="method-card">
            <div className="method-icon">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <h3 className="method-title">Aide Juridictionnelle</h3>
            <p className="section-content">
              Parce que l&apos;accès au droit est un principe fondamental,
              j&apos;accepte d&apos;intervenir au titre de l&apos;aide
              juridictionnelle selon la nature du litige.
            </p>
            <ul className="method-list">
              <li className="method-item">
                <span>Prise en charge totale ou partielle par l&apos;État</span>
              </li>
              <li className="method-item">
                <span>Sous conditions de ressources</span>
              </li>
              <li className="method-item">
                <span>Dossier de demande simplifié</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="additional-info">
        <div className="info-wrapper">
          <div className="info-block">
            <h2 className="section-title">Honoraires de Résultat</h2>
            <p className="section-content">
              En complément de l&apos;honoraire de base (forfaitaire ou au temps
              passé), un honoraire complémentaire peut être prévu. Il correspond
              à un pourcentage des gains obtenus ou de l&apos;économie réalisée
              pour le client. Cette modalité est obligatoirement prévue dans la
              convention d&apos;honoraires initiale.
            </p>
          </div>
          <div className="info-block">
            <h2 className="section-title">Protection Juridique</h2>
            <p className="section-content">
              Si vous disposez d&apos;un contrat d&apos;assurance de protection
              juridique (souvent inclus dans votre assurance habitation ou carte
              bancaire), les honoraires peuvent être pris en charge, en tout ou
              partie, par votre assureur. Vous conservez le libre choix de votre
              avocat.
            </p>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="section-title">Une question sur nos tarifs ?</h2>
          <p className="section-content">
            Chaque situation est unique. Contactez le cabinet pour une
            estimation personnalisée de vos besoins.
          </p>
          <div className="cta-buttons">
            <a href="#">
              <div className="btn btn-primary">
                <span>Demander un devis</span>
              </div>
            </a>
            <a href="#">
              <div className="btn btn-outline">
                <span>Nous contacter</span>
              </div>
            </a>
          </div>
        </div>
      </section>
        <Script
          html={`<script>
(function(){
  // Logic for subtle scroll reveal effects
  const revealOnScroll = () => {
    const cards = document.querySelectorAll(".method-card")
    const infoBlocks = document.querySelectorAll(".info-block")

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = entry.target.classList.contains("elevated") ? "translateY(-10px)" : "translateY(0)"
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    cards.forEach((card) => {
      card.style.opacity = "0"
      card.style.transform = "translateY(20px)"
      card.style.transition = "all 0.6s ease-out"
      observer.observe(card)
    })

    infoBlocks.forEach((block) => {
      block.style.opacity = "0"
      block.style.transform = "translateX(-20px)"
      block.style.transition = "all 0.6s ease-out"
      observer.observe(block)
    })
  }

  revealOnScroll()
})()
</script>`}
        ></Script>
      </MainLayout>
    </Fragment>
  )
}

export default Honoraires
