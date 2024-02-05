import { useState, useMemo, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import IngredientCard from "./ingredient-card/ingredient-card";

import stylesBurgerIngredients from './burger-ingredients.module.css';
import { ingredientStructure } from "../../utils/prop-types";

function BurgerIngredients({
    handleOpenModal,
    setCurrentElementInModal
}) {
    const [current, setCurrent] = useState('buns');
    const bunsRef = useRef();
    const mainsRef = useRef();
    const saucesRef = useRef();

    const { ingredients } = useSelector(store => ({
        ingredients: store.ingredients,
        currentIngredient: store.currentIngredient,
    }));

    const buns = useMemo(() => ingredients.ingredients.filter((e) => e.type === 'bun'), [ingredients.ingredients]);
    const mains = useMemo(() => ingredients.ingredients.filter((e) => e.type === 'main'), [ingredients.ingredients]);
    const sauces = useMemo(() => ingredients.ingredients.filter((e) => e.type === 'sauce'), [ingredients.ingredients]);

    function calculateTab() {
        if(saucesRef.current.getBoundingClientRect().top < 321 && saucesRef.current.getBoundingClientRect().top > -200 ) {
            setCurrent('sauces');
        } else if (bunsRef.current.getBoundingClientRect().top < 321 && bunsRef.current.getBoundingClientRect().top > 35) {
            setCurrent('buns');
        } else if (mainsRef.current.getBoundingClientRect().top < 321) {
            setCurrent('mains');
        }
        return
    };

    return (
        <>
            <section className={ stylesBurgerIngredients.container }>
                
                <div className={ stylesBurgerIngredients.tabContainer }>
                    <Tab value="buns" active={current === 'buns'} onClick={ setCurrent }>
                        Булки
                    </Tab>
                    <Tab value="sauces" active={current === 'sauces'} onClick={ setCurrent }>
                        Соусы
                    </Tab>
                    <Tab value="mains" active={current === 'mains'} onClick={ setCurrent }>
                        Начинки
                    </Tab>
                </div>
                <div className={ `pt-10 custom-scroll ${stylesBurgerIngredients.ingredientsContainer}` } onScroll={ calculateTab }>
                    <h2 className={ `mb-6 ${stylesBurgerIngredients.ingredientName}` }>Булки</h2>
                    <ul className={ `pl-4 mb-10 ${stylesBurgerIngredients.list}` } ref={ bunsRef }>
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
                    <ul className={ `pl-4 ${stylesBurgerIngredients.list}` } ref={ saucesRef }>
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
                    <ul className={ `pl-4 ${stylesBurgerIngredients.list}` } ref={ mainsRef }>
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

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(ingredientStructure).isRequired,
    handleOpenModal: PropTypes.func.isRequired,
    setCurrentElementInModal: PropTypes.func.isRequired,
};

export default BurgerIngredients;