import { combineReducers } from 'redux';
import { ingredientsReducer } from './burger-ingredients';
import { constructorReducer } from './burger-constructor';
import { currenIngredientReducer } from './current-ingredient';
import { orderReducer } from './order-ingredients';
import { registerReducer } from './register';
import { loginReducer } from './login';

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    ingredientsInConstructor: constructorReducer,
    currentIngredient: currenIngredientReducer,
    orderDetails: orderReducer,
    registerReducer: registerReducer,
    loginReducer: loginReducer,
});