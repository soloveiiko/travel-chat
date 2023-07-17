import {
  FetchUser,
  FetchUserError,
  FetchUserErrorPayload,
  FetchUserPayload,
  FetchUserSuccess,
  FetchUserSuccessPayload,
} from './types'
import { SET_USER, SET_USER_ERROR, SET_USER_SUCCESS } from './actionTypes'

export const setUserAction = (payload: FetchUserPayload): FetchUser => ({
  type: SET_USER,
  payload,
})
export const setUserSuccessAction = (
  payload: FetchUserSuccessPayload
): FetchUserSuccess => ({
  type: SET_USER_SUCCESS,
  payload,
})
export const setUserErrorAction = (
  payload: FetchUserErrorPayload
): FetchUserError => ({
  type: SET_USER_ERROR,
  payload,
})
