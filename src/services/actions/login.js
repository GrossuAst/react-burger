import { login, getUserData } from "../../utils/auth-api";

export const GET_USER_DATA = 'GET_USER_DATA';
export const GET_USER_DATA_SUCCESS = 'GET_USER_DATA_SUCCESS';
export const GET_USER_DATA_FAILED = 'GET_USER_DATA_FAILED';
export const IS_AUTH_CHECKED = 'IS_AUTH_CHECKED';

export function loginUser(data, hanler) {
    return function(dispatch) {
        dispatch({
            type: GET_USER_DATA
        })
        login(data)
            .then((res) => {
                if(res && res.success) {
                    dispatch({
                        type: GET_USER_DATA_SUCCESS,
                        payload: res
                    });
                    localStorage.setItem('accessToken', res.accessToken);
                    localStorage.setItem('refreshToken', res.refreshToken);
                    hanler();
                }
                return
            })
            .catch((err) => {
                dispatch({
                    type: GET_USER_DATA_FAILED
                })
            })
    }
};

export function checkUserAuth() {
    return function(dispatch) {
        if(localStorage.getItem('accessToken')) {
            dispatch({
                type: GET_USER_DATA
            });
            getUserData()
                .then((res) => {
                    if(res && res.success) {
                        dispatch({
                            type: GET_USER_DATA_SUCCESS,
                            payload: res
                        })
                    }
                })
                .catch(() => {
                    dispatch({
                        type: GET_USER_DATA_FAILED
                    })
                })
                .finally(() => {
                    dispatch({
                        type: IS_AUTH_CHECKED,
                        payload: true
                    })
                })
        }
    }
}