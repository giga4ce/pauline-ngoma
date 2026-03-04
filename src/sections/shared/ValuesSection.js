import React from 'react'

const ValuesSection = ({ emphasisClasses }) => {
  const [firstEmphasis, secondEmphasis, thirdEmphasis] = emphasisClasses

  return (
    <section className="expertise-values">
      <div className="content-limit">
        <div className="values-flex-container">
          <div className="values-content">
            <h2 className="section-title">Notre Engagement</h2>
            <p className="section-content">
              Chaque dossier est traité avec une exigence d&apos;excellence et
              une discrétion absolue. Notre cabinet s&apos;engage à vos côtés
              pour transformer la complexité juridique en solutions claires et
              pérennes.
            </p>
            <ul className="values-list">
              <li className="value-item">
                <span className="value-dot"></span>
                <span className="section-content">
                  <span className={firstEmphasis}>Excellence :</span>
                  <span>
                    {' '}
                    Une rigueur juridique sans compromis.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </li>
              <li className="value-item">
                <span className="value-dot"></span>
                <span className="section-content">
                  <span className={secondEmphasis}>Dévouement :</span>
                  <span>
                    {' '}
                    Votre cause au centre de notre stratégie.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </li>
              <li className="value-item">
                <span className="value-dot"></span>
                <span className="section-content">
                  <span className={thirdEmphasis}>Professionnalisme :</span>
                  <span>
                    {' '}
                    Une éthique irréprochable.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
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
