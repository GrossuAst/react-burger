import { combineReducers } from 'redux';
import { ingredientsReducer } from './burger-ingredients';
import { constructorReducer } from './burger-constructor';
import { currenIngredientReducer } from './current-ingredient';
import { orderReducer } from './order-ingredients';
import { registerReducer } from './register';
import { loginReducer } from './login';
import { userReducer } from './user';

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    ingredientsInConstructor: constructorReducer,
    currentIngredient: currenIngredientReducer,
    orderDetails: orderReducer,
    register: registerReducer,
    login: loginReducer,
    userData: userReducer
});