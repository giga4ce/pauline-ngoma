import React from 'react'

const ValuesSection = ({ emphasisClasses = [] }) => {
  return (
    <section className="expertise-values">
      <div className="content-limit">
        <div className="values-flex-container">
          <div className="values-content">
            <h2 className="section-title">Mon Engagement</h2>
            <p className="section-content">
              Chaque dossier est traité avec une exigence d&apos;excellence et
              une discrétion absolue. Je m&apos;engage à vos côtés
              pour transformer la complexité juridique en solutions claires et
              pérennes.
            </p>
            <ul className="values-list">
              <li className="value-item">
                <span className="value-dot"></span>
                <span className="section-content">
                  <strong
                    className={`values-emphasis ${emphasisClasses[0] || ''}`.trim()}
                  >
                    Excellence :
                  </strong>{' '}
                  Une rigueur juridique sans compromis.
                </span>
              </li>
              <li className="value-item">
                <span className="value-dot"></span>
                <span className="section-content">
                  <strong
                    className={`values-emphasis ${emphasisClasses[1] || ''}`.trim()}
                  >
                    Dévouement :
                  </strong>{' '}
                  Votre cause au centre de ma stratégie.
                </span>
              </li>
              <li className="value-item">
                <span className="value-dot"></span>
                <span className="section-content">
                  <strong
                    className={`values-emphasis ${emphasisClasses[2] || ''}`.trim()}
                  >
                    Professionnalisme :
                  </strong>{' '}
                  Une éthique irréprochable.
                </span>
              </li>
            </ul>
          </div>
          <div className="values-image-wrapper">
            <img
              alt="Symbole de la justice"
              src="https://images.pexels.com/photos/6593883/pexels-photo-6593883.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="values-img"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ValuesSection
