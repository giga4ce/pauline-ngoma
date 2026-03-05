import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ValuesSection from '@/sections/shared/ValuesSection'
import CtaSection from '@/sections/shared/CtaSection'
import ExpertiseGridSection from '@/sections/shared/ExpertiseGridSection'
import ExpertiseRevealScript from '@/sections/shared/ExpertiseRevealScript'
import './expertise.css'

const Expertise = (props) => {
  return (
    <div className="expertise-container10">
      <Helmet>
        <title>Expertise - Full Pricey Quetzal</title>
        <meta property="og:title" content="Expertise - Full Pricey Quetzal" />
        <link
          rel="canonical"
          href="https://paulinengomamabala-avocat.teleporthq.site/expertise"
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
            <main className="expertise-page">
              <section className="expertise-hero">
                <div className="hero-media-wrapper">
                  <img
                    alt="Bureau d'avocat luxueux"
                    src="https://images.pexels.com/photos/7841844/pexels-photo-7841844.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="hero-bg-image"
                  />
                  <div className="expertise-hero-overlay">
                    <span className="hero-pretitle">
                      Excellence &amp; Engagement
                    </span>
                  </div>
                </div>
                <div className="expertise-hero-content-container">
                  <div className="content-limit">
                    <h1 className="expertise-hero-title1 hero-title">
                      Nos Domaines d&apos;Expertise
                    </h1>
                    <p className="expertise-hero-subtitle hero-subtitle">
                      Une défense d&apos;excellence, un accompagnement sur
                      mesure pour chaque client.
                    </p>
                  </div>
                </div>
              </section>
              <section className="expertise-expertise-grid-section">
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
                  'expertise-text10',
                  'expertise-text12',
                  'expertise-text14',
                ]}
              />
            </main>
            <div className="expertise-container11">
              <div className="expertise-container12">
                <Script
                  html={`<style>
        @keyframes fadeUpHero {to {opacity: 1;
transform: translateY(0);}}
        </style> `}
                ></Script>
              </div>
            </div>
            <div className="expertise-container13">
              <div className="expertise-container14">
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
            <Navigation></Navigation>
            <main className="expertise-page">
              <section className="expertise-hero">
                <div className="hero-media-wrapper">
                  <img
                    alt="Bureau d'avocat luxueux"
                    src="https://images.pexels.com/photos/7841844/pexels-photo-7841844.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="hero-bg-image"
                  />
                  <div className="expertise-hero-overlay1"></div>
                </div>
                <div className="expertise-hero-content-container1">
                  <div className="content-limit">
                    <h1 className="hero-title expertise-hero-title2">
                      Nos Domaines d&apos;Expertise
                    </h1>
                    <p className="expertise-hero-subtitle1 hero-subtitle">
                      Une défense d&apos;excellence, un accompagnement sur
                      mesure pour chaque client.
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
                  'expertise-text16',
                  'expertise-text18',
                  'expertise-text20',
                ]}
              />
            </main>
            <div className="expertise-container15">
              <div className="expertise-container16">
                <Script
                  html={`<style>
        @keyframes fadeUpHero {to {opacity: 1;
transform: translateY(0);}}
        </style> `}
                ></Script>
              </div>
            </div>
            <div className="expertise-container17">
              <div className="expertise-container18">
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
            <Navigation></Navigation>
          </div>
        </div>
        <div className="hero-content-container">
          <div className="expertise-thq-hero-scroll-indicator-elm hero-scroll-indicator"></div>
        </div>
      </section>
      <ExpertiseGridSection />
      <CtaSection />
      <ExpertiseRevealScript
        containerClassName="expertise-container19"
        contentClassName="expertise-container20"
      />
      <Footer></Footer>
    </div>
  )
}

export default Expertise
