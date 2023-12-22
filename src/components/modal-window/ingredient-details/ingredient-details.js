import PropTypes from 'prop-types';

import stylesIngredientDetails from './ingredient-details.module.css';
import { ingredientStructure } from '../../../utils/prop-types';

function IngredientDetails({
    currentElementInModal
}) {

    const { name, image, calories, carbohydrates, fat, proteins, } = currentElementInModal;

    return (
        <article className={ ` ${stylesIngredientDetails.ingredientInfo}` }>
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

IngredientDetails.propTypes = {
    currentElementInModal: ingredientStructure.isRequired
};

export default IngredientDetails;
