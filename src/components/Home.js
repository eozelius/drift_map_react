import axios from 'axios'
import React, { Component } from 'react'


export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      users: []
    }
  }

  fetchUsers = () => {
    return axios.get('/users')
      .then((response) => {
        window.ethan = response
        console.log(response)
        this.setState({ users: response.data.users })
      })
      .catch((error) => {
        console.log(error);
        return []
      })    
  }

  componentDidMount() {
    this.fetchUsers()
  }

  render () {
    const renderedUsers = this.state.users.map((user, index) => (
      <div className='user' key={index} >
        <p>{user.email} {user.last_name}</p>
      </div>
    ))

    return (
      <div className='users-container'>
        <h1>home</h1>
        users: {renderedUsers}
      </div>
    )
  }
}
