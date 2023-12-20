import React from "react";

import stylesModal from './modal.module.css';

import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";

function Modal({
    hanldeCloseModal,
    currentElementInModal,
}) {
    return (
        <div className={ `pt-10 ${stylesModal.container}` }>
            <div className={ `pr-10 ${stylesModal.header}` }>
                { currentElementInModal && (
                    <p className={ `pl-10 pt-1 ${stylesModal.headerText}` }>Детали ингредиента</p> 
                ) }
                <button
                    className={ `${stylesModal.closeButton}` }
                    onClick={ hanldeCloseModal }
                >
                </button>
            </div>
            { currentElementInModal ? 
                ( 
                    <IngredientDetails
                        currentElementInModal={ currentElementInModal }
                    />
                )
                :
                (
                    <OrderDetails
                    />
                )
            }
        </div>
    );
};

export default Modal;