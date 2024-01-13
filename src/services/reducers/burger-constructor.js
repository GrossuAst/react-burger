import { ADD_INGREDIENT, REMOVE_INGREDIENT } from "../actions/burger-constructor";

const initialState = {
    bun: null,
    middleIngredients: [],
};

export const constructorReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_INGREDIENT:
            if(action.payload.data.type !== 'bun') {
                return {
                    ...state,
                    middleIngredients: [...state.middleIngredients, action.payload.data]      
                }
            }
            return {
                ...state,
                bun: action.payload.data
            }
        case REMOVE_INGREDIENT:
            return {
                ...state,
                // ingredientsInConstructor: ingredientsInConstructor.filter((i) => {})
            }
        default:
            return state;
    }
};