import React from 'react'
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
} from 'reactstrap'

import SignupNav from './SignupNav'
import LoggedInNav from './LoggedInNav'

export default class DmNavbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const userId = localStorage.getItem('userId')

    return (
      <div id="Navbar">
        <Navbar className='navbar-dark bg-dark' color="faded" light expand="md">
          <Link to='/' className='navbar-brand'>
            driftMap
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            { userId ? <LoggedInNav id={userId} /> : <SignupNav /> }
          </Collapse>
        </Navbar>
      </div>
    )
  }
}