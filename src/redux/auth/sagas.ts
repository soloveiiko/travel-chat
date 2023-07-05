import {all, takeLatest, put} from "redux-saga/effects";
import {SIGN_UP_USER} from "./actionTypes";
import {signUpErrorAction, signUpSuccessAction} from "./action";

// const register = (data: any[]) => {
//     console.log({ data });
// };
function* fetchSignUpSaga({ payload: {data} }: any): any {
    try {
        // yield register(data);
        yield put(signUpSuccessAction({data}))
        console.log(data.username)
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