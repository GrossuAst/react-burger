import { combineReducers } from 'redux';
import { ingredientsReducer } from './burger-ingredients';
import { constructorReducer } from './burger-constructor';
import { currenIngredientReducer } from './current-ingredient';
import { orderReducer } from './order-ingredients';
import { registerReducer } from './register';
import { loginReducer } from './login';
import { userReducer } from './user';
import { logoutReducer } from './logout';
import { forgotPassReducer } from './forgot-password';
import { resetPasswordReducer } from './reset-password';

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    ingredientsInConstructor: constructorReducer,
    currentIngredient: currenIngredientReducer,
    orderDetails: orderReducer,
    register: registerReducer,
    login: loginReducer,
    logout: logoutReducer,
    userData: userReducer,
    forgotPassword: forgotPassReducer,
    resetPassord: resetPasswordReducer,
});