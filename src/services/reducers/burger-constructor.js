import { ADD_INGREDIENT, REMOVE_INGREDIENT, MOVE_INGREDIENT } from "../actions/burger-constructor";

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
                middleIngredients: state.middleIngredients.filter(item => item.key !== action.payload)
            }
        case MOVE_INGREDIENT:
            const { toIndex, fromIndex } = action.payload;
            const middleIngredients = [...state.middleIngredients]
            middleIngredients.splice(toIndex, 0, middleIngredients.splice(fromIndex, 1)[0]);
            return {
                ...state,
                middleIngredients: middleIngredients
            }
        default:
            return state;
    }
};