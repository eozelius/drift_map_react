import axios from 'axios'
import React, { Component } from 'react'


export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    axios.get('http://localhost:3003/users')
      .then(function (response) {
        console.log(response)



      })
      .catch(function (error) {
        console.log(error);
      })
  }

  render () {
    return (
      <h1>home</h1>
    )
  }
}
