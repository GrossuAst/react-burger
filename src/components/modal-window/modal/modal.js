import { useEffect } from "react";
import ReactDOM from "react-dom";

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

export default Modal;