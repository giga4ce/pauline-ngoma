import React from 'react'
import { Helmet } from 'react-helmet'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ValuesSection from '@/sections/shared/ValuesSection'
import CtaSection from '@/sections/shared/CtaSection'
import ExpertiseGridSection from '@/sections/shared/ExpertiseGridSection'
import ExpertiseRevealScript from '@/sections/shared/ExpertiseRevealScript'

const Expertise = () => {
  return (
    <>
      <Helmet>
        <title>Expertise | Maître Pauline NGOMA-MABALA</title>
        <meta
          property="og:title"
          content="Expertise | Maître Pauline NGOMA-MABALA"
        />
        <link
          rel="canonical"
          href="https://www.pauline-ngoma-mabala.fr/expertise"
        />
      </Helmet>
      <Navigation />
      <main className="expertise-page">
        <section className="expertise-hero expertise-page-hero">
          <div className="hero-media-wrapper">
            <img
              alt="Bureau d'avocat luxueux"
              src="https://images.pexels.com/photos/7841844/pexels-photo-7841844.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="hero-bg-image"
            />
            <div className="expertise-hero-overlay"></div>
          </div>
          <div className="expertise-hero-intro">
            <div className="content-limit">
              <span className="hero-pretitle">Excellence &amp; Engagement</span>
              <h1 className="expertise-hero-title hero-title">
                Nos Domaines d&apos;Expertise
              </h1>
              <p className="expertise-hero-description hero-subtitle">
                Une défense d&apos;excellence, un accompagnement sur mesure pour
                chaque client.
              </p>
            </div>
          </div>
        </section>
        <ExpertiseGridSection />
        <ValuesSection />
        <CtaSection />
      </main>
      <ExpertiseRevealScript />
      <Footer />
    </>
  )
}

export default Expertise
