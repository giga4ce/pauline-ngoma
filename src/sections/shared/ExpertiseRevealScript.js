import React from 'react'

import Script from 'dangerous-html/react'

const ExpertiseRevealScript = ({ containerClassName, contentClassName }) => {
  return (
    <div className={containerClassName}>
      <div className={contentClassName}>
        <Script
          html={`<script>
(function(){
  // Logic for scroll-triggered reveal animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  const cards = document.querySelectorAll(".expertise-item-card")
  cards.forEach((card, index) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = \`opacity 0.6s ease \${index * 0.15}s, transform 0.6s ease \${index * 0.15}s\`
    observer.observe(card)
  })

  const ctaContent = document.querySelector(".cta-inner-container")
  if (ctaContent) {
    ctaContent.style.opacity = "0"
    ctaContent.style.transform = "translateY(20px)"
    ctaContent.style.transition = "opacity 0.8s ease, transform 0.8s ease"

    const ctaObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        ctaContent.style.opacity = "1"
        ctaContent.style.transform = "translateY(0)"
      }
    }, observerOptions)

    ctaObserver.observe(ctaContent)
  }
})()
</script>`}
        ></Script>
      </div>
    </div>
  )
}

export default ExpertiseRevealScript
