import React from "react";
import ReactDOM from "react-dom";

import stylesModalOverlay from './modal-overlay.module.css';

import Modal from "../modal/modal";

const modalRoot = document.querySelector('#modal-root');

class ModalOverlay extends React.Component {

    handleEscPress = e => {
        if(e.key === 'Escape') {
            this.props.hanldeCloseModal();
        }   
        return
    };

    handleOverlayClick = (e) => {
        if(e.target.classList.contains('modal-overlay_container__6nar1')) {
            this.props.hanldeCloseModal();
        }
        return
    };

    componentDidMount() {
        document.addEventListener('keydown', this.handleEscPress);
        document.addEventListener('click', this.handleOverlayClick);
    };

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleEscPress);
        document.removeEventListener('click', this.handleOverlayClick);
    };

    render() {
        const { hanldeCloseModal, handleOverlayClick, isOpen, currentElementInModal } = this.props;

        return ReactDOM.createPortal(
            (
                <div 
                    style= { isOpen ? { visibility: 'visible' } : { visibility: 'hidden' } } 
                    className={ `${stylesModalOverlay.container}`}
                    onClick={ handleOverlayClick }
                >
                    <Modal
                        hanldeCloseModal={ hanldeCloseModal }

                        currentElementInModal={ currentElementInModal }
                    >
                    </Modal>                    
                </div>
            ),
            modalRoot
        )
    };
};

export default ModalOverlay;
