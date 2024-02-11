import { GET_INITIAL_DATA, GET_INITIAL_DATA_FAILED, GET_INITIAL_DATA_SUCCESS } from "../actions/burger-ingredients";

const initialState = {
    feedRequest: false,
    feedFailed: false,
    ingredients: []
}

export const ingredientsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_INITIAL_DATA:
            return {
                ...state,
                feedRequest: true,
                feedFailed: false,
            }
        case GET_INITIAL_DATA_SUCCESS:
            return {
                ...state,
                ingredients: action.payload,
                feedRequest: false
            }
        case GET_INITIAL_DATA_FAILED:
            return {
                ...state,
                feedFailed: true,
                feedRequest: false
            }
        default:
            return state;
    }
};