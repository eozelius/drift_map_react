import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Nav,
  NavItem,
} from 'reactstrap'

export default class LoggedInNav extends Component {
  render(){
    return (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <Link to="/users/" className='nav-link'>
            Profile
          </Link>
        </NavItem>
      </Nav>
    )
  }
}