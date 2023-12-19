import React from 'react'

import { Helmet } from 'react-helmet'

import './welcome.css'

const Welcome = (props) => {
  return (
    <div className="welcome-container">
      <Helmet>
        <title>ProdHub</title>
        <meta property="og:title" content="ProdHub" />
      </Helmet>
      <div className="welcome-welcome-page">
        <div className="welcome-container1">
          <div className="welcome-container2">
            <div className="welcome-container3">
              <div className="welcome-container4">
                <div className="welcome-container5">
                  <span className="welcome-text">
                    <span className="welcome-text01">
                      <span>
                        Bem-vindo ao
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <span></span>
                    </span>
                    <span>
                      ProdHUB - Production Management
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span className="welcome-text06">
                    <span>Carrega no botão para descarregar a aplicação</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="welcome-frame1">
            <span className="welcome-text08">
              <span>PRODHUB</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
