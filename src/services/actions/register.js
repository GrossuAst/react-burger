import { registerUser } from "../../utils/auth-api";

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_REQUEST_FAILED = 'REGISTER_REQUEST_FAILED';
export const REGISTER_REQUEST_SUCCESS = 'REGISTER_REQUEST_SUCCESS';

export function registerRequest(data, handler) {
    return function(dispatch) {
        dispatch({
            type:REGISTER_REQUEST
        })
        registerUser(data)
            .then((res) => {
                if(res && res.success) {
                    dispatch({
                        type: REGISTER_REQUEST_SUCCESS,
                        payload: res
                    });
                    localStorage.setItem('refreshToken', res.refreshToken);
                    handler();
                } else {
                    dispatch({
                        type: REGISTER_REQUEST_FAILED
                    })
                }
            })
            .catch((err) => {
                dispatch({
                    type: REGISTER_REQUEST_FAILED
                })
            })
    }
};
