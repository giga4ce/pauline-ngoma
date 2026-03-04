import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import MainLayout from '@/layouts/MainLayout'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container1">
      <Helmet>
        <title>Contact - Full Pricey Quetzal</title>
        <meta property="og:title" content="Contact - Full Pricey Quetzal" />
        <link
          rel="canonical"
          href="https://paulinengomamabala-avocat.teleporthq.site/contact"
        />
      </Helmet>
      <MainLayout>
        <section className="honoraires-hero">
          <div className="honoraires-hero-overlay"></div>
          <div className="hero-content">
            <h1 className="hero-title">Contact</h1>
            <p className="hero-subtitle">
              Parlons de votre situation et construisons la meilleure strategie.
            </p>
          </div>
        </section>
        <section className="contact-page-wrapper">
          <div className="contact-contact-container">
            <header className="contact-header">
              <span className="section-subtitle">Prendre rendez-vous</span>
              <h1 className="hero-title">Contact</h1>
              <div className="header-divider"></div>
            </header>
            <div className="contact-contact-grid">
              <div className="contact-info-panel">
                <div className="info-card">
                  <div className="info-icon-wrapper">
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
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle r="3" cx="12" cy="10"></circle>
                      </g>
                    </svg>
                  </div>
                  <div className="info-content">
                    <h3 className="info-label">Adresse du Cabinet</h3>
                    <p className="section-content">
                      <span>
                        {' '}
                        12 Avenue des Champs-Élysées
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <span>
                        {' '}
                        75008 Paris, France
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </p>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-icon-wrapper">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div className="info-content">
                    <h3 className="info-label">Téléphone</h3>
                    <p className="section-content">+33 (0)1 40 50 60 70</p>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-icon-wrapper">
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
                        <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                      </g>
                    </svg>
                  </div>
                  <div className="info-content">
                    <h3 className="info-label">Email</h3>
                    <p className="section-content">cabinet@avocat-prestige.fr</p>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-icon-wrapper">
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
                  <div className="info-content">
                    <h3 className="info-label">Heures d&apos;ouverture</h3>
                    <p className="section-content">
                      <span>
                        {' '}
                        Lundi — Vendredi : 09:00 - 19:00
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <span>
                        {' '}
                        Samedi : Sur rendez-vous uniquement
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="contact-form-panel">
                <form
                  action="/contact"
                  method="POST"
                  data-form-id="767f1e8a-b0f2-49a7-a920-afd05f5b9ef7"
                  className="contact-contact-form"
                >
                <div className="contact-form-row">
                  <div className="contact-form-group">
                    <label htmlFor="nom" className="contact-form-label">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      required="true"
                      placeholder="Jean Dupont"
                      data-form-field-id="nom"
                      className="contact-form-input"
                    />
                  </div>
                </div>
                <div className="flex-row contact-form-row">
                  <div className="contact-form-group">
                    <label htmlFor="email" className="contact-form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required="true"
                      placeholder="jean@exemple.fr"
                      data-form-field-id="email"
                      className="contact-form-input"
                    />
                  </div>
                  <div className="contact-form-group">
                    <label htmlFor="telephone" className="contact-form-label">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      required="true"
                      placeholder="06 12 34 56 78"
                      data-form-field-id="telephone"
                      className="contact-form-input"
                    />
                  </div>
                </div>
                <div className="contact-form-row">
                  <div className="contact-form-group">
                    <label htmlFor="message" className="contact-form-label">
                      Votre message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required="true"
                      minlength="10"
                      placeholder="Comment pouvons-nous vous aider ?"
                      data-form-field-id="message"
                      className="contact-form-input contact-form-textarea"
                    ></textarea>
                  </div>
                </div>
                <div className="form-footer">
                  <button
                    id="thq_button_zCbQ"
                    name="button"
                    type="submit"
                    data-form-field-id="thq_button_zCbQ"
                    className="btn-accent btn btn-lg submit-button"
                  >
                    <span>Envoyer la demande</span>
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <p className="form-disclaimer">
                    Confidentialité garantie. Nous vous répondrons sous 24
                    heures ouvrées.
                  </p>
                </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <div className="contact-container2">
          <div className="contact-container3">
            <Script
              html={`<script>
(function(){
  const contactForm = document.querySelector(".contact-form")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      const submitBtn = contactForm.querySelector(".submit-button")
      const originalText = submitBtn.innerHTML

      submitBtn.disabled = true
      submitBtn.innerHTML = "Envoi en cours..."

      setTimeout(() => {
        submitBtn.style.backgroundColor = "#2ecc71"
        submitBtn.style.borderColor = "#2ecc71"
        submitBtn.innerHTML = "Message envoyé avec succès"

        contactForm.reset()

        setTimeout(() => {
          submitBtn.disabled = false
          submitBtn.innerHTML = originalText
          submitBtn.style.backgroundColor = ""
          submitBtn.style.borderColor = ""
        }, 3000)
      }, 1500)
    })
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
      </MainLayout>
    </div>
  )
}

export default Contact
