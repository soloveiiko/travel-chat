import {
  SIGN_UP_USER,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  LOGOUT,
  SIGN_IN_USER,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
} from './actionTypes'

export interface IAuth {}

export interface AuthState {
  data: IAuth[]
  loading: boolean
  error: string | null
  isAuth: boolean
}

export interface FetchSignUserPayload {
  data: {
    username: string
    password: string
  }
}
export interface FetchSignSuccessPayload {
  data: IAuth[]
}
export interface FetchSignErrorPayload {
  error: string
}
export type FetchSignUpUser = {
  type: typeof SIGN_UP_USER
  payload: FetchSignUserPayload
}
export type FetchSignUpSuccess = {
  type: typeof SIGN_UP_SUCCESS
  payload: FetchSignSuccessPayload
}
export type FetchSignUpError = {
  type: typeof SIGN_UP_ERROR
  payload: FetchSignErrorPayload
}

export type FetchSignInUser = {
  type: typeof SIGN_IN_USER
  payload: FetchSignUserPayload
}

export type FetchSignInSuccess = {
  payload: FetchSignSuccessPayload
  type: typeof SIGN_IN_SUCCESS
}
export type FetchSignInError = {
  type: typeof SIGN_IN_ERROR
  payload: FetchSignErrorPayload
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
