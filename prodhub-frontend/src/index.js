import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Clients from './views/clients/clients'
import Home from './views/home'
import Welcome from './views/welcome'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Clients} exact path="/clients" />
        <Route component={Home} exact path="/home" />
        <Route component={Welcome} exact path="/" />
        <Redirect to="**" />
        <Route component={NotFound} path="**" />

      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
