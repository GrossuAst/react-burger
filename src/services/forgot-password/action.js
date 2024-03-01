import { restorePassword } from "../../utils/auth-api";

export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_REQUEST_SUCCESS = 'FORGOT_PASSWORD_REQUEST_SUCCESS';
export const FORGOT_PASSWORD_REQUEST_FAILED = 'FORGOT_PASSWORD_REQUEST_FAILED';

export function forgotPasswordRequest(email, handler) {
    return function(dispatch) {
        dispatch({
            type: FORGOT_PASSWORD_REQUEST
        })
        restorePassword(email)
            .then((res) => {
                if(res && res.success) {
                    dispatch({
                        type: FORGOT_PASSWORD_REQUEST_SUCCESS
                    });
                    handler();
                }
            })
            .catch((err) => {
                dispatch({
                    type: FORGOT_PASSWORD_REQUEST_FAILED
                })
            })
    }
};
