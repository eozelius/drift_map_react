import axios from 'axios'

export default class Api {
  static signup = (email, password, confirmation) => {
    const url = '/users'
    const params = {
      data: {
        attributes: {
          email: email,
          password: password
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
      return new Promise((resolve, reject) => reject("Error - Invalid Id"))
    }

    const token = localStorage.token
    if(token == null) {
      return new Promise((resolve, reject) => reject("Error - Invalid Token"))
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