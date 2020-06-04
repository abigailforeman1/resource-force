import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/common/Home'
import ResourceIndex from './components/common/ResourceIndex'
import ResourceShow from './components/common/ResourceShow'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import ResourceEdit from './components/common/ResourceEdit'
import ErrorPage from './components/common/ErrorPage'


const App = () => (
    <BrowserRouter>
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/resources/:id/edit" component={ResourceEdit} />
        <Route path="/resources/:id" component={ResourceShow} />
        <Route path="/resources" component={ResourceIndex} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/*" component={ErrorPage} />
      </Switch>
    </main>
  </BrowserRouter>
)

export default App
