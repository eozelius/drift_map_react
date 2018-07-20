import React, { Component } from 'react'
import { Col } from 'reactstrap'
import axios from 'axios'

export default class Home extends Component {
  constructor(props){
    super(props)

    this.state = {
      user: {
        id: 0,
        email: '',
        first_name: '',
        last_name: '',
        description: '',

      }
    }
  }

  componentDidMount() {
    axios.get('users/1')
      .then((response) => {
        this.setState({ user: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render () {
    const user = this.state.user

    console.log('ready to render: ' + JSON.stringify(user))

    return (
      <div className='users-container'>
        <h1>home</h1>
        <div className='user'>
          <Col lg={{size: 6, offset: 3}}>
            <p>id: {user.id}</p> 
            <p>first name: {user.first_name}</p> 
            <p>last name: {user.last_name}</p> 
            <p>description: {user.description}</p> 
          </Col>          
        </div>
      </div>
    )
  }
}