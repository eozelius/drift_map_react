import axios from 'axios'

export default class Api {
  static signup = (email, password, confirmation) => {
    const url = '/users'
    const params = {
      data: {
        attributes: {
          email: email,
          password: password,
          password_confirmation: confirmation
        },
        type: 'users'
      },
    }

    return axios.post(url, params)
      .then((response) => {
        return response
      })
      .catch((error) => {
        return error
      })
  }

  static getUser = (id) => {
    if(isNaN(id)){ 
      console.log("invalid id")
      return false
    }

    const token = localStorage.token

    if(token == null) {
      console.log('Unauthorized - invalid token')
      return false
    }

    const url = `/users/${id}`

    return axios.get(url, { headers: { 'X-Api-Key': token }} )
      .then((response) => {
        return response
      })
      .catch((error) => {
        return error
      })
  }
}