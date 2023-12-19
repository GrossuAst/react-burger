import React from "react";
import PropTypes from 'prop-types';

import stylesMain from './main.module.css';

import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

function Main({ data }) {
    return (
        <main className={ `pt-10 pb-10 ${stylesMain.main}` }>
            <h1 className={`mb-5 ${stylesMain.pageTitle}`}>Соберите бургер</h1>
            <BurgerIngredients 
                data={ data }
            />
            <BurgerConstructor 
                data={ data }
            />
        </main>
    )
};

Main.propTypes = {
    data: PropTypes.array.isRequired,
};

export default Main;