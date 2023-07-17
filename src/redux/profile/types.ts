import { SET_USER, SET_USER_ERROR, SET_USER_SUCCESS } from './actionTypes'
export interface IUser {}
export interface UserState {
  user: []
  role: string
  error: string | null
}
export interface FetchUserPayload {
  user: []
}
export interface FetchUserSuccessPayload {
  user: IUser[]
}
export interface FetchUserErrorPayload {
  error: string
}
export type FetchUser = {
  type: typeof SET_USER
  payload: FetchUserPayload
}
export type FetchUserSuccess = {
  type: typeof SET_USER_SUCCESS
  payload: FetchUserSuccessPayload
}
export type FetchUserError = {
  type: typeof SET_USER_ERROR
  payload: FetchUserErrorPayload
}
export type UserAction = FetchUser | FetchUserSuccess | FetchUserError
