import { FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_REQUEST_SUCCESS, FORGOT_PASSWORD_REQUEST_FAILED } from "./action";

const initialState = {
    feedRequest: false,
    feedFailed: false,
    feedSucces: false
};

export const forgotPassReducer = (state = initialState, action) => {
    switch(action.type) {
        case(FORGOT_PASSWORD_REQUEST): {
            return {
                ...state,
                feedRequest: true,
            }
        }
        case(FORGOT_PASSWORD_REQUEST_SUCCESS): {
            return {
                ...state,
                feedRequest: false,
                feedSucces: true
            }
        }
        case(FORGOT_PASSWORD_REQUEST_FAILED): {
            return {
                ...state,
                feedRequest: false,
                feedFailed: true,
                feedSucces: false
            }
        }
        default: {
            return state
        }
    }
}