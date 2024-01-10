import { combineReducers } from 'redux';
import { ingredientsReducer } from './burger-ingredients';
import { constructorReducer } from './burger-constructor';
import { currenIngredientReducer } from './current-ingredient';

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    ingredientsInConstructor: constructorReducer,
    currentIngredient: currenIngredientReducer,
});