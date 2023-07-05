import {AuthActions, AuthState} from './types';
import {
    SIGN_UP_ERROR,
    SIGN_UP_SUCCESS,
    SIGN_UP_USER
} from './actionTypes';


const initialState: AuthState = {
    data: [],
    loading: false,
    error: null,
    isAuth: false,
    // username: '',
    // password: '',
}

const authReducer = (state = initialState, action: AuthActions) => {
    switch (action.type) {
        case SIGN_UP_USER:
            return {
                ...state,
                loading: true,
                // username: '',
                // password: '',
                data: [],
            }
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuth: true,
                data: action.payload.data,
                // username: action.payload.username,
                // password: action.payload.password,
                error: null
            }
        case SIGN_UP_ERROR:
            return {
                ...state,
                loading: false,
                isAuth: false,
                data: [],
                error: action.payload.error
            }
        default:
            return state
    }
}
export default authReducer;