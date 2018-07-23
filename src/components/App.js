import 'bootstrap/dist/css/bootstrap.css'
import '../styles/app.css'
import React, { Component } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Navbar from './Navbar.js'
import Home from '../views/home/Home.js'
import Signup from './Signup.js'
import Login from './Login.js'
import Profile from '../views/users/Profile.js'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/signup' component={Signup} />
            <Route path='/login'  component={Login} />
            <Route path='/users/:id' component={Profile} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}