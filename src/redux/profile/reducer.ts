import { UserAction, UserState } from './types'
import { SET_USER, SET_USER_ERROR, SET_USER_SUCCESS } from './actionTypes'

const initialState: UserState = {
  user: [],
  role: 'user',
  error: null,
}

const reducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: [],
      }
    case SET_USER_ERROR:
      return {
        ...state,
        user: [],
        error: action.payload.error,
      }
    case SET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
      }
    default:
      return state
  }
}
export default reducer
