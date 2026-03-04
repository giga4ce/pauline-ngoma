import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ValuesSection from '@/sections/shared/ValuesSection'
import CtaSection from '@/sections/shared/CtaSection'
import './cabinet.css'

const Cabinet = (props) => {
  return (
    <div className="cabinet-container10">
      <Helmet>
        <title>Cabinet - Full Pricey Quetzal</title>
        <meta property="og:title" content="Cabinet - Full Pricey Quetzal" />
        <link
          rel="canonical"
          href="https://paulinengomamabala-avocat.teleporthq.site/cabinet"
        />
      </Helmet>
      <section className="expertise-hero-wrapper">
        <div className="expertise-hero-media">
          <img
            alt="Bureau d'avocat luxueux"
            src="https://images.pexels.com/photos/7841844/pexels-photo-7841844.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            className="hero-bg-img"
          />
          <div className="hero-overlay">
            <Navigation></Navigation>
            <main className="cabinet-thq-expertise-page-elm1 expertise-page"></main>
            <div className="cabinet-container11">
              <div className="cabinet-container12">
                <Script
                  html={`<style>
        @keyframes fadeUpHero {to {opacity: 1;
transform: translateY(0);}}
        </style> `}
                ></Script>
              </div>
            </div>
            <div className="cabinet-container13">
              <div className="cabinet-container14">
                <Script
                  html={`<script>
(function(){
  // Logic for reveal animations on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        revealOnScroll.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Target cards and values section for entrance animation
  const animatedElements = document.querySelectorAll(".expertise-card, .values-content, .values-image-wrapper")

  animatedElements.forEach((el, index) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = \`all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) \${index * 0.1}s\`
    revealOnScroll.observe(el)
  })
})()
</script>`}
                ></Script>
              </div>
            </div>
            <main className="expertise-page">
              <section className="expertise-hero">
                <div className="hero-media-wrapper">
                  <img
                    alt="Bureau d'avocat luxueux"
                    src="https://images.pexels.com/photos/7841844/pexels-photo-7841844.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="hero-bg-image"
                  />
                  <div className="cabinet-thq-hero-overlay-elm2 expertise-hero-overlay1"></div>
                </div>
                <div className="expertise-hero-content-container1">
                  <div className="content-limit">
                    <h1 className="hero-title expertise-hero-title2">
                      Un cabinet engagé à vos côtés
                    </h1>
                    <p className="expertise-hero-subtitle1 hero-subtitle">
                      Expertise, proximité et défense rigoureuse de vos intérêts
                      : un accompagnement d&apos;excellence.
                    </p>
                  </div>
                </div>
              </section>
              <section className="expertise-expertise-grid-section1">
                <div className="content-limit">
                  <div className="grid-header">
                    <h2 className="section-title">
                      Domaines d&apos;Intervention
                    </h2>
                    <p className="section-content">
                      Notre cabinet mobilise son savoir-faire et sa rigueur pour
                      protéger vos intérêts avec dévouement et
                      professionnalisme.
                    </p>
                  </div>
                  <div className="expertise-cards-container">
                    <div className="expertise-card">
                      <div className="card-icon-wrapper">
                        <svg
                          fill="none"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        </svg>
                      </div>
                      <h3 className="card-title">Droit du dommage corporel</h3>
                      <p className="section-content">
                        Réparation intégrale des préjudices subis lors
                        d&apos;accidents de la route, erreurs médicales ou
                        agressions.
                      </p>
                      <div className="card-accent-line"></div>
                    </div>
                    <div className="expertise-card">
                      <div className="card-icon-wrapper">
                        <svg
                          fill="none"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <g>
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <circle r="4" cx="9" cy="7"></circle>
                            <path d="M19 8v6m3-3h-6"></path>
                          </g>
                        </svg>
                      </div>
                      <h3 className="card-title">Droit de la famille</h3>
                      <p className="section-content">
                        Accompagnement humain et stratégique dans les procédures
                        de divorce, garde d&apos;enfants et successions
                        complexes.
                      </p>
                      <div className="card-accent-line"></div>
                    </div>
                    <div className="expertise-card">
                      <div className="card-icon-wrapper">
                        <svg
                          fill="none"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <g>
                            <path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"></path>
                            <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0m0 0H2m13 0h7"></path>
                          </g>
                        </svg>
                      </div>
                      <h3 className="card-title">Droit des étrangers</h3>
                      <p className="section-content">
                        Conseil et défense pour les titres de séjour,
                        naturalisations et recours contre les mesures
                        d&apos;éloignement.
                      </p>
                      <div className="card-accent-line"></div>
                    </div>
                    <div className="expertise-card">
                      <div className="card-icon-wrapper">
                        <svg
                          fill="none"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <g>
                            <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                          </g>
                        </svg>
                      </div>
                      <h3 className="card-title">Droit pénal des victimes</h3>
                      <p className="section-content">
                        Assistance rigoureuse des victimes d&apos;infractions
                        pénales tout au long de la procédure judiciaire et du
                        procès.
                      </p>
                      <div className="card-accent-line"></div>
                    </div>
                  </div>
                </div>
              </section>
              <ValuesSection
                emphasisClasses={[
                  'cabinet-text10',
                  'cabinet-text12',
                  'cabinet-text14',
                ]}
              />
            </main>
            <div className="cabinet-container15">
              <div className="cabinet-container16">
                <Script
                  html={`<style>
        @keyframes fadeUpHero {to {opacity: 1;
transform: translateY(0);}}
        </style> `}
                ></Script>
              </div>
            </div>
            <div className="cabinet-container17">
              <div className="cabinet-container18">
                <Script
                  html={`<script>
(function(){
  // Logic for reveal animations on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        revealOnScroll.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Target cards and values section for entrance animation
  const animatedElements = document.querySelectorAll(".expertise-card, .values-content, .values-image-wrapper")

  animatedElements.forEach((el, index) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = \`all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) \${index * 0.1}s\`
    revealOnScroll.observe(el)
  })
})()
</script>`}
                ></Script>
              </div>
            </div>
            <Footer>
              <Navigation></Navigation>
            </Footer>
            <Navigation></Navigation>
            <Footer></Footer>
          </div>
        </div>
        <div className="hero-content-container">
          <div className="cabinet-thq-hero-scroll-indicator-elm hero-scroll-indicator"></div>
        </div>
      </section>
      <section className="expertise-grid-section">
        <div className="expertise-container">
          <div className="expertise-item-card">
            <div className="card-visual">
              <div className="icon-wrapper">
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
                    <path d="M12 3v18m7-13l3 8a5 5 0 0 1-6 0zV7"></path>
                    <path d="M3 7h1a17 17 0 0 0 8-2a17 17 0 0 0 8 2h1M5 8l3 8a5 5 0 0 1-6 0zV7m2 14h10"></path>
                  </g>
                </svg>
              </div>
              <div className="gold-accent-line"></div>
            </div>
            <div className="card-content">
              <h2 className="section-title">Droit du dommage corporel</h2>
              <p className="section-content">
                Nous accompagnons les victimes d&apos;accidents de la route,
                d&apos;erreurs médicales ou d&apos;agressions pour obtenir une
                réparation intégrale de leurs préjudices. Notre approche combine
                expertise juridique et sensibilité humaine pour garantir que
                chaque victime reçoive l&apos;indemnisation juste qu&apos;elle
                mérite face aux compagnies d&apos;assurances et aux tribunaux.
              </p>
              <a href="#">
                <div className="btn btn-link">
                  <span>En savoir plus</span>
                </div>
              </a>
            </div>
          </div>
          <div className="expertise-item-card">
            <div className="card-visual">
              <div className="icon-wrapper">
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
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle r="4" cx="9" cy="7"></circle>
                  </g>
                </svg>
              </div>
              <div className="gold-accent-line"></div>
            </div>
            <div className="card-content">
              <h2 className="section-title">Droit de la famille</h2>
              <p className="section-content">
                Le cabinet intervient avec discrétion et fermeté dans les
                procédures de divorce, de séparation, ainsi que pour les
                questions relatives à l&apos;autorité parentale et à la pension
                alimentaire. Nous privilégions les solutions amiables lorsque
                possible, tout en protégeant vigoureusement vos intérêts et ceux
                de vos enfants devant le juge aux affaires familiales.
              </p>
              <a href="#">
                <div className="btn btn-link">
                  <span>En savoir plus</span>
                </div>
              </a>
            </div>
          </div>
          <div className="expertise-item-card">
            <div className="card-visual">
              <div className="icon-wrapper">
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
                    <path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"></path>
                    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0m0 0H2m13 0h7"></path>
                  </g>
                </svg>
              </div>
              <div className="gold-accent-line"></div>
            </div>
            <div className="card-content">
              <h2 className="section-title">Droit des étrangers</h2>
              <p className="section-content">
                Conseil et assistance pour les demandes de titres de séjour, les
                recours contre les mesures d&apos;éloignement (OQTF) et les
                procédures de naturalisation. Nous mettons notre connaissance
                approfondie du code de l&apos;entrée et du séjour des étrangers
                au service de votre projet de vie en France, en vous guidant à
                travers les complexités administratives et judiciaires.
              </p>
              <a href="#">
                <div className="btn btn-link">
                  <span>En savoir plus</span>
                </div>
              </a>
            </div>
          </div>
          <div className="expertise-item-card">
            <div className="card-visual">
              <div className="icon-wrapper">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m14 13l-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381M16 16l6-6m-.5.5l-8-8M8 8l6-6M8.5 7.5l8 8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="gold-accent-line"></div>
            </div>
            <div className="card-content">
              <h2 className="section-title">Droit pénal des victimes</h2>
              <p className="section-content">
                Nous assurons la défense exclusive des victimes
                d&apos;infractions pénales à chaque étape de la procédure : du
                dépôt de plainte jusqu&apos;à l&apos;audience devant le Tribunal
                Correctionnel ou la Cour d&apos;Assises. Notre mission est de
                porter votre voix, de faire reconnaître votre statut de victime
                et d&apos;obtenir la sanction de l&apos;auteur ainsi que la
                réparation de vos préjudices.
              </p>
              <a href="#">
                <div className="btn btn-link">
                  <span>En savoir plus</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <CtaSection />
      <div className="cabinet-container19">
        <div className="cabinet-container20">
          <Script
            html={`<script>
(function(){
  // Logic for scroll-triggered reveal animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  const cards = document.querySelectorAll(".expertise-item-card")
  cards.forEach((card, index) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = \`opacity 0.6s ease \${index * 0.15}s, transform 0.6s ease \${index * 0.15}s\`
    observer.observe(card)
  })

  const ctaContent = document.querySelector(".cta-inner-container")
  if (ctaContent) {
    ctaContent.style.opacity = "0"
    ctaContent.style.transform = "translateY(20px)"
    ctaContent.style.transition = "opacity 0.8s ease, transform 0.8s ease"

    const ctaObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        ctaContent.style.opacity = "1"
        ctaContent.style.transform = "translateY(0)"
      }
    }, observerOptions)

    ctaObserver.observe(ctaContent)
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
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
              <h1 className="hero-title">Un cabinet engagé à vos côtés</h1>
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
                    <span>Découvrir le cabinet</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="vision" className="cabinet-vision-section">
          <div className="cabinet-content-limit content-limit">
            <div className="section-header-centered">
              <h2 className="section-title">Notre Cabinet</h2>
              <div className="accent-line"></div>
              <p className="max-width-700 section-content">
                Ancré dans une tradition d&apos;excellence et tourné vers
                l&apos;avenir, notre cabinet accompagne ses clients avec une
                rigueur absolue et une discrétion totale.
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
                  Le secret professionnel est le socle de notre relation de
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
                <h2 className="section-title">Notre Approche</h2>
                <p className="section-content">
                  Nous croyons qu&apos;une défense efficace repose sur une
                  compréhension profonde de la situation humaine de nos clients.
                  Chaque stratégie est élaborée sur mesure, après une écoute
                  attentive et une analyse prospective des enjeux.
                </p>
                <p className="section-content">
                  Notre cabinet privilégie une approche proactive, anticipant
                  les obstacles juridiques pour sécuriser vos intérêts sur le
                  long terme. Nous vous accompagnons à chaque étape, de la
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
              <h2 className="section-title">Nos Engagements</h2>
              <p className="section-content">
                Quatre piliers fondamentaux qui guident notre pratique
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
                    Nous prenons le temps nécessaire pour comprendre vos besoins
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
                    Le temps est un facteur clé en droit. Nous nous engageons à
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
                    Pas de solutions génériques. Nous bâtissons une défense
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
                Le cabinet vous accueille sur rendez-vous pour étudier votre
                situation.
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
      <div className="cabinet-container21">
        <div className="cabinet-container22">
          <Script
            html={`<script>
(function(){
  // Logic to handle scroll reveals or interactive elements can be added here
  // For now, keeping it clean as per the luxury institutional mood
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Cabinet
