import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Expertise from '@/pages/expertise'
import Honoraires from '@/pages/honoraires'
import Home from '@/pages/home'
import Contact from '@/pages/contact'
import Cabinet from '@/pages/cabinet'
import MentionsLegales from '@/pages/mentions-legales'
import PolitiqueConfidentialite from '@/pages/politique-confidentialite'
import NotFound from '@/pages/not-found'
import ScrollToTop from './ScrollToTop'

const AppRouter = () => {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route component={Expertise} exact path="/expertise" />
        <Route component={Honoraires} exact path="/honoraires" />
        <Route component={Home} exact path="/" />
        <Route component={Contact} exact path="/contact" />
        <Route component={Cabinet} exact path="/cabinet" />
        <Route component={MentionsLegales} exact path="/mentions-legales" />
        <Route
          component={PolitiqueConfidentialite}
          exact
          path="/politique-de-confidentialite"
        />
        <Route component={NotFound} />
      </Switch>
    </>
  )
}

export default AppRouter
