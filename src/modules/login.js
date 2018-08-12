import Api from '../api/Api'

// ACTIONS ////
export const SUBMIT_CREDENTIALS = 'SUBMIT_CREDENTIALS'
export const SUCCESSFUL_LOGIN = 'SUCCESSFUL_LOGIN'
export const ERROR_LOGIN = 'ERROR_LOGIN'

const initialState = {
	redirectToProfilePage: false,
  loggedInUser: null,
  isAuthenticating: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SUBMIT_CREDENTIALS:
      return {
        ...state,
        isAuthenticating: true
      }

    case SUCCESSFUL_LOGIN:
      return {
        ...state,
        redirectToProfilePage: true,
        isAuthenticating: false        
      }

    case ERROR_LOGIN:
      return {
        ...state,
        isAuthenticating:false
      }

    default:
      return state
  }
}
// End ACTIONS ////

// REDUCERS ////
export const login = (email, password) => {
  return dispatch => {
    dispatch({
      type: SUBMIT_CREDENTIALS
    })

    return Api.login(email, password)
      .then((response) => {
        dispatch({ type: SUCCESSFUL_LOGIN })
      })
      .catch((error) => {
        console.log('error => ' + error)
        dispatch({ type: ERROR_LOGIN })
      })
  }
}

// END REDUCERS ////