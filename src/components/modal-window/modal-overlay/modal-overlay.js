import React from "react";
import PropTypes from 'prop-types';

import stylesModalOverlay from './modal-overlay.module.css';

function ModalOverlay({ children, isModalOpen, handleCloseModal }) {

    console.log(children)

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

ModalOverlay.propTypes = {
    children: PropTypes.node.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
    handleCloseModal: PropTypes.func.isRequired
};

export default ModalOverlay;
