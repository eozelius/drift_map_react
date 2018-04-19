import React, { Component } from 'react'
import axios from 'axios'
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: null,
      password: null
    }

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(e){
    e.preventDefault()

    const signupForm = document.getElementById('signup-form')
    const email = signupForm['email'].value
    const password = signupForm['password'].value

    if(email === null || password === null){ return false }

    this.setState({ 
      email: email,
      password: password
    })

    axios.post('/users', {
        email: email,
        password: password
      })
      .then(function (response) {
        console.log(response)
        window.r = response
      })
      .catch(function (error) {
        console.log(error);
      })
  }


  render() {
    return (
      <Container>
        <Form onSubmit={this.onSubmit} id='signup-form'>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}