import React, { ReactNode } from "react";

import stylesModalOverlay from './modal-overlay.module.css';

interface IModalOverlayProps {
    children: ReactNode;
    isModalOpen: boolean;
    handleCloseModal: () => void;
};

const ModalOverlay = ({ children, isModalOpen, handleCloseModal }: IModalOverlayProps) => {

    const handleOverlayClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
        const overlayClass = stylesModalOverlay.overlay;
        const target = e.target as HTMLElement;
        if (target.classList.contains(overlayClass)) {
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
