import PropTypes from 'prop-types';

import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import stylesIngredientCard from './ingredient-card.module.css';
import { ingredientStructure } from '../../../utils/prop-types';

function IngredientCard({
    cardData,
    name,
    image,
    price,

    handleOpenModal,
    setCurrentElementInModal,
}) {

    function handleCardClick(data) {
        handleOpenModal();
        setCurrentElementInModal(data);
    };

    return (
        <article 
            className={ ` ${stylesIngredientCard.ingredientCard}` }
            onClick={ () => handleCardClick(cardData) }
        >
            <img alt="булка" src={ image }></img>
            <p className={ `mt-1 mb-1 ${stylesIngredientCard.price}` }>{ price } <CurrencyIcon /></p>
            <h3 className={ `text text_type_main-default ${stylesIngredientCard.name}` }>{ name }</h3>
            <div className={ `${stylesIngredientCard.number} ${name.includes('Краторная булка') && `${stylesIngredientCard.number_visible}`}` }>1</div>
        </article>
    )
};

IngredientCard.propTypes = {
    cardData: ingredientStructure.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    handleOpenModal: PropTypes.func.isRequired,
    setCurrentElementInModal: PropTypes.func.isRequired,
};

export default IngredientCard;