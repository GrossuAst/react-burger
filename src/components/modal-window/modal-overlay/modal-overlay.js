import React from "react";
import ReactDOM from "react-dom";

import stylesModalOverlay from './modal-overlay.module.css';

import Modal from "../modal/modal";

const modalRoot = document.querySelector('#modal-root');

class ModalOverlay extends React.Component {

    render() {
        const { children, headerText, hanldeCloseModal, handleOverlayClick, name, isOpen, style } = this.props;

        return ReactDOM.createPortal(
            (
                <div 
                    style= { isOpen ? { visibility: 'visible' } : { visibility: 'hidden' } } 
                    className={ `${stylesModalOverlay.container}`}
                    onClick={ handleOverlayClick }
                >
                    <Modal
                        content={ children }
                        name={ name }
                        hanldeCloseModal={ hanldeCloseModal }
                    >
                    </Modal>                    
                </div>
            ),
            modalRoot
        )
    };
};

export default ModalOverlay;
