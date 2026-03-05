import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  const handleHomeBrandClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="navigation-container1">
      <nav className="navigation-wrapper">
        <div className="navigation-container">
          <Link to="/" onClick={handleHomeBrandClick}>
            <div
              aria-label="Maître Pauline NGOMA-MABALA - Home"
              className="navigation-brand"
            >
              <span className="navigation-logo-text section-title">
                <span>
                  {' '}
                  M
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="navigation-thq-navigation-logo-accent-elm1">
                  É
                </span>
                <span>
                  {' '}
                  P
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <div className="navigation-brand-details">
                <span className="navigation-brand-name">
                  Maître Pauline NGOMA-MABALA
                </span>
                <span className="navigation-brand-tagline">
                  Avocate au Barreau
                </span>
              </div>
            </div>
          </Link>
          <div className="navigation-desktop-menu">
            <ul className="navigation-links-list">
              <li>
                <Link to="/expertise">
                  <div className="navigation-link">
                    <span>Expertise</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/cabinet">
                  <div className="navigation-thq-navigation-link-elm2 navigation-link">
                    <span>Cabinet</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/honoraires">
                  <div className="navigation-link">
                    <span>Honoraires</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <div className="navigation-link">
                    <span>Contact</span>
                  </div>
                </Link>
              </li>
            </ul>
            <Link to="/contact">
              <div className="btn-sm btn navigation-cta btn-primary">
                <span>Prendre RDV</span>
              </div>
            </Link>
          </div>
          <button
            id="navigation-mobile-toggle"
            aria-label="Open Menu"
            aria-expanded="false"
            className="navigation-toggle"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 8h16M4 16h16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      <div id="navigation-mobile-overlay" className="navigation-mobile-overlay">
        <div className="navigation-overlay-header">
          <Link to="/" onClick={handleHomeBrandClick}>
            <div
              aria-label="Maître Pauline NGOMA-MABALA - Home"
              className="navigation-brand"
            >
              <span className="navigation-logo-text section-title">
                <span>
                  {' '}
                  M
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="navigation-thq-navigation-logo-accent-elm2">
                  É
                </span>
                <span>
                  {' '}
                  P
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
          </Link>
          <button
            id="navigation-mobile-close"
            aria-label="Close Menu"
            className="navigation-close"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-5.5-3.5l-5 5m0-5l5 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <div className="navigation-overlay-content">
          <ul className="navigation-mobile-links">
            <li>
              <Link to="/expertise">
                <div className="navigation-mobile-link hero-title">
                  <span>Expertise</span>
                </div>
              </Link>
            </li>
            <li>
              <div className="navigation-mobile-link hero-title">
                <span>Cabinet</span>
              </div>
            </li>
            <li>
              <Link to="/honoraires">
                <div className="navigation-mobile-link hero-title">
                  <span>Honoraires</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <div className="navigation-mobile-link hero-title">
                  <span>Contact</span>
                </div>
              </Link>
            </li>
          </ul>
          <div className="navigation-mobile-footer">
            <Link to="/contact">
              <div className="btn btn-primary btn-lg">
                <span>Prendre rendez-vous</span>
              </div>
            </Link>
            <div className="navigation-mobile-info">
              <p className="section-content">75008 Paris, France</p>
              <p className="section-content">cabinet@eloise-prestige.fr</p>
            </div>
          </div>
        </div>
      </div>
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<script>
        ;(function () {
          const mobileToggle = document.getElementById("navigation-mobile-toggle")
          const mobileClose = document.getElementById("navigation-mobile-close")
          const mobileOverlay = document.getElementById("navigation-mobile-overlay")
          const mobileLinks = document.querySelectorAll(".navigation-mobile-link")
          const openMenu = () => {
            mobileOverlay.style.display = "flex"
            document.body.style.overflow = "hidden"
            mobileToggle.setAttribute("aria-expanded", "true")
          }
          const closeMenu = () => {
            mobileOverlay.style.display = "none"
            document.body.style.overflow = ""
            mobileToggle.setAttribute("aria-expanded", "false")
          }
          const setActiveLink = () => {
            const currentPath = window.location.pathname
            const allLinks = document.querySelectorAll(".navigation-link, .navigation-mobile-link")

            allLinks.forEach((link) => {
              const parentAnchor = link.closest("a")
              if (parentAnchor) {
                let href = parentAnchor.getAttribute("href")

                // Handle empty or root href
                if (!href || href === "#") return

                // Create absolute URLs for comparison
                const linkUrl = new URL(href, window.location.origin)
                const currentUrl = new URL(window.location.href)

                // Normalize paths: remove trailing slashes and .html extensions
                const normalize = (path) => {
                  let p = path.toLowerCase().replace(/\\/\$/, "")
                  if (p.endsWith(".html")) {
                    p = p.substring(0, p.length - 5)
                  }
                  if (p === "" || p === "/index") return "/"
                  return p
                }

                const normalizedLinkPath = normalize(linkUrl.pathname)
                const normalizedCurrentPath = normalize(currentUrl.pathname)

                if (normalizedLinkPath === normalizedCurrentPath) {
                  link.classList.add("active")
                } else {
                  link.classList.remove("active")
                }
              }
            })
          }
          mobileToggle.addEventListener("click", openMenu)
          mobileClose.addEventListener("click", closeMenu)
          mobileLinks.forEach((link) => {
            link.addEventListener("click", closeMenu)
          })
          window.addEventListener("resize", () => {
            if (window.innerWidth > 767 && mobileOverlay.style.display === "flex") {
              closeMenu()
            }
          })
          document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && mobileOverlay.style.display === "flex") {
              closeMenu()
            }
          })
          // Initialize active state
          setActiveLink()
        })()
      </script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Navigation
