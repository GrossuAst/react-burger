import { useState, useMemo, useRef, useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";
import PropTypes from 'prop-types';

import { Link, useLocation } from "react-router-dom";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import IngredientCard from "./ingredient-card/ingredient-card";

import stylesBurgerIngredients from './burger-ingredients.module.css';

import { IIngredient } from "../../types/types";

interface IBurgerIngredients {
    handleOpenModal: () => void;
};

const BurgerIngredients = ({ handleOpenModal }: IBurgerIngredients) => {
    const location = useLocation();
    const [current, setCurrent] = useState('buns');
    const bunsRef = useRef<HTMLUListElement>(null);
    const mainsRef = useRef<HTMLUListElement>(null);
    const saucesRef = useRef<HTMLUListElement>(null);

    const { ingredients } = useSelector((store: any) => ({
        ingredients: store.ingredients,
        currentIngredient: store.currentIngredient,
    }), shallowEqual);

    const buns = useMemo(() => ingredients.ingredients.filter((e: IIngredient) => e.type === 'bun'), [ingredients.ingredients]);
    const mains = useMemo(() => ingredients.ingredients.filter((e: IIngredient) => e.type === 'main'), [ingredients.ingredients]);
    const sauces = useMemo(() => ingredients.ingredients.filter((e: IIngredient) => e.type === 'sauce'), [ingredients.ingredients]);

    function calculateTab() {
        if(saucesRef.current) {
            const saucesTop = saucesRef.current.getBoundingClientRect().top;
            if(saucesTop < 321 && saucesTop > -200) {
                setCurrent('sauces')
                return;
            }
        }
        if(bunsRef.current) {
            const bunsTop = bunsRef.current.getBoundingClientRect().top;
            if(bunsTop < 321 && bunsTop > 35) {
                setCurrent('buns');
                return;
            }
        }
        if(mainsRef.current) {
            const mainsTop = mainsRef.current.getBoundingClientRect().top;
            if(mainsTop < 321) {
                setCurrent('mains');
            }
        }
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
                            buns.map((i: IIngredient) => (
                                <li key={ i._id } className={ stylesBurgerIngredients.listItem }>
                                    <Link className={ stylesBurgerIngredients.link } 
                                        to={`/ingredients/${i._id}`}
                                        state={{ backgroundLocation: location }}
                                    >
                                        <IngredientCard
                                            cardData={ i }
                                            name={ i.name }
                                            image={ i.image }
                                            price={ i.price }
                                            handleOpenModal={ handleOpenModal }
                                        />
                                    </Link>
                                </li>    
                            ))
                        }
                    </ul>
                    <h2 className={ `mb-6 mt-10 ${stylesBurgerIngredients.ingredientName}` }>Соусы</h2>
                    <ul className={ `pl-4 ${stylesBurgerIngredients.list}` } ref={ saucesRef }>
                        {
                            sauces.map((i: IIngredient) => (
                                <li key={ i._id } className={ stylesBurgerIngredients.listItem }>
                                    <Link className={ stylesBurgerIngredients.link }
                                        to={`/ingredients/${i._id}`}
                                        state={{ backgroundLocation: location }}
                                    >
                                        <IngredientCard 
                                            cardData={ i }
                                            name={ i.name }
                                            image={ i.image }
                                            price={ i.price }
                                            handleOpenModal={ handleOpenModal }
                                        />
                                    </Link>
                                </li>    
                            ))
                        }
                    </ul>
                    <h2 className={ `mb-6 mt-10 ${stylesBurgerIngredients.ingredientName}` }>Начинки</h2>
                    <ul className={ `pl-4 ${stylesBurgerIngredients.list}` } ref={ mainsRef }>
                        {
                            mains.map((i: IIngredient) => (
                                <li key={ i._id } className={ stylesBurgerIngredients.listItem }>
                                    <Link className={ stylesBurgerIngredients.link }
                                        to={`/ingredients/${i._id}`}
                                        state={{ backgroundLocation: location }}
                                    >
                                        <IngredientCard 
                                            cardData={ i }
                                            name={ i.name }
                                            image={ i.image }
                                            price={ i.price }
                                            handleOpenModal={ handleOpenModal }
                                        />
                                    </Link>
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
    handleOpenModal: PropTypes.func.isRequired,
};

export default BurgerIngredients;