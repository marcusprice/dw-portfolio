import React from 'react'
import AdminApp from './components/AdminApp.jsx'
import ClientApp from './components/ClientApp.jsx'
import { Route, Switch } from "react-router-dom";

const App = () => {
  return(
    <Switch>
      <Route path="/admin" component={AdminApp} />
      <Route exact path="/" component={ClientApp} />
    </Switch>
  )
}

export default App
