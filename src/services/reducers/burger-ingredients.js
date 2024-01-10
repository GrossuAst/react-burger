import { GET_INITIAL_DATA } from "../actions/burger-ingredients";

const initialState = {
    ingredients: [],
}

export const ingredientsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_INITIAL_DATA:
            return {
                ...state,
                ingredients: action.payload
            }
        default:
            return state;
    }
};