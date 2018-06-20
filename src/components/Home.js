import axios from 'axios'
import React, { Component } from 'react'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      'user': {
        'id': null,
        'type': null,
        'attributes': {
          'description': '',
          'email': '',
          'first-name': '',
          'last-name': '',
        },
        'relationships': {
          'driftmap': {
            'data': {
              'id': null,

            }
          }
        }
      }
    }
  }

  componentDidMount() {
    axios.get('users/1')
      .then((response) => {
        this.setState({ user: response.data.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render () {
    const user = this.state.user

    console.log(user.attributes['first-name'])

    window.user = user

    // console.log(user.attributes)

    return (
      <div className='users-container'>
        <h1>home</h1>
        <div className='user'>
          <p>id: {user.id}</p> 
          <p>type: {user.type}</p> 
          <p>first name: {user.attributes['first-name']}</p> 
          <p>last name: {user.attributes['last-name']}</p> 
          <p>description: {user.attributes['description']}</p> 
          
        </div>
      </div>
    )
  }
}
