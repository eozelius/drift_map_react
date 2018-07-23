import React, { Component } from 'react'
import { Container, Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { Redirect } from 'react-router-dom'
// import User from './User.js'

import Api from '../api/Api.js'
import '../styles/signup.css'

export default class Signup extends Component {
  constructor(props){
    super(props)

    this.state = {
      redirectToProfilePage: false,
      newUser: null,
    }
  }  

  signup = (e) => {
    e.preventDefault()
    const signupForm = document.getElementById('signup-form')
    const email = signupForm['email'].value
    const password = signupForm['password'].value

    if(email == null || password == null){ return false }
    if(email === ''  || password === '' ){ return false }

    Api.signup(email, password)
      .then((response) => {
        const token = response.data.data.attributes.token
        localStorage.token = token
        this.setState({ 
          redirectToProfilePage: true,
          newUser: response.data.data
        })
      })
      .catch((error) => {
        console.log("error => " + error)
      })
  }


  render() {
    if (this.state.redirectToProfilePage) {
      const id = this.state.newUser.id
      return <Redirect to={{ pathname: `/users/${id}`, state: { id: id } }} />
    }

    return (
      <Container className='signup-container'>
        <Col lg={{size: 6, offset: 3 }} md={{size: 6, offset: 3}} sm={12} xs={12}>
          <h1>Welcome to DriftMaps</h1>

          <Form onSubmit={this.signup} id='signup-form'>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="email" placeholder="email" />
            </FormGroup>
            <FormGroup lg={6} md={6} sm={8} xs={8} >
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" placeholder="password" />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </Col>
      </Container>
    );
  }
}