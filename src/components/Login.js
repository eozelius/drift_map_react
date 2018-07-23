import React, { Component } from 'react'
import { Container, Button, Form, FormGroup, Input, Col } from 'reactstrap'
import { Redirect } from 'react-router-dom'

import Api from '../api/Api.js'

export default class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      redirectToProfilePage: false,
      loggedInUser: null
    }
  }

  login = (e) => {
    e.preventDefault()
    const form = document.getElementById('login-form')
    const email = form['email'].value
    const password = form['password'].value

    Api.login(email, password)
      .then((response) => {
        this.setState({
          redirectToProfilePage: true,
          loggedInUser: response.data.data
        })
      })
      .catch((error) => {
        console.log("error => " + error)
      })
  }

  render () {
    if(this.state.redirectToProfilePage){
      const id = this.state.loggedInUser.id
      return <Redirect to={`/users/${id}`} />
    }

    return (
      <Container className='login-container'>
        <Col lg={{size: 4, offset: 4 }} md={{size: 4, offset: 4}} sm={12} xs={12}>
          <h1>Login</h1>

          <Form onSubmit={this.login} id='login-form'>
            <FormGroup>
              <Input type="email" name="email" id="email" placeholder="email" />
            </FormGroup>

            <FormGroup>
              <Input type="password" name="password" id="password" placeholder="password" />
            </FormGroup>

            <Button>Log in</Button>
          </Form>
        </Col>
      </Container>
    )
  }
}
