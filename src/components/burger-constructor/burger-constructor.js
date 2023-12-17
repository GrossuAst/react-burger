import React from "react";
import PropTypes from 'prop-types';

import { data } from "../../utils/constants";

import { ConstructorElement, DragIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";

import diamond from '../../images/diamond36x36.svg';

import stylesBurgerConstructor from './burger-constructor.module.css';

function BurgerConstructor() {
    return (
        <section className={ `pl-4 ${stylesBurgerConstructor.container}` }>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <ul className={ `custom-scroll ${stylesBurgerConstructor.list}` }>
                    {
                        data.map((i) => (
                            <li key={i._id} className={ `mr-2 ${stylesBurgerConstructor.listItem}`}>
                                { i.type !=='bun' ? <DragIcon/> : <></>}
                                <ConstructorElement
                                    type={ data.indexOf(i) === data.length - 1 ? 'bottom' : data.indexOf(i) === 0 && 'top' }
                                    isLocked={ i.type === 'bun' ? true : false }
                                    text={ data.indexOf(i) === 0 ? i.name + ' (Верх)' : i.name && data.indexOf(i) === data.length - 1 ? i.name + ' (Низ)' : i.name}
                                    price={ i.price }
                                    thumbnail={ i.image_large }
                                />
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className={ `mt-10 ${stylesBurgerConstructor.confirmation}` }>
                <div className={ `mr-10 ${stylesBurgerConstructor.total}` }>
                    <p className='text mr-2'>610</p>
                    <img alt='валюта- алмаз' src={ diamond }></img>
                </div>
                <Button htmlType="button" type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>
      </section>
    )
};

BurgerConstructor.propTypes = {
    data: PropTypes.array,
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
};

export default BurgerConstructor;