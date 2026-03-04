import React from 'react'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

const MainLayout = ({ children, showNavigation = true, showFooter = true }) => {
  return (
    <>
      {showNavigation ? <Navigation></Navigation> : null}
      {children}
      {showFooter ? <Footer></Footer> : null}
    </>
  )
}

export default MainLayout
