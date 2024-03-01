import { GET_USER_DATA, GET_USER_DATA_SUCCESS, GET_USER_DATA_FAILED, IS_AUTH_CHECKED } from "./action";

const initialState = {
    feedRequest: false,
    feedFailed: false
};

export const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USER_DATA: {
            return {
                ...state,
                feedRequest: true,
                feedFailed: false,
            }
        }
        case GET_USER_DATA_SUCCESS: {
            return {
                ...state,
                feedRequest: false,
                feedFailed: false
            }
        }
        case GET_USER_DATA_FAILED: {
            return {
                ...state,
                feedRequest: false,
                feedFailed: true
            }
        }
        default: {
            return state
        }
    }
};