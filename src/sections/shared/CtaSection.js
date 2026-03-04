import React from 'react'

const CtaSection = () => {
  return (
    <section className="expertise-cta-section">
      <div className="cta-inner-container">
        <div className="cta-text-block">
          <h2 className="section-title">Besoin d&apos;un conseil juridique ?</h2>
          <p className="section-content">
            Le cabinet vous reçoit sur rendez-vous pour analyser votre situation
            et définir la meilleure stratégie de défense.
          </p>
        </div>
        <div className="cta-actions">
          <button className="btn btn-primary btn-lg">
            Prendre rendez-vous
          </button>
          <button className="btn btn-outline btn-lg">Nous contacter</button>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
