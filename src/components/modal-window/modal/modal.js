import { useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import stylesModal from './modal.module.css';
import ModalOverlay from "../modal-overlay/modal-overlay";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const modalRoot = document.querySelector('#modal-root');

function Modal({
    children,
    isModalOpen,
    handleCloseModal,
    currentIngredient,
    ingredientInModal,
    getIngredientById
}) {    
    const navigate = useNavigate();
    const { id } = useParams();

    const { ingredients } = useSelector(store => ({
        ingredients: store.ingredients.ingredients
    }));

    useEffect(() => {
        if(id && ingredients) {
            getIngredientById(id);    
        }
    }, [ingredients]);

    function handleEscPress(e) {
        if(e.key === 'Escape') {
            handleCloseModal();
            navigate('/');
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
                            { currentIngredient.currentIngredient ? (
                                <p className={ `pl-10 pt-1 ${stylesModal.headerText}` }>Детали ингредиента</p>
                            )   : ingredientInModal && (
                                <p className={ `pl-10 pt-1 ${stylesModal.headerText}` }>Детали ингредиента</p>
                            )
                            }
                            
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
    handleCloseModal: PropTypes.func.isRequired,
    currentIngredient: PropTypes.oneOfType([
        PropTypes.ingredientStructure,
        PropTypes.oneOf([null])
    ])
};

export default Modal;