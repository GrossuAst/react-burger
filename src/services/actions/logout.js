import { logout } from "../../utils/auth-api";
import { DELETE_USER_DATA } from "./user";

export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

export function userLogout(hanler) {
    return function(dispatch) {
        dispatch({
            type: LOGOUT
        });
        logout()
            .then((res) => {
                if(res && res.success) {
                    localStorage.removeItem('refreshToken');
                    localStorage.removeItem('accessToken');
                    hanler();
                    dispatch({
                        type: LOGOUT_SUCCESS,
                    });
                    dispatch({
                        type: DELETE_USER_DATA
                    })
                }
            })
            .catch((err) => {
                dispatch({
                    type: LOGOUT_FAILED
                })
            })
    }
};
