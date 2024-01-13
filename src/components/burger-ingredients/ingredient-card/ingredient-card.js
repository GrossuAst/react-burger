import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useDrag } from 'react-dnd';

import { ACTIVE_INGREDIENT } from '../../../services/actions/current-ingredient';

import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import stylesIngredientCard from './ingredient-card.module.css';
import { ingredientStructure } from '../../../utils/prop-types';

function IngredientCard({
    cardData,
    name,
    image,
    price,
    handleOpenModal,
}) {
    const dispatch = useDispatch();

    function handleCardClick(data) {
        handleOpenModal();
        dispatch({
            type: ACTIVE_INGREDIENT,
            payload: { data: data }
        });
    };

    const [{ isBunDrag }, bunRef] = useDrag({
        type: 'bun',
        item: cardData,
        collect: monitor => ({
            isBunDrag: monitor.isDragging()
        })
    });

    const [{ isMidDrag }, midRef] = useDrag({
        type: 'mid',
        item: cardData,
        collect: monitor => ({
            isMidDrag: monitor.isDragging()
        })
    });

    return (
        !isBunDrag && !isMidDrag && (
            <article 
                className={ ` ${stylesIngredientCard.ingredientCard}` }
                onClick={ () => handleCardClick(cardData) }
                ref={ cardData.type === 'bun' ? bunRef : midRef }
            >
                <img alt="булка" src={ image }></img>
                <p className={ `mt-1 mb-1 ${stylesIngredientCard.price}` }>{ price } <CurrencyIcon /></p>
                <h3 className={ `text text_type_main-default ${stylesIngredientCard.name}` }>{ name }</h3>
                <div className={ `${stylesIngredientCard.number} ${name.includes('Краторная булка') && `${stylesIngredientCard.number_visible}`}` }>1</div>
            </article>    
        )

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