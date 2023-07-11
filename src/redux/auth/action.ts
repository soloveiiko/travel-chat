import {
  LOGOUT,
  SIGN_IN_ERROR,
  SIGN_IN_SUCCESS,
  SIGN_IN_USER,
  SIGN_UP_ERROR,
  SIGN_UP_SUCCESS,
  SIGN_UP_USER,
} from './actionTypes'
import {
  FetchLogout,
  FetchSignInError,
  FetchSignErrorPayload,
  FetchSignInSuccess,
  FetchSignSuccessPayload,
  FetchSignInUser,
  FetchSignUpError,
  FetchSignUpSuccess,
  FetchSignUpUser,
  FetchSignUserPayload,
} from './types'

export const signUpUserAction = (
  payload: FetchSignUserPayload
): FetchSignUpUser => ({
  type: SIGN_UP_USER,
  payload,
})
export const signUpSuccessAction = (
  payload: FetchSignSuccessPayload
): FetchSignUpSuccess => ({
  type: SIGN_UP_SUCCESS,
  payload,
})
export const signUpErrorAction = (
  payload: FetchSignErrorPayload
): FetchSignUpError => ({
  type: SIGN_UP_ERROR,
  payload,
})
export const signInUserAction = (
  payload: FetchSignUserPayload
): FetchSignInUser => ({
  type: SIGN_IN_USER,
  payload,
})
export const signInSuccessAction = (
  payload: FetchSignSuccessPayload
): FetchSignInSuccess => ({
  type: SIGN_IN_SUCCESS,
  payload,
})
export const signInErrorAction = (
  payload: FetchSignErrorPayload
): FetchSignInError => ({
  type: SIGN_IN_ERROR,
  payload,
})
export const logoutAction = (): FetchLogout => ({
  type: LOGOUT,
})
