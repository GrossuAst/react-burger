import styles from './ingredient-page.module.css';
import PreloaderOrderDeatails from '../../components/ui/preloader-order-details/preloader-order-details';
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { ACTIVE_INGREDIENT } from "../../services/current-ingredient/action";
import PropTypes from 'prop-types';

import IngredientDetails from "../../components/modal-window/ingredient-details/ingredient-details";

function IngredientPage({ getIngredientById }) {
    const dispatch = useDispatch();

    const { ingredients, currentIngredient } = useSelector(store => ({
        ingredients: store.ingredients.ingredients,
        currentIngredient: store.currentIngredient.currentIngredient
    }), shallowEqual);

    const { id } = useParams();

    function checkIngredient(id) {
        if(ingredients) {
            const element = ingredients.find((i) => i._id === id);
            element && dispatch({
              type: ACTIVE_INGREDIENT,
              payload: { data: element }
            });
        }
    };

    useEffect(() => {
        if(id) {
            checkIngredient(id);
        }
    }, [ingredients]);

    return (
        <section className={ `mt-30 ${styles.ingredientPage}`}>
            {currentIngredient ? <IngredientDetails getIngredientById={ getIngredientById } /> : !currentIngredient && <PreloaderOrderDeatails /> }
        </section>
    )
};

IngredientPage.propTypes = {
    getIngredientById: PropTypes.func.isRequired,
};

export default IngredientPage;