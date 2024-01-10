import { ACTIVE_INGREDIENT, DEACTIVE_INGREDIENT } from "../actions/current-ingredient";

const initialState = {
    currentIngredient: null
}

export const currenIngredientReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTIVE_INGREDIENT:
            return {
                ...state,
                currentIngredient: action.payload.data
            }
        case DEACTIVE_INGREDIENT:
            return {
                ...state,
                currentIngredient: null
            }
        default:
            return state;
    }
};