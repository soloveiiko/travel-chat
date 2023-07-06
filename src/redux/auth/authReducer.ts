import { AuthActions, AuthState } from './types'
import {
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
  loading: false,
  error: null,
  isAuth: false,
}

const authReducer = (state = initialState, action: AuthActions) => {
  switch (action.type) {
    case SIGN_UP_USER:
    case SIGN_IN_USER:
      return {
        ...state,
        loading: true,
        data: [],
      }
    case SIGN_IN_SUCCESS:
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        data: action.payload.data,
        error: null,
      }
    case SIGN_IN_ERROR:
    case SIGN_UP_ERROR:
      return {
        ...state,
        loading: false,
        isAuth: false,
        data: [],
        error: action.payload.error,
      }
    case LOGOUT:
      return initialState
    default:
      return state
  }
}
export default authReducer
