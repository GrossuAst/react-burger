import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getInitialData } from "../../services/actions/burger-ingredients";
import { DEACTIVE_INGREDIENT } from "../../services/actions/current-ingredient";

import Preloader from "../ui/preloader/Preloader";
import AppHeader from "../app-header/app-header";
import Main from "../main/main";
import Modal from "../modal-window/modal/modal";
import IngredientDetails from "../modal-window/ingredient-details/ingredient-details";
import OrderDetails from "../modal-window/order-details/order-details";
import ErrorMessage from "../ui/error-message/error-message";

function App() {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { ingredients, currentIngredient, feedRequest, feedFailed } = useSelector(store => ({
    ingredients: store.ingredients,
    currentIngredient: store.currentIngredient,
    feedRequest: store.ingredients.feedRequest,
    feedFailed: store.ingredients.feedFailed
  }));

  console.log(ingredients)

  useEffect(() => {
    dispatch(getInitialData());
  }, []);

  function handleCloseModal() {
    setIsModalOpen(false);
    dispatch({
      type: DEACTIVE_INGREDIENT
    });
  };

  function handleOpenModal() {
    setIsModalOpen(true);
  };

  return (
    <>
      <AppHeader />

      { 
        feedRequest ? <Preloader /> : feedFailed ? <ErrorMessage /> :
        ingredients.ingredients.length > 0 &&
        <Main
          handleOpenModal={ handleOpenModal }
        />
      }

      <Modal
        isModalOpen={ isModalOpen }
        handleCloseModal={ handleCloseModal }
      >
        {
          currentIngredient.currentIngredient ? <IngredientDetails /> : <OrderDetails />
        }
      </Modal>

    </>
  );
};

export default App;
