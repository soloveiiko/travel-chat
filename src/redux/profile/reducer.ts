import { UserAction, UserState } from './types'
import { SET_USER, SET_USER_ERROR, SET_USER_SUCCESS } from './actionTypes'

const initialState: UserState = {
  data: [],
  error: null,
}

const reducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        data: [],
      }
    case SET_USER_ERROR:
      return {
        ...state,
        user: [],
        data: action.payload.error,
      }
    case SET_USER_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
      }
    default:
      return state
  }
}
export default reducer
