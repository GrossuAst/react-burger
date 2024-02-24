import { LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILED } from "../actions/logout";

const initialState = {
    feedRequest: false,
    feedFailed: false,
    feedSuccess: false
};

export const logoutReducer = (state = initialState, action) => {
    switch(action.type) {
        case(LOGOUT): {
            return {
                ...state,
                feedRequest: true
            }
        }
        case(LOGOUT_SUCCESS): {
            return {
                ...state,
                feedSuccess: true
            }
        }
        case(LOGOUT_FAILED): {
            return {
                feedFailed: true
            }
        }
        default: {
            return state
        }
    }
};