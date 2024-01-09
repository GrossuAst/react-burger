import PropTypes from 'prop-types';

import stylesMain from './main.module.css';
import { ingredientStructure } from '../../utils/prop-types';

import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

function Main({
    // data,
    handleOpenModal,
    setCurrentElementInModal,
}) {
    return (
        <main className={ `pt-10 pb-10 ${stylesMain.main}` }>
            <h1 className={`mb-5 ${stylesMain.pageTitle}`}>Соберите бургер</h1>
            <BurgerIngredients
                // data={ data }
                handleOpenModal={ handleOpenModal }
                setCurrentElementInModal={ setCurrentElementInModal }
            />
            <BurgerConstructor 
                // data={ data }
                handleOpenModal={ handleOpenModal }
            />
        </main>
    )
};

Main.propTypes = {
    data: PropTypes.arrayOf(ingredientStructure).isRequired,
    handleOpenModal: PropTypes.func.isRequired,
    setCurrentElementInModal: PropTypes.func.isRequired,
};

export default Main;