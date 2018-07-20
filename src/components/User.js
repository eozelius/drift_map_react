import React, { Component } from 'react'

export default class User extends Component {
  render(){
    console.log('ready to render')

    if(this.props.user == null){
      return <h5>waiting...</h5>
    } else {
      const user = this.props.user
      console.log(user)

      return (
        <div className='user-container'>
          <h3>Hello {user.attributes['email']}</h3>
          <p>{user.email}</p>
          <p>{user.description}</p>
        </div>
      )
    }

  }
}

User.defaultProps = {
  user: {
    id: 0,
    attributes: {
      'first-name': '',
      'last-name': '',
      'email': '',
      'description': ''
    }
  }
}