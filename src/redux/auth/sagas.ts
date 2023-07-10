import { all, call, put, takeLatest } from 'redux-saga/effects'
import { SIGN_IN_USER, SIGN_UP_USER } from './actionTypes'
import { signUpErrorAction, signUpSuccessAction } from './action'
import { signIn, signUp } from '../../api'

// function* fetchSignUpSaga({ payload: { data } }: any): any {
//   try {
//     register(data)
//     yield put(signUpSuccessAction({ data }))
//   } catch (e: any) {
//     yield put(
//       signUpErrorAction({
//         error: e.message,
//       })
//     )
//   }
// }
// function* fetchSignInSaga({ payload: { data } }: any): any {
//   try {
//     register(data)
//     yield put(signInSuccessAction({ data }))
//   } catch (e: any) {
//     yield put(
//       signInErrorAction({
//         error: e.message,
//       })
//     )
//   }
// }
function* fetchSignUpSaga(action: any): any {
  try {
    const user = yield call(signUp, action.payload.data)
    const { data } = user
    yield put(signUpSuccessAction({ data }))
    console.log({ data })
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
    const user = yield call(signIn, action.payload.data)
    const { data } = user
    yield put(signUpSuccessAction({ data }))
    console.log({ data })
  } catch (e: any) {
    yield put(
      signUpErrorAction({
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
