import React from "react";

import stylesOrderDetails from './order-details.module.css';
import doneLogo from '../../../images/done.png';

function OrderDetails() {
    return (
        <article className={ `pb-30 ${stylesOrderDetails.info}` }>
            <h2 className={ stylesOrderDetails.price }>034536</h2>
            <h3 className={ stylesOrderDetails.title }>идентификатор заказа</h3>
            <img src={ doneLogo } alt='значок готово' className={ `mb-10 ${stylesOrderDetails.image}` } />
            <p className={ `text text_type_main-default mt-5 ${stylesOrderDetails.text}` }>Ваш заказ начали готовить</p>
            <p className={ `text text_type_main-default text_color_inactive mt-2 ${stylesOrderDetails.text}` }>Дождитесь готовности на орбитальной станции</p>
        </article>
    )
};

export default OrderDetails;