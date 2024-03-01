import { combineReducers } from 'redux';
import { ingredientsReducer } from './burger-ingredients/reducer';
import { constructorReducer } from './burger-constructor/reducer';
import { currenIngredientReducer } from './current-ingredient/reducer';
import { orderReducer } from './order-ingredients/reducer';
import { registerReducer } from './register/reducer';
import { loginReducer } from './login/reducer';
import { userReducer } from './user/reducer';
import { logoutReducer } from './logout/reducer';
import { forgotPassReducer } from './forgot-password/reducer';
import { resetPasswordReducer } from './reset-password/reducer';
import { updateUserDataReducer } from './edit-profile/reducer';

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
    updateUserData: updateUserDataReducer,
});