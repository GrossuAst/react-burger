import { UPDATE_USER, CHECK_AUTH } from "../actions/user";

const initialState = {
    isAuthChecked: false,
    user: null
};

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case(UPDATE_USER): {
            return {
                ...state,
                user: action.payload
            }
        }
        case(CHECK_AUTH): {
            return {
                ...state,
                isAuthChecked: true
            }
        }
        default: {
            return state
        }
    }
};
