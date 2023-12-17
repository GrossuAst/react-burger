import React from "react";

import stylesMain from './main.module.css';

import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

function Main() {
    return (
        <main className={ `pt-10 pb-10 ${stylesMain.main}` }>
            <h1 className={`mb-5 ${stylesMain.pageTitle}`}>Соберите бургер</h1>
            <BurgerIngredients />
            <BurgerConstructor />
        </main>
    )
};

export default Main;