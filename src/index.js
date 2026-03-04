import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import '@/styles/globals.css'
import AppRouter from '@/app/AppRouter'

export const App = () => {
  return (
    <Router>
      <AppRouter />
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
