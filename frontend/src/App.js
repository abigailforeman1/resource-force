import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Register from './components/auth/Register'
import Login from './components/auth/Login'


const App = () => (
    <BrowserRouter>
    <main>
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        {/* <Route path="/icecreams/:id" component={IcecreamShow} /> */}
        {/* <Route path="/icecreams" component={IcecreamIndex} /> */}
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        {/* <Route path="/*" component={ErrorPage} /> */}
      </Switch>
    </main>
  </BrowserRouter>
)

export default App
