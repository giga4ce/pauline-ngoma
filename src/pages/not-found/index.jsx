import React from 'react'

import { Helmet } from 'react-helmet'

const NotFound = () => {
  return (
    <div className="not-found-page">
      <Helmet>
        <title>Page introuvable | Maître Pauline NGOMA-MABALA</title>
      </Helmet>
      <h3>OOPS! PAGE NOT FOUND</h3>
      <div className="not-found-code-wrap">
        <h1 className="not-found-code">404</h1>
      </div>
      <div className="not-found-message-wrap">
        <h2 className="not-found-message">
          WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND
        </h2>
      </div>
    </div>
  )
}

export default NotFound
