import React from 'react'

const ExpertiseGridSection = () => {
  return (
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
              procédures de divorce, de séparation, ainsi que pour les questions
              relatives à l&apos;autorité parentale et à la pension alimentaire.
              Nous privilégions les solutions amiables lorsque possible, tout en
              protégeant vigoureusement vos intérêts et ceux de vos enfants
              devant le juge aux affaires familiales.
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
              approfondie du code de l&apos;entrée et du séjour des étrangers au
              service de votre projet de vie en France, en vous guidant à
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
              porter votre voix, de faire reconnaître votre statut de victime et
              d&apos;obtenir la sanction de l&apos;auteur ainsi que la réparation
              de vos préjudices.
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
  )
}

export default ExpertiseGridSection
