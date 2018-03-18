import 'bootstrap/dist/css/bootstrap.css';
import '../styles/app.css'
import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Navbar from './Navbar.js'
import Home from './Home.js'
import Signup from './Signup.js'
import Login from './Login.js'

export default class App extends Component {
 
  render() {
    // const NoMatch = () => <h3>page not found</h3>

    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />          
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}