import React from "react";

import stylesModalOverlay from './modal-overlay.module.css';

function ModalOverlay({ children, isModalOpen, handleCloseModal }) {

    function handleOverlayClick(e) {
        const overlayClass = stylesModalOverlay.overlay;
        if (e.target.classList.contains(overlayClass)) {
            handleCloseModal();
        }
    };
    
    return (
        <div 
            className={ stylesModalOverlay.overlay } style={ isModalOpen ? { visibility: 'visible' } : { visibility: 'hidden' } }
            onClick={ handleOverlayClick }
        >
            { children }
        </div>
    )
};

export default ModalOverlay;
