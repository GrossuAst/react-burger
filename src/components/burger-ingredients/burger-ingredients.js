import React, { useState } from "react";
import PropTypes from 'prop-types';

import ModalOverlay from "../modal-window/modal-overlay/modal-overlay";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import IngredientCard from "./ingredient-card/ingredient-card";

import stylesBurgerIngredients from './burger-ingredients.module.css';

function BurgerIngredients({
    data,
    handleOpenModal,
}) {
    const [current, setCurrent] = React.useState('Булки');

    // const [isModalOpen, setIsModalOpen] = useState(false);

    const buns = React.useMemo(() => data.filter((e) => e.type === 'bun'), [data]);
    const mains = React.useMemo(() => data.filter((e) => e.type === 'main'), [data]);
    const sauces = React.useMemo(() => data.filter((e) => e.type === 'sauce'), [data]);

    // function hanldeCloseModal() {
    //     setIsModalOpen(false);
    // };

    // function handleOpenModal() {
    //     setIsModalOpen(true);
    // };

    return (
        <>
            {/* {
                isModalOpen && (
                    <ModalOverlay
                        name='детали ингредиента' 
                        isOpen={ isModalOpen }
                        style={ isModalOpen ? { overflow: 'visible' } : { overflow: 'hidden' } }
                        onClose={ hanldeCloseModal }
                    >
                    </ModalOverlay> 
                )
            } */}

            <section className={ stylesBurgerIngredients.container }>
                
                <div className={ stylesBurgerIngredients.tabContainer }>
                    <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
                        Булки
                    </Tab>
                    <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
                        Соусы
                    </Tab>
                    <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
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
                                        name={ i.name }
                                        image={ i.image }
                                        price={ i.price }
                                        onCardClick={ handleOpenModal }
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
                                        name={ i.name }
                                        image={ i.image }
                                        price={ i.price }
                                        onCardClick={ handleOpenModal }
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
                                        name={ i.name }
                                        image={ i.image }
                                        price={ i.price }
                                        onCardClick={ handleOpenModal }
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
    data: PropTypes.array.isRequired,
};

export default BurgerIngredients;