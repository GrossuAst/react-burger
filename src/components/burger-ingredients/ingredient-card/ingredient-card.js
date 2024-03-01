import PropTypes from 'prop-types';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useDrag } from 'react-dnd';
import { useEffect, useState } from 'react';
import { showIngredientDetails } from '../../../services/current-ingredient/action';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import stylesIngredientCard from './ingredient-card.module.css';
import { ingredientStructure } from '../../../utils/prop-types';


function IngredientCard({ cardData, name, image, price, handleOpenModal }) {
    const dispatch = useDispatch();

    const [number, setNumber] = useState(0);

    const { ingredientsInConstructor } =  useSelector(store => ({
        ingredientsInConstructor: store.ingredientsInConstructor
    }), shallowEqual);

    function calculateIngredientsNumber() {
        const ingredients = ingredientsInConstructor.middleIngredients;
        const filteredIngredients = ingredients.filter(ingredient => ingredient._id === cardData._id);
        setNumber(filteredIngredients.length);
    }

    useEffect(() => {
        calculateIngredientsNumber();
    }, [ingredientsInConstructor]);

    const isBunChecked = ingredientsInConstructor.bun && ingredientsInConstructor.bun._id === cardData._id;

    function handleCardClick(data) {
        handleOpenModal();
        dispatch(showIngredientDetails(data));
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
                <div className={ `${stylesIngredientCard.number} ${number !== 0 && `${stylesIngredientCard.number_visible}`}` }>{ number }</div>
                { isBunChecked && <div className={ `${stylesIngredientCard.number} ${isBunChecked && `${stylesIngredientCard.number_visible}`}` }>2</div> }
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
};

export default IngredientCard;