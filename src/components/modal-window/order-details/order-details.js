import React from "react";
import { useSelector } from "react-redux";

import stylesOrderDetails from './order-details.module.css';
import doneLogo from '../../../images/done.png';

function OrderDetails() {
    const { orderDetails } = useSelector(store => ({
        orderDetails: store.orderDetails
    }));

    return (
        <article className={ `pb-30 ${stylesOrderDetails.info}` }>
            <h2 className={ stylesOrderDetails.price }>{ orderDetails.orderDetails && orderDetails.orderDetails.order.number }</h2>
            <h3 className={ stylesOrderDetails.title }>идентификатор заказа</h3>
            <img src={ doneLogo } alt='значок готово' className={ `mb-10 ${stylesOrderDetails.image}` } />
            <p className={ `text text_type_main-default mt-5 ${stylesOrderDetails.text}` }>Ваш заказ начали готовить</p>
            <p className={ `text text_type_main-default text_color_inactive mt-2 ${stylesOrderDetails.text}` }>Дождитесь готовности на орбитальной станции</p>
        </article>
    )
};

export default OrderDetails;