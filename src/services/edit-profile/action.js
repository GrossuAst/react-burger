import { editProfile } from "../../utils/auth-api";
import { UPDATE_USER } from "../user/action";

export const UPDATE_USER_DATA_REQUEST = 'UPDATE_USER_DATA_REQUEST';
export const UPDATE_USER_DATA_REQUEST_FAILED = 'UPDATE_USER_DATA_REQUEST_FAILED';
export const UPDATE_USER_DATA_REQUEST_SUCCESS = 'UPDATE_USER_DATA_REQUEST_SUCCESS';

export function updateUser(data, handler) {
    return function(dispatch) {
        dispatch({
            type: UPDATE_USER_DATA_REQUEST,
        });
        editProfile(data)
            .then((res) => {
                if(res && res.success) {
                    dispatch({
                        type: UPDATE_USER_DATA_REQUEST_SUCCESS
                    });
                    dispatch({
                        type: UPDATE_USER,
                        payload: res.user
                    });
                    handler();
                }
            })
            .catch((err) => {
                dispatch({
                    type: UPDATE_USER_DATA_REQUEST_FAILED
                })
            })
    }
};