import { login } from "../../utils/auth-api";

export const GET_USER_DATA = 'GET_USER_DATA';
export const GET_USER_DATA_SUCCESS = 'GET_USER_DATA_SUCCESS';
export const GET_USER_DATA_FAILED = 'GET_USER_DATA_FAILED';

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
}