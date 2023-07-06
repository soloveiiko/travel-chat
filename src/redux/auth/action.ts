import {
  LOGOUT,
  SIGN_UP_ERROR,
  SIGN_UP_SUCCESS,
  SIGN_UP_USER,
} from './actionTypes'
import {
  FetchLogout,
  FetchSignUpError,
  FetchSignUpErrorPayload,
  FetchSignUpSuccess,
  FetchSignUpSuccessPayload,
  FetchSignUpUser,
  FetchSignUpUserPayload,
} from './types'

export const signUpUserAction = (
  payload: FetchSignUpUserPayload
): FetchSignUpUser => ({
  type: SIGN_UP_USER,
  payload,
})
export const signUpSuccessAction = (
  payload: FetchSignUpSuccessPayload
): FetchSignUpSuccess => ({
  type: SIGN_UP_SUCCESS,
  payload,
})
export const signUpErrorAction = (
  payload: FetchSignUpErrorPayload
): FetchSignUpError => ({
  type: SIGN_UP_ERROR,
  payload,
})
export const logoutAction = (): FetchLogout => ({
  type: LOGOUT,
})
