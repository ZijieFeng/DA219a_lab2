import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Registrations from './registrations'

function App() {
  return (
    <Switch>
      <Route path={'/'} exact={true}>
        <Registrations />
      </Route>
      <Route path={'/registrations'} exact={true}>
        <Registrations />
      </Route>
    </Switch>
  )
}

export default App
