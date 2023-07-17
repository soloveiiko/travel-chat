import { all, call, put, takeLatest } from 'redux-saga/effects'
import { setUserErrorAction, setUserSuccessAction } from './action'
import { SET_USER } from './actionTypes'
import { signIn } from '../../api'

function* fetchUserSaga(action: any): any {
  try {
    const response = yield call(signIn, action.payload.user)
    const { user } = response
    yield put(setUserSuccessAction({ user }))
  } catch (e: any) {
    yield put(
      setUserErrorAction({
        error: e.message,
      })
    )
  }
}
function* profileSaga() {
  yield all([takeLatest(SET_USER, fetchUserSaga)])
}
export default profileSaga
