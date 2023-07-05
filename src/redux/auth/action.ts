import {SIGN_UP_USER, SIGN_UP_SUCCESS, SIGN_UP_ERROR} from "./actionTypes";
import {
    FetchSignUpError,
    FetchSignUpErrorPayload,
    FetchSignUpSuccess,
    FetchSignUpSuccessPayload,
    FetchSignUpUser, FetchSignUpUserPayload
} from "./types";


export const signUpUserAction = (payload: FetchSignUpUserPayload): FetchSignUpUser => ({
    type: SIGN_UP_USER,
    payload
});
export const signUpSuccessAction = (payload: FetchSignUpSuccessPayload): FetchSignUpSuccess => ({
    type: SIGN_UP_SUCCESS,
    payload
});
export const signUpErrorAction = (payload: FetchSignUpErrorPayload): FetchSignUpError => ({
    type: SIGN_UP_ERROR,
    payload
});