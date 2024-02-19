import { REGISTER_REQUEST, REGISTER_REQUEST_FAILED, REGISTER_REQUEST_SUCCESS } from "../actions/register";

const initialState = {
    feedRequest: false,
    feedFailed: false,
    userData: {
        email: '',
        name: ''    
    },
    accessToken: '',
    refreshToken: ''
};

export const registerReducer = (state = initialState, action) => {
    switch(action.type) {
        case REGISTER_REQUEST: {
            return {
                ...state,
                feedRequest: true,
                feedFailed: false,
            }
        }
        case REGISTER_REQUEST_SUCCESS: {
            console.log(action)
            return {
                ...state,
                userData: {
                    email: action.payload.user.email,
                    name: action.payload.user.name
                },
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
                feedRequest: false,
                feedFailed: false
            }
        }
        case REGISTER_REQUEST_FAILED: {
            console.log(action)
            return {
                ...state,
                feedRequest: false,
                feedFailed: true
            }
        }
        default:
            return state;
    }
}