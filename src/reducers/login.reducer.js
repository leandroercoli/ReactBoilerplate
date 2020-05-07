import { loginConstants } from '../constants'

const initialState = {
  username: '',
  message: null,
  isLoading: false
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case loginConstants.UPDATE_STORED_USER: {
      const { username = "" } = action.payload
      return {
        ...state,
        username: username
      }
      break;
    }
    case loginConstants.LOGIN_FETCH_REQUEST: {
      return {
        ...state,
        isLoading: true
      }
      break;
    }
    case loginConstants.LOGIN_FETCH_SUCCESS: {
      const { username = "" , message } = action.payload
      return {
        ...state,
        username: username,
        isLoading: false
      }
      break;
    }
    case loginConstants.LOGIN_FETCH_FAILURE: {
      const { message } = action.payload
      return {
        ...state,
        username: '',
        message,
        isLoading: false
      }
      break;
    }
  }
  return state;
}

export default loginReducer;
