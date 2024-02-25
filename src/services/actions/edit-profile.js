import { editProfile } from "../../utils/auth-api";
import { UPDATE_USER } from "./user";

export const UPDATE_USER_DATA_REQUEST = 'UPDATE_USER_DATA_REQUEST';
export const UPDATE_USER_DATA_REQUEST_FAILED = 'UPDATE_USER_DATA_REQUEST_FAILED';
export const UPDATE_USER_DATA_REQUEST_SUCCESS = 'UPDATE_USER_DATA_REQUEST_SUCCESS';

export function updateUser(data, handler) {
    console.log(data)
    return function(dispatch) {
        dispatch({
            type: UPDATE_USER_DATA_REQUEST,
        });
        editProfile(data)
            .then((res) => {
                console.log(res)
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