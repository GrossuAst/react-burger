import { UPDATE_USER_DATA_REQUEST, UPDATE_USER_DATA_REQUEST_SUCCESS, UPDATE_USER_DATA_REQUEST_FAILED } from "./action";

const initialState = {
    feedRequest: false,
    feedFailed: false
};

export const updateUserDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case(UPDATE_USER_DATA_REQUEST): {
            return {
                ...state,
                feedRequest: true
            }
        }
        case(UPDATE_USER_DATA_REQUEST_SUCCESS): {
            return {
                ...state,
                feedRequest: false
            }
        }
        case(UPDATE_USER_DATA_REQUEST_FAILED): {
            return {
                ...state,
                feedRequest: false,
                feedFailed: true
            }
        }
        default: 
            return state
    }
};