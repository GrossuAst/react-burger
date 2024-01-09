import { combineReducers } from 'redux';
import { ingredientsReducer } from './burger-ingredients';
import { constructorReducer } from './burger-constructor';

// export const initialState = {
    // allIngredients: [],
    // ingredientsInConstructor: [],
    // currentIngredientInModal: null,
    // createdOrder: null,
// };

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    ingredientsInConstructor: constructorReducer,
});