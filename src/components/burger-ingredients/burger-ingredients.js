import React from "react";

import { data } from "../../utils/constants";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientCard from "./ingredient-card/ingredient-card";

import stylesBurgerIngredients from './burger-ingredients.module.css';

function BurgerIngredients() {
    const [current, setCurrent] = React.useState('Булки')

    return (
        <section className={ stylesBurgerIngredients.container }>
            <div style={{ display: 'flex' }}>
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
            <div>
                <div className={ `pt-10 custom-scroll ${stylesBurgerIngredients.ingredientsContainer}` }>
                <h2 className={ `mb-6 ${stylesBurgerIngredients.ingredientName}` }>Булки</h2>
                <ul className={ `pl-4 mb-10 ${stylesBurgerIngredients.list}` }>
                    {
                        data.filter((item) => {
                            if(item.type === 'bun') {
                                return item
                            }
                        })
                        .map((i) => (
                            <li key={ i._id } className={ stylesBurgerIngredients.listItem }>
                                <IngredientCard 
                                    name={ i.name }
                                    image={ i.image }
                                    price={ i.price }
                                />
                            </li>    
                        ))
                    }
                </ul>
                <h2 className={ `mb-6 mt-10 ${stylesBurgerIngredients.ingredientName}` }>Соусы</h2>
                <ul className={ `pl-4 ${stylesBurgerIngredients.list}` }>
                    {
                        data.filter((item) => {
                            if(item.type === 'sauce') {
                                return item
                            }
                        })
                        .map((i) => (
                            <li key={ i._id } className={ stylesBurgerIngredients.listItem }>
                                <IngredientCard 
                                    name={ i.name }
                                    image={ i.image }
                                    price={ i.price }
                                />
                            </li>    
                        ))
                    }
                </ul>
                
            </div>
            </div>
            
        </section>
    );
};

export default BurgerIngredients;