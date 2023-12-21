import { useState, useMemo } from "react";
import PropTypes from 'prop-types';

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import IngredientCard from "./ingredient-card/ingredient-card";

import stylesBurgerIngredients from './burger-ingredients.module.css';

function BurgerIngredients({
    data,
    handleOpenModal,
    setCurrentElementInModal
}) {

    const [current, setCurrent] = useState('Булки');

    const buns = useMemo(() => data.filter((e) => e.type === 'bun'), [data]);
    const mains = useMemo(() => data.filter((e) => e.type === 'main'), [data]);
    const sauces = useMemo(() => data.filter((e) => e.type === 'sauce'), [data]);

    return (
        <>
            <section className={ stylesBurgerIngredients.container }>
                
                <div className={ stylesBurgerIngredients.tabContainer }>
                    <Tab value="Булки" active={current === 'Булки'} onClick={ setCurrent }>
                        Булки
                    </Tab>
                    <Tab value="Соусы" active={current === 'Соусы'} onClick={ setCurrent }>
                        Соусы
                    </Tab>
                    <Tab value="Начинки" active={current === 'Начинки'} onClick={ setCurrent }>
                        Начинки
                    </Tab>
                </div>
                <div className={ `pt-10 custom-scroll ${stylesBurgerIngredients.ingredientsContainer}` }>
                    <h2 className={ `mb-6 ${stylesBurgerIngredients.ingredientName}` }>Булки</h2>
                    <ul className={ `pl-4 mb-10 ${stylesBurgerIngredients.list}` }>
                        {
                            buns.map((i) => (
                                <li key={ i._id } className={ stylesBurgerIngredients.listItem }>
                                    <IngredientCard
                                        cardData={ i }
                                        name={ i.name }
                                        image={ i.image }
                                        price={ i.price }

                                        handleOpenModal={ handleOpenModal }
                                        setCurrentElementInModal={ setCurrentElementInModal }
                                    />
                                </li>    
                            ))
                        }
                    </ul>
                    <h2 className={ `mb-6 mt-10 ${stylesBurgerIngredients.ingredientName}` }>Соусы</h2>
                    <ul className={ `pl-4 ${stylesBurgerIngredients.list}` }>
                        {
                            sauces.map((i) => (
                                <li key={ i._id } className={ stylesBurgerIngredients.listItem }>
                                    <IngredientCard 
                                        cardData={ i }
                                        name={ i.name }
                                        image={ i.image }
                                        price={ i.price }

                                        handleOpenModal={ handleOpenModal }
                                        setCurrentElementInModal={ setCurrentElementInModal }
                                    />
                                </li>    
                            ))
                        }
                    </ul>
                    <h2 className={ `mb-6 mt-10 ${stylesBurgerIngredients.ingredientName}` }>Начинки</h2>
                    <ul className={ `pl-4 ${stylesBurgerIngredients.list}` }>
                        {
                            mains.map((i) => (
                                <li key={ i._id } className={ stylesBurgerIngredients.listItem }>
                                    <IngredientCard 
                                        cardData={ i }
                                        name={ i.name }
                                        image={ i.image }
                                        price={ i.price }
                                        
                                        handleOpenModal={ handleOpenModal }
                                        setCurrentElementInModal={ setCurrentElementInModal }
                                    />
                                </li>    
                            ))
                        }
                    </ul>
                </div>
            </section>
        </>
    );
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

BurgerIngredients.propTypes = {
    data: dataStructure,
    handleOpenModal: PropTypes.func.isRequired,
    setCurrentElementInModal: PropTypes.func.isRequired,
};

export default BurgerIngredients;