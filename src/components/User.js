import React, { Component } from 'react'

export default class User extends Component {
  render(){
    if(this.props.user == null){
      return <h5>waiting...</h5>
    } else {
      const user = this.props.user
      console.log(user)

      return (
        <div className='user-container'>
          <h3>Hello {user.attributes['first-name']} {user.attributes['last-name']}</h3>
          <h4>id: {user.id}</h4>
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