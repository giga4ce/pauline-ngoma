import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Expertise from '@/pages/expertise'
import Honoraires from '@/pages/honoraires'
import Home from '@/pages/home'
import Contact from '@/pages/contact'
import Cabinet from '@/pages/cabinet'
import NotFound from '@/pages/not-found'

const AppRouter = () => {
  return (
    <Switch>
      <Route component={Expertise} exact path="/expertise" />
      <Route component={Honoraires} exact path="/honoraires" />
      <Route component={Home} exact path="/" />
      <Route component={Contact} exact path="/contact" />
      <Route component={Cabinet} exact path="/cabinet" />
      <Route component={NotFound} />
    </Switch>
  )
}

export default AppRouter
