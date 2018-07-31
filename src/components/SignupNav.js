import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Nav,
  NavItem,
} from 'reactstrap'

export default class SignupNav extends Component {

  render(){
    return (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <Link to="/signup" className='nav-link'>
            Sign Up
          </Link>
        </NavItem>

        <NavItem>
          <Link to="/login" className='nav-link'>
            Log In
          </Link>
        </NavItem>
      </Nav>
    )
  }
}