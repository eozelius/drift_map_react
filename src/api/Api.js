import axios from 'axios'

export default class Api {
  this.getCurrentUser = this.getCurrentUser.bind(this)

  static signup = (first_name, last_name, email, password) => {
    const url = '/users'
    const params = {
      data: {
        attributes: {
          first_name: first_name,
          last_name: last_name,
          email: email,
          password: password
        },
        type: 'users'
      },
    }

    return axios.post(url, params)
      .then((response) => {
        // const userId = response.data.data.id
        // const user = response.data.data.attributes
        this.setCurrentUser(response)
        return response
      })
      .catch((error) => {
        return error
      })
  }

  static getUser = (id) => {
    if(isNaN(id)){ 
      return new Promise((resolve, reject) => reject("Error - Invalid Id"))
    }

    const token = localStorage.token
    if(typeof token === 'undefined') {
      return new Promise((resolve, reject) => reject("Error - Invalid Token"))
    }

    const url = `/users/${id}`

    return axios.get(url, { headers: { 'X-Api-Key': token }} )
      .then((response) => {
        // console.log(response)

        this.setCurrentUser(response)
        return response
      })
      .catch((error) => {
        return error
      })
  }

  static login = (email, password) => {
    if(typeof email !== "string"){
      return new Promise((resolve, reject) => reject("Error - Invalid Email"))
    } else if(typeof password !== "string") {
      return new Promise((resolve, reject) => reject("Error - Invalid Password"))
    }

    const url = `/login`
    const params = {
      data: {
        attributes: {
          email: email,
          password: password
        }
      },
      type: 'user_token'
    }

    return axios.post(url, params)
      .then((response) => {
        this.setCurrentUser(response)
        return response
      })
      .catch((error) => {
        return(error)
      })
  }

  setCurrentUser = (response) => {
    const id = response.data.data.id
    const user = response.data.data.attributes

    if(id == null || user == null){ 
      console.log('could not set User')
      return false
    }

    localStorage.currentUser = {
      id: id || 0,
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      email: user.email || '',
      description: user.description || '',
      token: user.token || '',
    }

    localStorage.token = user.token || false
  }
}