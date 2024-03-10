import stylesMain from './main.module.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDispatch } from 'react-redux';
import { addIngredientInConstructor } from '../../services/burger-constructor/action';
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { IIngredientInConstructor } from '../../types/types';

interface IMainProps {
    handleOpenModal: () => void;
}

const Main = ({ handleOpenModal }: IMainProps) => {
    const dispatch = useDispatch();

    function onDropHandler(item: IIngredientInConstructor) {
        dispatch(addIngredientInConstructor(item));
    };

    return (
        <DndProvider backend={ HTML5Backend  }>
            <main className={ `pt-10 pb-10 ${stylesMain.main}` }>
                <h1 className={`mb-5 ${stylesMain.pageTitle}`}>Соберите бургер</h1>
                <BurgerIngredients
                    handleOpenModal={ handleOpenModal }
                />
                <BurgerConstructor 
                    handleOpenModal={ handleOpenModal }
                    onDropHandler={ onDropHandler }
                />
            </main>
        </DndProvider>
    )
};

export default Main;