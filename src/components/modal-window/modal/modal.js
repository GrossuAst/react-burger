import React from "react";

import stylesModal from './modal.module.css';

import ModalOverlay from "../modal-overlay/modal-overlay";

function Modal({ header, hanldeCloseModal, content, name }) {
    return (
        <div className={ `pt-10 ${stylesModal.container}` }>
            <div className={ stylesModal.header }>
                { name === 'детали ингредиента' && (<p className={ `${stylesModal.headerText}` }>Детали ингредиента</p>) }
                <button
                    className={ `${stylesModal.closeButton}` }
                    onClick={ hanldeCloseModal }
                >
                </button>
            </div>
            
        </div>
    );
};

export default Modal;