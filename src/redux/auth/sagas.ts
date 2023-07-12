import { all, call, put, takeLatest } from 'redux-saga/effects'
import { SIGN_IN_USER, SIGN_UP_USER } from './actionTypes'
import {
  signInErrorAction,
  signInSuccessAction,
  signUpErrorAction,
  signUpSuccessAction,
} from './action'
import { signIn, signUp } from '../../api'

function* fetchSignUpSaga(action: any): any {
  try {
    const response = yield call(signUp, action.payload.data)
    const { data } = response
    const username = data.username
    yield put(signUpSuccessAction({ data, username }))
    console.log('Sign Up data', { data })
  } catch (e: any) {
    yield put(
      signUpErrorAction({
        error: e.message,
      })
    )
  }
}
function* fetchSignInSaga(action: any): any {
  try {
    const response = yield call(signIn, action.payload.data)
    const { data } = response
    const username = data.username
    yield put(signInSuccessAction({ data, username }))
    console.log('Sign In data', { data })
  } catch (e: any) {
    yield put(
      signInErrorAction({
        error: e.message,
      })
    )
  }
}

function* authSaga() {
  yield all([takeLatest(SIGN_UP_USER, fetchSignUpSaga)])
  yield all([takeLatest(SIGN_IN_USER, fetchSignInSaga)])
}

export default authSaga
