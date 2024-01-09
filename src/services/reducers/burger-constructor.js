import { BURGER_CONSTRUCTOR, ADD_INGREDIENT, REMOVE_INGREDIENT } from "../actions/burger-constructor";

const initialState = {
    ingredientsInConstructor: [],
};

export const constructorReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_INGREDIENT:
            return {
                ...state,
                ingredientsInConstructor: [...state.ingredients, action.id]
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