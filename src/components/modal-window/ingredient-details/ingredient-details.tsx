import { useSelector, shallowEqual } from 'react-redux';
import stylesIngredientDetails from './ingredient-details.module.css';
import { useParams } from 'react-router-dom';
import { useEffect } from "react";

import { IIngredient } from '../../../types/types';

interface IIngredientDetailsProps {
    ingredientInModal?: IIngredient | null;
    getIngredientById: (id: string) => void;
};

const IngredientDetails = ({ ingredientInModal, getIngredientById }: IIngredientDetailsProps) => {
    const { id } = useParams();

    const { currentIngredient, ingredients } = useSelector((store: any) => ({
        currentIngredient: store.currentIngredient.currentIngredient,
        ingredients: store.ingredients.ingredients
    }), shallowEqual);

    const { name, image, calories, carbohydrates, fat, proteins } = currentIngredient || ingredientInModal || {};

    useEffect(() => {
        if(id) {
            getIngredientById(id);
        }
    }, [ingredients]);

    return (
        <article className={ ` ${stylesIngredientDetails.ingredientInfo}` }>
            <h1 className={ `pl-10 pt-1 ${stylesIngredientDetails.headerText}` }>Детали ингредиента</h1>
            <img src={ image } alt={ name } className={ stylesIngredientDetails.image } /> 
            <h2 className={ `mt-6 ${stylesIngredientDetails.title}` }>{ name }</h2>
            <ul className={ `mt-9 ${stylesIngredientDetails.calories}` }>

                <li className={ stylesIngredientDetails.item }>
                    <h3 className={ stylesIngredientDetails.itemTitle }>Калории,ккал</h3>
                    <p className={ stylesIngredientDetails.number }>{ calories }</p>
                </li>

                <li className={ stylesIngredientDetails.item }>
                    <h3 className={ stylesIngredientDetails.itemTitle }>Белки, г</h3>
                    <p className={ stylesIngredientDetails.number }>{ proteins }</p>
                </li>

                <li className={ stylesIngredientDetails.item }>
                    <h3 className={ stylesIngredientDetails.itemTitle }>Жиры, г</h3>
                    <p className={ stylesIngredientDetails.number }>{ fat }</p>
                </li>

                <li className={ stylesIngredientDetails.item }>
                    <h3 className={ stylesIngredientDetails.itemTitle }>Углеводы, г</h3>
                    <p className={ stylesIngredientDetails.number }>{ carbohydrates }</p>
                </li>
                
            </ul>
        </article>
    );
};

export default IngredientDetails;
