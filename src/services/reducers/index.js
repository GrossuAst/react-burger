import { combineReducers } from 'redux';
import { ingredientsReducer } from './burger-ingredients';
import { constructorReducer } from './burger-constructor';
import { currenIngredientReducer } from './current-ingredient';
import { orderReducer } from './order-ingredients';

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    ingredientsInConstructor: constructorReducer,
    currentIngredient: currenIngredientReducer,
    orderDetails: orderReducer,
});