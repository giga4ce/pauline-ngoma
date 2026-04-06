import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'

const Footer = () => {
  return (
    <>
      <footer className="footer-wrapper">
        <div className="footer-container">
          <div className="footer-branding">
            <div className="footer-logo-group">
              <span className="footer-logo-text">
                Maître Pauline NGOMA MABALA
              </span>
              <span className="footer-logo-tagline">
                Cabinet d&apos;avocat au barreau d&apos;Aix-en-Provence
              </span>
            </div>
            <p className="section-content footer-description">
              Maître Pauline NGOMA MABALA vous accompagne avec rigueur,
              discrétion et engagement en dommage corporel, droit de la
              famille, droit des étrangers et droit pénal des victimes.
            </p>
          </div>
          <div className="footer-socials">
            <a aria-label="LinkedIn" className="footer-social-link" href="#">
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
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                  <circle r="2" cx="4" cy="4"></circle>
                </g>
              </svg>
            </a>
            <a aria-label="Instagram" className="footer-social-link" href="#">
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
                  <rect
                    x="2"
                    y="2"
                    rx="5"
                    ry="5"
                    width="20"
                    height="20"
                  ></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                </g>
              </svg>
            </a>
            <a aria-label="Facebook" className="footer-social-link" href="#">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </a>
          </div>
          <div className="footer-divider"></div>
          <div className="footer-bottom">
            <div className="footer-legal">
              <Link className="footer-legal-link" to="/mentions-legales">
                Mentions légales
              </Link>
              <span aria-hidden="true" className="footer-legal-separator">
                •
              </span>
              <Link
                className="footer-legal-link"
                to="/politique-de-confidentialite"
              >
                Politique de confidentialité
              </Link>
            </div>
            <p className="footer-copyright">
              © 2024 Maître Pauline NGOMA MABALA. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      <Script
        html={`<script defer data-name="footer-scroll-reveal">
(function(){
  const footerElements = document.querySelectorAll(".footer-branding, .footer-socials, .footer-bottom")

  const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        footerObserver.unobserve(entry.target)
      }
    })
  }, revealOptions)

  footerElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out"
    footerObserver.observe(el)
  })
})()
</script>`}
      ></Script>
    </>
  )
}

export default Footer
