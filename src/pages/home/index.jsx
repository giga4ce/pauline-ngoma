import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import {
  CABINET_ADDRESS_LINES,
  CABINET_EMAIL,
  CABINET_EMAIL_HREF,
  CABINET_PHONE,
  CABINET_PHONE_HREF,
} from '@/config/cabinet'
import { useContactForm } from '@/hooks/useContactForm'

const Home = () => {
  const {
    feedback,
    handleSubmit,
    isError,
    isSubmitting,
    isSuccess,
    resetFeedback,
  } = useContactForm({
    subject: 'Nouvelle demande depuis la page d’accueil',
    successMessage:
      'Votre demande a bien été envoyée. Je reviendrai vers vous rapidement.',
  })

  return (
    <Fragment>
      <Helmet>
        <title>
          Maître Pauline NGOMA-MABALA | Avocate au barreau d&apos;Aix-en-Provence
        </title>
        <meta
          property="og:title"
          content="Maître Pauline NGOMA-MABALA | Avocate au barreau d'Aix-en-Provence"
        />
        <link
          rel="canonical"
          href="https://www.pauline-ngoma-mabala.fr/"
        />
      </Helmet>
      <Navigation></Navigation>
      <section className="hero-principal">
        <div className="hero-principal-background">
          <img
            alt="Cabinet d'avocat prestigieux"
            src="https://images.pexels.com/photos/7841462/pexels-photo-7841462.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            className="hero-principal-image"
          />
          <div className="hero-principal-scrim"></div>
        </div>
        <div className="hero-principal-container">
          <div className="hero-principal-content">
            <h1 className="home-hero-title hero-title">
              Maître Pauline NGOMA-MABALA
            </h1>
            <p className="hero-subtitle">
              Avocate au barreau d&apos;Aix-en-Provence – Défense et accompagnement des victimes
            </p>
            <p className="hero-description section-content">
              Dédiée à la protection de vos droits avec excellence et humanité.
              Spécialisée dans l&apos;accompagnement des victimes, Maître
              Prestige met son expertise au service de votre sérénité et de
              votre justice.
            </p>
            <div className="hero-principal-actions">
              <a href="#contact">
                <div className="btn-accent btn btn-lg">
                  <span>Prendre rendez-vous</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="presentation-succincte">
        <div className="presentation-container">
          <div className="presentation-grid">
            <div className="presentation-media">
              <div className="presentation-image-wrapper">
                <img
                  alt="Portrait de Maître Pauline NGOMA-MABALA"
                  src="https://images.pexels.com/photos/7841465/pexels-photo-7841465.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="presentation-image presentation-image-home"
                />
                <div className="presentation-image-accent"></div>
              </div>
            </div>
            <div className="presentation-content">
              <h2 className="section-title">
                Une expertise forgée par l&apos;engagement
              </h2>
              <p className="section-subtitle">
                Dévouement, Discrétion, Excellence
              </p>
              <div className="section-content">
                <p>
                  Maître Pauline NGOMA-MABALA intervient avec une rigueur
                  absolue dans les domaines du dommage corporel, du droit de la
                  famille, du droit des étrangers et du droit pénal des
                  victimes. Chaque dossier est traité avec une attention
                  personnalisée, garantissant une défense sur mesure et une
                  écoute attentive.
                </p>
                <p>
                  Son approche repose sur une relation de confiance mutuelle et
                  une transparence totale, afin de vous offrir la meilleure
                  stratégie juridique possible face aux épreuves de la vie.
                </p>
              </div>
              <Link to="/expertise">
                <div className="presentation-link btn btn-link">
                  <span>Découvrir le détail de mes expertises</span>
                  <svg
                    fill="none"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14m-7-7 7 7-7 7"></path>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="expertises" className="domaines-intervention">
        <div className="domaines-container">
          <header className="domaines-header">
            <h2 className="section-title">Domaines d&apos;intervention</h2>
            <p className="section-subtitle">
              Une défense spécialisée pour chaque situation
            </p>
          </header>
          <div className="domaines-grid">
            <article className="domaine-card">
              <div className="domaine-icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3v18m7-13l3 8a5 5 0 0 1-6 0zV7"></path>
                  <path d="M3 7h1a17 17 0 0 0 8-2a17 17 0 0 0 8 2h1M5 8l3 8a5 5 0 0 1-6 0zV7m2 14h10"></path>
                </svg>
              </div>
              <h3 className="domaine-title">Droit du dommage corporel</h3>
              <p className="section-content">
                Accompagnement intégral pour l&apos;indemnisation de vos
                préjudices physiques et psychologiques suite à un accident ou
                une agression.
              </p>
              <div className="domaine-footer">
                <span className="domaine-accent"></span>
              </div>
            </article>
            <article className="domaine-card">
              <div className="domaine-icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle r="4" cx="9" cy="7"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="domaine-title">Droit de la famille</h3>
              <p className="section-content">
                Gestion sensible et rigoureuse des divorces, successions, et
                questions relatives à la garde d&apos;enfants et aux pensions.
              </p>
              <div className="domaine-footer">
                <span className="domaine-accent"></span>
              </div>
            </article>
            <article className="domaine-card">
              <div className="domaine-icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="domaine-title">Droit des étrangers</h3>
              <p className="section-content">
                Assistance pour les titres de séjour, demandes d&apos;asile et
                recours contre les mesures d&apos;éloignement avec réactivité.
              </p>
              <div className="domaine-footer">
                <span className="domaine-accent"></span>
              </div>
            </article>
            <article className="domaine-card">
              <div className="domaine-icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m14 13l-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381M16 16l6-6m-.5.5l-8-8M8 8l6-6M8.5 7.5l8 8"></path>
                </svg>
              </div>
              <h3 className="domaine-title">Droit pénal des victimes</h3>
              <p className="section-content">
                Protection et défense de vos intérêts devant les juridictions
                pénales pour que votre statut de victime soit pleinement
                reconnu.
              </p>
              <div className="domaine-footer">
                <span className="domaine-accent"></span>
              </div>
            </article>
          </div>
          <div className="domaines-cta">
            <Link to="/expertise">
              <div className="btn btn-outline">
                <span>Voir le détail de mes expertises</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="nos-valeurs">
        <div className="valeurs-container">
          <div className="valeurs-grid">
            <div className="valeur-item">
              <div className="valeur-icon-box">
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
                  <rect
                    x="3"
                    y="11"
                    rx="2"
                    ry="2"
                    width="18"
                    height="11"
                  ></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <h3 className="valeur-title">Confidentialité</h3>
              <p className="section-content">
                Le secret professionnel est le socle de ma relation avec vous. Vos
                échanges sont protégés avec la plus grande rigueur.
              </p>
            </div>
            <div className="valeur-item">
              <div className="valeur-icon-box">
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="valeur-title">Engagement</h3>
              <p className="section-content">
                Une implication totale dans chaque dossier pour assurer une
                défense percutante et indéfectible.
              </p>
            </div>
            <div className="valeur-item">
              <div className="valeur-icon-box">
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
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3 className="valeur-title">Excellence</h3>
              <p className="section-content">
                Une quête permanente de perfection juridique et de précision
                technique pour vos intérêts.
              </p>
            </div>
            <div className="valeur-item">
              <div className="valeur-icon-box">
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
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <h3 className="valeur-title">Accompagnement personnalisé</h3>
              <p className="section-content">
                Au-delà du droit, une présence humaine pour vous guider
                sereinement à travers les procédures.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="temoignages-selectionnes">
        <div className="temoignages-container">
          <div className="temoignages-card">
            <div className="temoignages-slider">
              <section className="testimonials-luxury">
                <div className="testimonials-container">
                  <div className="testimonials-header">
                    <h2 className="section-title">Témoignages</h2>
                    <div className="header-line"></div>
                  </div>
                  <div className="testimonials-slider-wrapper">
                    <div id="testimonials-track" className="testimonials-track">
                      <div className="testimonial-card">
                        <div className="quote-icon-box">
                          <svg
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M9 5a2 2 0 0 1 2 2v6c0 3.13-1.65 5.193-4.757 5.97a1 1 0 1 1-.486-1.94C7.984 16.473 9 15.203 9 13v-1H6a2 2 0 0 1-1.995-1.85L4 10V7a2 2 0 0 1 2-2zm9 0a2 2 0 0 1 2 2v6c0 3.13-1.65 5.193-4.757 5.97a1 1 0 1 1-.486-1.94C16.984 16.473 18 15.203 18 13v-1h-3a2 2 0 0 1-1.995-1.85L13 10V7a2 2 0 0 1 2-2z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                        <p className="testimonial-text section-content">
                          &quot;Un accompagnement d&apos;une rare humanité et
                          d&apos;un professionnalisme exemplaire. Maître S. a su
                          défendre mes intérêts avec une détermination sans
                          faille lors de mon divorce.&quot;
                        </p>
                        <div className="testimonial-author">
                          <span className="author-name">Mme Catherine D.</span>
                          <span className="author-label">
                            Droit de la famille
                          </span>
                        </div>
                      </div>
                      <div className="testimonial-card">
                        <div className="quote-icon-box">
                          <svg
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M9 5a2 2 0 0 1 2 2v6c0 3.13-1.65 5.193-4.757 5.97a1 1 0 1 1-.486-1.94C7.984 16.473 9 15.203 9 13v-1H6a2 2 0 0 1-1.995-1.85L4 10V7a2 2 0 0 1 2-2zm9 0a2 2 0 0 1 2 2v6c0 3.13-1.65 5.193-4.757 5.97a1 1 0 1 1-.486-1.94C16.984 16.473 18 15.203 18 13v-1h-3a2 2 0 0 1-1.995-1.85L13 10V7a2 2 0 0 1 2-2z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                        <p className="testimonial-text section-content">
                          &quot;Grâce à son expertise en dommage corporel,
                          j&apos;ai pu obtenir une indemnisation juste après mon
                          accident. Une écoute attentive qui fait toute la
                          différence dans les moments difficiles.&quot;
                        </p>
                        <div className="testimonial-author">
                          <span className="author-name">M. Jean-Pierre L.</span>
                          <span className="author-label">Dommage Corporel</span>
                        </div>
                      </div>
                      <div className="testimonial-card">
                        <div className="quote-icon-box">
                          <svg
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M9 5a2 2 0 0 1 2 2v6c0 3.13-1.65 5.193-4.757 5.97a1 1 0 1 1-.486-1.94C7.984 16.473 9 15.203 9 13v-1H6a2 2 0 0 1-1.995-1.85L4 10V7a2 2 0 0 1 2-2zm9 0a2 2 0 0 1 2 2v6c0 3.13-1.65 5.193-4.757 5.97a1 1 0 1 1-.486-1.94C16.984 16.473 18 15.203 18 13v-1h-3a2 2 0 0 1-1.995-1.85L13 10V7a2 2 0 0 1 2-2z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                        <p className="testimonial-text section-content">
                          &quot;Une réactivité impressionnante et des conseils
                          stratégiques précieux. Je recommande vivement ce
                          cabinet pour toute affaire pénale complexe.&quot;
                        </p>
                        <div className="testimonial-author">
                          <span className="author-name">M. Thomas B.</span>
                          <span className="author-label">Droit Pénal</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="testimonials-nav" className="testimonials-nav">
                    <button
                      aria-label="Slide 1"
                      className="active testimonial-dot"
                    ></button>
                    <button
                      aria-label="Slide 2"
                      className="testimonial-dot"
                    ></button>
                    <button
                      aria-label="Slide 3"
                      className="testimonial-dot"
                    ></button>
                  </div>
                </div>
              </section>
              <Script
                html={`<script>
(function(){
  ;(function () {
    const track = document.getElementById("testimonials-track")
    const dots = document.querySelectorAll(".testimonial-dot")
    const wrapper = document.querySelector(".testimonials-slider-wrapper")
    const slides = track ? Array.from(track.children) : []

    if (!track || !wrapper || !dots.length || !slides.length) {
      return
    }

    let currentIndex = 0
    const slideCount = dots.length
    let autoScrollInterval

    function getSlideWidth() {
      return wrapper.getBoundingClientRect().width
    }

    function syncSliderLayout() {
      const slideWidth = getSlideWidth()

      slides.forEach((slide) => {
        slide.style.width = \`\${slideWidth}px\`
        slide.style.flex = \`0 0 \${slideWidth}px\`
      })

      track.style.width = \`\${slideWidth * slideCount}px\`
      track.style.transform = \`translateX(-\${currentIndex * slideWidth}px)\`
    }

    function updateSlider(index) {
      currentIndex = index
      const offset = index * getSlideWidth()
      track.style.transform = \`translateX(-\${offset}px)\`

      dots.forEach((dot, i) => {
        if (i === index) {
          dot.classList.add("active")
        } else {
          dot.classList.remove("active")
        }
      })
    }

    function nextSlide() {
      let nextIndex = (currentIndex + 1) % slideCount
      updateSlider(nextIndex)
    }

    function startAutoScroll() {
      stopAutoScroll()
      autoScrollInterval = setInterval(nextSlide, 5000)
    }

    function stopAutoScroll() {
      if (autoScrollInterval) {
        clearInterval(autoScrollInterval)
      }
    }

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        updateSlider(index)
        startAutoScroll() // Reset timer on manual click
      })
    })

    // Pause on hover
    wrapper.addEventListener("mouseenter", stopAutoScroll)
    wrapper.addEventListener("mouseleave", startAutoScroll)
    window.addEventListener("resize", syncSliderLayout)

    // Initialize
    syncSliderLayout()
    updateSlider(0)
    startAutoScroll()
  })()
})()
</script>`}
              ></Script>
            </div>
          </div>
        </div>
      </section>
      <section className="deroule-accompagnement">
        <div className="deroule-container">
          <header className="deroule-header">
            <h2 className="section-title">Votre parcours juridique</h2>
            <p className="section-subtitle">
              Une méthodologie claire et transparente
            </p>
          </header>
          <div className="deroule-steps">
            <div className="step-item">
              <div className="step-number">
                <span>01</span>
              </div>
              <div className="step-content">
                <h3 className="step-title">Premier contact</h3>
                <p className="section-content">
                  Un échange initial pour comprendre votre situation et définir
                  les enjeux prioritaires de votre dossier.
                </p>
              </div>
              <div className="step-connector"></div>
            </div>
            <div className="step-item">
              <div className="step-number">
                <span>02</span>
              </div>
              <div className="step-content">
                <h3 className="step-title">Analyse et stratégie</h3>
                <p className="section-content">
                  Étude approfondie des pièces et élaboration d&apos;une
                  stratégie juridique sur mesure pour optimiser vos chances de
                  succès.
                </p>
              </div>
              <div className="step-connector"></div>
            </div>
            <div className="step-item">
              <div className="step-number">
                <span>03</span>
              </div>
              <div className="step-content">
                <h3 className="step-title">Accompagnement et suivi</h3>
                <p className="section-content">
                  Représentation active et suivi constant de l&apos;avancement
                  de votre procédure jusqu&apos;à la résolution finale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="prise-contact">
        <div className="contact-container">
          <div className="contact-grid">
            <div className="contact-info-block">
              <h2 className="section-title">Contactez-moi</h2>
              <p className="section-subtitle">
                Maître Pauline NGOMA-MABALA vous répond
              </p>
              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-icon">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">Téléphone</span>
                    <span className="contact-value">
                      <a href={CABINET_PHONE_HREF}>{CABINET_PHONE}</a>
                    </span>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <div className="contact-icon">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">Email</span>
                    <span className="contact-value">
                      <a href={CABINET_EMAIL_HREF}>{CABINET_EMAIL}</a>
                    </span>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <div className="contact-icon">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle r="3" cx="12" cy="10"></circle>
                    </svg>
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">Adresse</span>
                    <span className="contact-value">
                      {CABINET_ADDRESS_LINES.join(', ')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form-block">
              <form
                data-form-id="8876550f-271e-45f2-bca8-5d5bb3f1cc5c"
                className="contact-form"
                onChange={resetFeedback}
                onSubmit={handleSubmit}
              >
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="nom"
                    required
                    placeholder="Votre nom"
                    data-form-field-id="name"
                    className="form-input"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="votre@email.com"
                      data-form-field-id="email"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="telephone"
                      placeholder="06 00 00 00 00"
                      data-form-field-id="phone"
                      className="form-input"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Comment puis-je vous aider ?"
                    data-form-field-id="message"
                    className="form-textarea"
                  ></textarea>
                </div>
                <input
                  type="text"
                  name="_honey"
                  tabIndex="-1"
                  autoComplete="off"
                  className="form-honeypot"
                />
                <input
                  type="hidden"
                  name="origine"
                  value="Page d’accueil"
                />
                <button
                  id="thq_button_rKdI"
                  name="button"
                  type="submit"
                  data-form-field-id="thq_button_rKdI"
                  className="btn-accent btn btn-lg btn-full"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Prendre rendez-vous'}
                </button>
                {feedback ? (
                  <div
                    className={`form-flash ${
                      isSuccess ? 'form-flash-success' : 'form-flash-error'
                    }`}
                    role="status"
                    aria-live="polite"
                  >
                    <span className="form-flash-icon" aria-hidden="true">
                      {isSuccess ? '✓' : '!'}
                    </span>
                    <p className="form-flash-message">{feedback}</p>
                  </div>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </section>
      <Script
        html={`<script defer data-name="lawyer-interactions">
(function(){
  // Subtle scroll reveal effect
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        revealObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  document.querySelectorAll(".domaine-card, .valeur-item, .step-item").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "all 0.6s ease-out"
    revealObserver.observe(el)
  })

  // Simple testimonial "slider" dots interaction
  const dots = document.querySelectorAll(".temoignage-dot")
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      dots.forEach((d) => d.classList.remove("active"))
      dot.classList.add("active")
      // In a real implementation, this would trigger the slider movement
    })
  })

})()
</script>`}
      ></Script>
      <Footer></Footer>
    </Fragment>
  )
}

export default Home
