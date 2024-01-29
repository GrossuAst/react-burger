import PropTypes from 'prop-types';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDispatch } from 'react-redux';
import { addIngredientInConstructor } from '../../services/actions/burger-constructor';

import stylesMain from './main.module.css';
import { ingredientStructure } from '../../utils/prop-types';

import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

function Main({
    handleOpenModal,
    setCurrentElementInModal,
}) {
    const dispatch = useDispatch();

    function onDropHandler(item) {
        dispatch(addIngredientInConstructor(item));
    };

    return (
        <DndProvider backend={ HTML5Backend  }>
            <main className={ `pt-10 pb-10 ${stylesMain.main}` }>
                <h1 className={`mb-5 ${stylesMain.pageTitle}`}>Соберите бургер</h1>
                <BurgerIngredients
                    handleOpenModal={ handleOpenModal }
                    setCurrentElementInModal={ setCurrentElementInModal }
                />
                <BurgerConstructor 
                    handleOpenModal={ handleOpenModal }
                    onDropHandler={ onDropHandler }
                />
            </main>
        </DndProvider>
    )
};

Main.propTypes = {
    data: PropTypes.arrayOf(ingredientStructure).isRequired,
    handleOpenModal: PropTypes.func.isRequired,
    setCurrentElementInModal: PropTypes.func.isRequired,
};

export default Main;