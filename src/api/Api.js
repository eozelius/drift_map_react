import axios from 'axios'

class Api {
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

    axios.post(url, params)
      .then(function (response) {
        console.log("sucess!!!!"  + JSON.stringify(response))
      })
      .catch(function (error) {
        console.log("error:  " + error)
      })
  }
}

export default Api