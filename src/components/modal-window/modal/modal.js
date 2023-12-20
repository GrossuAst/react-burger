import React from "react";

import stylesModal from './modal.module.css';

import IngredientDetails from "../ingredient-details/ingredient-details";

function Modal({
    // header,
    hanldeCloseModal,
    content,
    name,
    currentElementInModal,
}) {
    return (
        <div className={ `pt-10 ${stylesModal.container}` }>
            <div className={ `pr-10 ${stylesModal.header}` }>
                <p className={ `pl-10 pt-1 ${stylesModal.headerText}` }>Детали ингредиента</p>
                <button
                    className={ `${stylesModal.closeButton}` }
                    onClick={ hanldeCloseModal }
                >
                </button>
            </div>
            <IngredientDetails 
                currentElementInModal={ currentElementInModal }
            />
        </div>
    );
};

export default Modal;