import Api from '../api/Api'

// ACTIONS ////
export const FETCH_USER = 'user/FETCH_USER'
export const RECEIVE_USER = 'user/RECEIVE_USER'
export const SUCCESSFUL_LOGIN = 'user/SUCCESSFUL_LOGIN'

const initialState = {
	redirectToProfile: false,
  isFetching: false
}

export default (state = initialState, action) => {
	switch(action.type){
		case FETCH_USER:
			return {
				...state,
				isFetching: true
			}

		case RECEIVE_USER:
			return {
				...state,
				isFetching: false
			}

		default: 
			return state
	}
}
// End ACTIONS ////

// REDUCERS ////

export const fetchUser = (id) => {
	return dispatch => {
		dispatch({
			type: FETCH_USER
		})

		return Api.getUser(id)
			.then((response) => {
				dispatch({ type: RECEIVE_USER })
			})
			.catch((error) => {
				console.log('error => ' + error)
        // dispatch({ type: FETCH_USER_ERROR })
			})
	}
}