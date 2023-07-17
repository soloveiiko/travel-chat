import { all, fork } from 'redux-saga/effects'
import authSaga from './auth/sagas'
import profileSaga from './profile/sagas'

export function* rootSaga() {
  yield all([fork(authSaga)])
  yield all([fork(profileSaga)])
}
