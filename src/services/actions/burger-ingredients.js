import { getData } from "../../utils/api";

export const GET_INITIAL_DATA = 'ADD_INITIAL_DATA';
export const GET_INITIAL_DATA_FAILED = 'GET_INITIAL_DATA_FAILED';
export const GET_INITIAL_DATA_SUCCESS = 'GET_INITIAL_DATA_SUCCESS';

export function getInitialData() {
    return function(dispatch) {
        dispatch({
            type: GET_INITIAL_DATA
        })
        getData()
            .then((res) => {
                if(res && res.success) {
                    dispatch({
                        type: GET_INITIAL_DATA_SUCCESS,
                        payload: res.data
                    })    
                } else {
                    dispatch({
                        type: GET_INITIAL_DATA_FAILED
                    })
                }
            })
            .catch((err) => {
                dispatch({
                    type: GET_INITIAL_DATA_FAILED
                })
            })
    }
};