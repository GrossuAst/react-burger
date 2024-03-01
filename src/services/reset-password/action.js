import { resetPassword } from "../../utils/auth-api";

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILED = 'RESET_PASSWORD_FAILED';

export function handleResetPassword(data, handler) {
    return function(dispatch) {
        dispatch({
            type: RESET_PASSWORD_REQUEST
        });
        resetPassword(data)
            .then((res) => {
                if(res && res.success) {
                    dispatch({
                        type: RESET_PASSWORD_SUCCESS
                    });
                    handler();
                }
            })
            .catch((err) => {
                dispatch({
                    type: RESET_PASSWORD_FAILED
                })
            })
    }
};
