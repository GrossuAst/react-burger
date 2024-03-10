import { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";
import stylesModal from './modal.module.css';
import ModalOverlay from "../modal-overlay/modal-overlay";

const modalRoot = document.querySelector('#modal-root');

interface IModalProps {
    children: ReactNode;
    isModalOpen: boolean;
    handleCloseModal: () => void;
};

function Modal({ children, isModalOpen, handleCloseModal}: IModalProps) {    

    function handleEscPress(e: KeyboardEvent) {
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

    return modalRoot ? ReactDOM.createPortal(
        (
            <>
                <ModalOverlay 
                    isModalOpen={ isModalOpen }
                    handleCloseModal={ handleCloseModal }
                >
                    <div className={ `pt-10 ${stylesModal.container}` }>
                        <div className={ `pr-10 ${stylesModal.header}` }>
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
    ) : null;
};

export default Modal;