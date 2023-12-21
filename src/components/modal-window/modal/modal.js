import { useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

import stylesModal from './modal.module.css';

import ModalOverlay from "../modal-overlay/modal-overlay";

const modalRoot = document.querySelector('#modal-root');

function Modal({
    children,
    isModalOpen,
    currentElementInModal,
    handleCloseModal,
}) {

    function handleEscPress(e) {
        if(e.key === 'Escape') {
            handleCloseModal();
        };
        return
    };
    
    useEffect(() => {
        document.addEventListener('keydown', handleEscPress);
        return () => {
            document.removeEventListener('keydown', handleEscPress);
        } 
    }, []);

    return ReactDOM.createPortal(
        (
            <>
                <ModalOverlay 
                    isModalOpen={ isModalOpen }
                    handleCloseModal={ handleCloseModal }
                >
                    <div className={ `pt-10 ${stylesModal.container}` }>
                        <div className={ `pr-10 ${stylesModal.header}` }>
                            { currentElementInModal && (
                                <p className={ `pl-10 pt-1 ${stylesModal.headerText}` }>Детали ингредиента</p>
                            ) }
                            <button
                                className={ `${stylesModal.closeButton}` }
                                onClick={ handleCloseModal }
                            >
                            </button>
                        </div>

                        { children }

                    </div>
                </ModalOverlay>
            </>
        ), modalRoot
    );
};

const objectStructure = PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    __v: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired
});

Modal.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    currentElementInModal: PropTypes.oneOfType([
        PropTypes.oneOf([null]),
        objectStructure
    ]),
    handleCloseModal: PropTypes.func.isRequired
};

export default Modal;