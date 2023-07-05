import {SIGN_UP_USER, SIGN_UP_SUCCESS, SIGN_UP_ERROR} from "./actionTypes";

export interface IAuth {
    // id: string;
    username: string | null;
    password: string | null;
}
export interface AuthState {
    data: IAuth[],
    loading: boolean,
    error: string | null,
    isAuth: boolean,
    // username: string | null;
    // password: string | null;
}
export interface FetchSignUpUserPayload {
    data: {
        username: string;
        password: string;
    };
}
export interface FetchSignUpSuccessPayload {
    // username: string
    // password: string
    data: IAuth[]
}
export interface FetchSignUpErrorPayload {
    error: string,
}
export type FetchSignUpUser = {
    type: typeof SIGN_UP_USER;
    payload: FetchSignUpUserPayload
}

export type FetchSignUpSuccess = {
    type: typeof SIGN_UP_SUCCESS;
    payload: FetchSignUpSuccessPayload;
}
export type FetchSignUpError = {
    type: typeof SIGN_UP_ERROR;
    payload: FetchSignUpErrorPayload;
}
export type AuthActions =
  | FetchSignUpUser
  | FetchSignUpSuccess
  | FetchSignUpError