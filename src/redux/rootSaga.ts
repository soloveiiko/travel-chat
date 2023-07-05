import { all, fork } from "redux-saga/effects";
import authSaga from './auth/sagas';
export function* rootSaga() {
    // console.log('Saga is working')
    yield all([fork(authSaga)]);
}