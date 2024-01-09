import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getData } from "../../utils/constants";
import { GET_INITIAL_DATA } from "../../services/actions/burger-ingredients";

import Preloader from "../preloader/Preloader";
import AppHeader from "../app-header/app-header";
import Main from "../main/main";
import Modal from "../modal-window/modal/modal";
import IngredientDetails from "../modal-window/ingredient-details/ingredient-details";
import OrderDetails from "../modal-window/order-details/order-details";

function App() {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentElementInModal, setCurrentElementInModal] = useState(null);

  const { ingredients, ingredientsInConstructor } = useSelector(store => ({
    ingredients: store.ingredients,
    // ingredientsInConstructor: store.ingredientsInConstructor,
  }));

  console.log(ingredients.ingredients)

  useEffect(() => {
    getData()
      .then((res) => {
        dispatch({
          type: GET_INITIAL_DATA,
          payload: res.data
        });
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  function handleCloseModal() {
    setIsModalOpen(false);
    currentElementInModal && setCurrentElementInModal(null);
  };

  function handleOpenModal() {
    setIsModalOpen(true);
  };

  return (
    <>
      <AppHeader />

      { 
        ingredients.ingredients.length > 0 ? (
          <Main
            handleOpenModal={ handleOpenModal }
            setCurrentElementInModal={ setCurrentElementInModal }
          />  
        ) : (
          <Preloader/>
        )
      }

      <Modal
        isModalOpen={ isModalOpen }
        handleCloseModal={ handleCloseModal }
        currentElementInModal={ currentElementInModal }
      >
        {
          currentElementInModal ? <IngredientDetails currentElementInModal={ currentElementInModal } /> : <OrderDetails />
        }
      </Modal>

    </>
  );
};

export default App;
