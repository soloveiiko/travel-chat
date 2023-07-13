import { AuthActions, AuthState } from './types'
import {
  CLEAR_ERROR,
  LOGOUT,
  SIGN_IN_ERROR,
  SIGN_IN_SUCCESS,
  SIGN_IN_USER,
  SIGN_UP_ERROR,
  SIGN_UP_SUCCESS,
  SIGN_UP_USER,
} from './actionTypes'

const initialState: AuthState = {
  data: [],
  username: null,
  isAuth: false,
  loading: false,
  error: null,
}

const reducer = (state = initialState, action: AuthActions) => {
  switch (action.type) {
    case SIGN_UP_USER:
    case SIGN_IN_USER:
      return {
        ...state,
        data: [],
        loading: true,
      }
    case SIGN_IN_ERROR:
    case SIGN_UP_ERROR:
      return {
        ...state,
        data: [],
        isAuth: false,
        loading: false,
        error: action.payload.error,
      }
    case SIGN_IN_SUCCESS:
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        username: action.payload.username,
        isAuth: true,
        loading: false,
        error: null,
      }
    case LOGOUT:
      return initialState
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      }
    default:
      return state
  }
}

export default reducer
