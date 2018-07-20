import React, { Component } from 'react'


import Api from '../../api/Api.js'
import User from '../../components/User.js'

import '../../styles/Profile.css'

export default class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: null
    }
  }

  componentDidMount(){
    const userId = this.props.history.length

    Api.getUser(userId)
      .then((response) => {
        this.setState({ user: response.data.data })
      })
      .catch((error) => {
        console.log("error => " + error)
      })
  }

  render(){
    return (
      <div className='profile-container'>
        <h1>Profile Page</h1>

        <User user={this.state.user} />
      </div>
    )
  }
}