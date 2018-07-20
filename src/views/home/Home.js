import React, { Component } from 'react'
import { Col } from 'reactstrap'

export default class Home extends Component {
  render () {
    return (
      <div className='home-container'>
        <Col lg={{size: 6, offset: 3}}>
          <h1>home</h1>
          <p>welcome to driftMaps</p>
        </Col>          
      </div>
    )
  }
}