import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getData } from "../../utils/constants";
import { GET_INITIAL_DATA } from "../../services/actions/burger-ingredients";
import { DEACTIVE_INGREDIENT } from "../../services/actions/current-ingredient";

import Preloader from "../preloader/Preloader";
import AppHeader from "../app-header/app-header";
import Main from "../main/main";
import Modal from "../modal-window/modal/modal";
import IngredientDetails from "../modal-window/ingredient-details/ingredient-details";
import OrderDetails from "../modal-window/order-details/order-details";

function App() {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { ingredients, currentIngredient } = useSelector(store => ({
    ingredients: store.ingredients,
    currentIngredient: store.currentIngredient,
  }));

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
        ingredients.ingredients.length > 0 ? (
          <Main
            handleOpenModal={ handleOpenModal }
          />  
        ) : (
          <Preloader/>
        )
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
