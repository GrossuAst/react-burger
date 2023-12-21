import PropTypes from 'prop-types';

import stylesMain from './main.module.css';

import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

function Main({
    data,
    handleOpenModal,
    setCurrentElementInModal,
}) {
    return (
        <main className={ `pt-10 pb-10 ${stylesMain.main}` }>
            <h1 className={`mb-5 ${stylesMain.pageTitle}`}>Соберите бургер</h1>
            <BurgerIngredients 
                data={ data }
                handleOpenModal={ handleOpenModal }
                setCurrentElementInModal={ setCurrentElementInModal }
            />
            <BurgerConstructor 
                data={ data }
                handleOpenModal={ handleOpenModal }
            />
        </main>
    )
};

const dataStructure = PropTypes.arrayOf(
    PropTypes.shape({
        calories: PropTypes.number.isRequired,
        carbohydrates: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        image_large: PropTypes.string.isRequired,
        image_mobile: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        proteins: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        __v: PropTypes.number.isRequired,
        _id: PropTypes.string.isRequired
    })
).isRequired;

Main.propTypes = {
    data: dataStructure,
    handleOpenModal: PropTypes.func.isRequired,
    setCurrentElementInModal: PropTypes.func.isRequired,
};

export default Main;