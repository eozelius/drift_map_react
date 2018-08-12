import React, { Component } from 'react'
import '../../styles/Profile.css'
import Api from '../../api/Api'
import { Container, Col } from 'reactstrap'

// import { fetchUser } from '../../modules/user'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'


class Profile extends Component {
  constructor(props){
    super(props)

    this.state = {
      user: null
    }
  }

  componentDidMount(){
    const id = localStorage.getItem('userId')
    Api.getUser(id)
      .then((response) => {
        this.setState({
          user: response.data.data
        })
      })
      .catch((error) => {
        console.log('error => ' + error)
      })
  }

  render(){
    const user = this.state.user

    if(!user) {
      return (
        <Container className='profile-container'>
          <Col lg={{ size: 4, offset: 4 }} md={{size: 4, offset: 4}} sm={12} xs={12}>
          <h1>Profile Page</h1>
          <p>loading</p>
        </Col>
      </Container>
      )
    }

    return (
      <Container className='profile-container'>
        <Col lg={{ size: 4, offset: 4 }} md={{size: 4, offset: 4}} sm={12} xs={12}>
          <h1>Profile Page</h1>
          <p>id: {user.id}</p>
          <p>Hello {user.attributes['first-name'] }</p>
          <p>description: {user.attributes.description}</p>
        </Col>
      </Container>
    )
  }
}

export default Profile

// const mapStateToProps = ({ user }) => ({
//   isFetching: user.isFetching,
//   fetchedUser: user.fetchedUser
// })

// const mapDispatchToProps = dispatch => bindActionCreators({
//   fetchUser
// }, dispatch)

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Profile)