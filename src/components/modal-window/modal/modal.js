import { useEffect } from "react";
import { useSelector } from "react-redux";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

import stylesModal from './modal.module.css';
import { ingredientStructure } from "../../../utils/prop-types";

import ModalOverlay from "../modal-overlay/modal-overlay";

const modalRoot = document.querySelector('#modal-root');

function Modal({
    children,
    isModalOpen,
    handleCloseModal,
}) {
    const { currentIngredient } = useSelector(strore => ({
        currentIngredient: strore.currentIngredient,
    }));

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
                            { currentIngredient.currentIngredient && (
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

Modal.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    currentElementInModal: PropTypes.oneOfType([
        PropTypes.oneOf([null]),
        ingredientStructure
    ]),
    handleCloseModal: PropTypes.func.isRequired
};

export default Modal;