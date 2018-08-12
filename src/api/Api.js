import axios from 'axios'

export default class Api {
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
        const { token } = response.data.data.attributes
        const { id }    = response.data.data
        localStorage.setItem('token', token)
        localStorage.setItem('userId', id)
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

    const token = localStorage.getItem('token')
    if(typeof token === 'undefined') {
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
        const { token } = response.data.data.attributes
        const { id }    = response.data.data
        localStorage.setItem('token', token)
        localStorage.setItem('userId', id)
        return response
      })
      .catch((error) => {
        return(error)
      })
  }
}