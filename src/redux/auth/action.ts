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
  FetchSignInErrorPayload,
  FetchSignInSuccess,
  FetchSignInSuccessPayload,
  FetchSignInUser,
  FetchSignInUserPayload,
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
export const signInUserAction = (
  payload: FetchSignInUserPayload
): FetchSignInUser => ({
  type: SIGN_IN_USER,
  payload,
})
export const signInSuccessAction = (
  payload: FetchSignInSuccessPayload
): FetchSignInSuccess => ({
  type: SIGN_IN_SUCCESS,
  payload,
})
export const signInErrorAction = (
  payload: FetchSignInErrorPayload
): FetchSignInError => ({
  type: SIGN_IN_ERROR,
  payload,
})
export const logoutAction = (): FetchLogout => ({
  type: LOGOUT,
})
