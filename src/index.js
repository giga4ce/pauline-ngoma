import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Expertise from './views/expertise'
import Honoraires from './views/honoraires'
import Home from './views/home'
import Contact from './views/contact'
import Cabinet from './views/cabinet'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Expertise} exact path="/expertise" />
        <Route component={Honoraires} exact path="/honoraires" />
        <Route component={Home} exact path="/" />
        <Route component={Contact} exact path="/contact" />
        <Route component={Cabinet} exact path="/cabinet" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
