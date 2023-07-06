import { all, takeLatest, put } from 'redux-saga/effects'
import { SIGN_IN_USER, SIGN_UP_USER } from './actionTypes'
import {
  signInErrorAction,
  signInSuccessAction,
  signUpErrorAction,
  signUpSuccessAction,
} from './action'

const register = (data: any[]) => {
  console.log({ data })
}

function* fetchSignUpSaga({ payload: { data } }: any): any {
  try {
    register(data)
    yield put(signUpSuccessAction({ data }))
  } catch (e: any) {
    yield put(
      signUpErrorAction({
        error: e.message,
      })
    )
  }
}
function* fetchSignInSaga({ payload: { data } }: any): any {
  try {
    register(data)
    yield put(signInSuccessAction({ data }))
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
