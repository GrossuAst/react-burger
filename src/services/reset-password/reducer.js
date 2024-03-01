import { RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILED } from "./action";

const initialState = {
    feedRequest: false,
    feedFailed: false,
    feedSuccess: false
};

export const resetPasswordReducer = (state = initialState, action) => {
    switch(action.type) {
        case(RESET_PASSWORD_REQUEST): {
            return {
                ...state,
                feedRequest: true
            }
        }
        case(RESET_PASSWORD_SUCCESS): {
            return {
                ...state,
                feedRequest: false,
                feedSuccess: true
            }
        }
        case(RESET_PASSWORD_FAILED): {
            return {
                ...state,
                feedFailed: true
            }
        }
        default: 
            return state
    }
};
