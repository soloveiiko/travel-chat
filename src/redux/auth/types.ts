import {
  SIGN_UP_USER,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  LOGOUT,
  SIGN_IN_USER,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
} from './actionTypes'

export interface IAuth {
  username: string | null
  password: string | null
}

export interface AuthState {
  data: IAuth[]
  loading: boolean
  error: string | null
  isAuth: boolean
}

export interface FetchSignUpUserPayload {
  data: {
    username: string
    password: string
  }
}
export interface FetchSignUpSuccessPayload {
  data: IAuth[]
}
export interface FetchSignUpErrorPayload {
  error: string
}
export type FetchSignUpUser = {
  type: typeof SIGN_UP_USER
  payload: FetchSignUpUserPayload
}
export type FetchSignUpSuccess = {
  type: typeof SIGN_UP_SUCCESS
  payload: FetchSignUpSuccessPayload
}
export type FetchSignUpError = {
  type: typeof SIGN_UP_ERROR
  payload: FetchSignUpErrorPayload
}
export interface FetchSignInUserPayload {
  data: {
    username: string
    password: string
  }
}

export interface FetchSignInSuccessPayload {
  data: IAuth[]
}

export interface FetchSignInErrorPayload {
  error: string
}

export type FetchSignInUser = {
  type: typeof SIGN_IN_USER
  payload: FetchSignInUserPayload
}

export type FetchSignInSuccess = {
  payload: FetchSignInSuccessPayload
  type: typeof SIGN_IN_SUCCESS
}
export type FetchSignInError = {
  type: typeof SIGN_IN_ERROR
  payload: FetchSignInErrorPayload
}

export interface FetchLogout {
  type: typeof LOGOUT
}

export type AuthActions =
  | FetchSignUpUser
  | FetchSignUpSuccess
  | FetchSignUpError
  | FetchSignInUser
  | FetchSignInSuccess
  | FetchSignInError
  | FetchLogout
