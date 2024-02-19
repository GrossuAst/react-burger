import { GET_USER_DATA, GET_USER_DATA_SUCCESS, GET_USER_DATA_FAILED } from "../actions/login";

const initialState = {
    feedRequest: false,
    feedFailed: false,
    user: {
        email: '',
        name: ''
    }
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
                user: {
                    email: action.payload.user.email,
                    name: action.payload.user.name,
                },
                feedRequest: false,
                feedFailed: false
            }
        }
        case GET_USER_DATA_FAILED: {
            return {
                ...state,
                user: {
                    email: '',
                    name: '',
                },
                feedRequest: false,
                feedFailed: true
            }
        }
        default: {
            return state
        }
    }
};