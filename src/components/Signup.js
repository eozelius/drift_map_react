import React, { Component } from 'react'
import Api from '../api/Api.js'
import { Container, Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import '../styles/signup.css'

export default class Signup extends Component {
  

  handleSubmit = (e) => {
    e.preventDefault()
    const signupForm = document.getElementById('signup-form')
    const email = signupForm['email'].value
    const password = signupForm['password'].value
    const confirmation = signupForm['password_confirmation'].value

    if(email == null || password == null){ return false }
    if(password !== confirmation){ return false }
    if(email === '' || password === '' || confirmation === '' ){ return false }

    Api.signup(email, password)
  }


  render() {
    return (
      <Container className='signup-container'>
        <Col lg={{size: 6, offset: 3 }} md={{size: 6, offset: 3}} sm={12} xs={12}>
          <h1>Welcome to DriftMaps</h1>

          <Form onSubmit={this.handleSubmit} id='signup-form'>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="email" placeholder="email" />
            </FormGroup>
            <FormGroup lg={6} md={6} sm={8} xs={8} >
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" placeholder="password" />
            </FormGroup>
            <FormGroup lg={6} md={6} sm={8} xs={8} >
              <Label for="password">password confirmation</Label>
              <Input type="password" name="password_confirmation" id="password_confirmation" placeholder="password confirmation" />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </Col>
      </Container>
    );
  }
}