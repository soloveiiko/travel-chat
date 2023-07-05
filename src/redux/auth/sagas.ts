import {all, takeLatest, put} from "redux-saga/effects";
import {SIGN_UP_USER} from "./actionTypes";
import {signUpErrorAction, signUpSuccessAction} from "./action";

const register = (username: any, password: any) => {
    console.log({username, password});
};
function* fetchSignUpSaga({ payload: {username, password} }: any): any {
    try {
        yield register(username, password);
        yield put(signUpSuccessAction({username, password}))
    } catch (e: any) {
        yield put(
          signUpErrorAction({
              error: e.message,
          })
        );
    }
}
function* authSaga() {
    yield all([takeLatest(SIGN_UP_USER, fetchSignUpSaga)])
}

export default authSaga;