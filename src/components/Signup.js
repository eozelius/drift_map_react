import React, { Component } from 'react'
import { Container, Button, Form, FormGroup, Input, Col } from 'reactstrap'
import { Redirect } from 'react-router-dom'
// import User from './User.js'

import Api from '../api/Api.js'
import '../styles/signup.css'

export default class Signup extends Component {
  constructor(props){
    super(props)

    this.state = {
      redirectToProfilePage: false
    }
  }  

  signup = (e) => {
    e.preventDefault()
    const signupForm = document.getElementById('signup-form')
    const email = signupForm['email'].value
    const password = signupForm['password'].value
    const first_name = signupForm['first_name'].value
    const last_name = signupForm['last_name'].value

    Api.signup(first_name, last_name, email, password)
      .then((response) => {
        this.setState({ 
          redirectToProfilePage: true,
        })
      })
      .catch((error) => {
        console.log("error => " + error)
      })
  }


  render() {
    if (this.state.redirectToProfilePage) {
      const id = localStorage.getItem('userId')
      return <Redirect to={`/users/${id}`} />
    }

    return (
      <Container className='signup-container'>
        <Col lg={{size: 4, offset: 4 }} md={{size: 4, offset: 4}} sm={12} xs={12}>
          <h1>Sign Up</h1>

          <Form onSubmit={this.signup} id='signup-form'>
            <FormGroup>
              <Input type="text" name="first_name" id="first_name" placeholder="first name" />
            </FormGroup>

            <FormGroup>
              <Input type="text" name="last_name" id="last_name" placeholder="last name" />
            </FormGroup>

            <FormGroup>
              <Input type="email" name="email" id="email" placeholder="email" />
            </FormGroup>
            <FormGroup>
              <Input type="password" name="password" id="password" placeholder="password" />
            </FormGroup>
            <Button>Register</Button>
          </Form>
        </Col>
      </Container>
    );
  }
}