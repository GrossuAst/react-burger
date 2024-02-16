import { Routes, Route } from 'react-router-dom';

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getInitialData } from "../../services/actions/burger-ingredients";
import { clearModalData } from "../../services/actions/current-ingredient";

import Register from '../../pages/register/register';
import Login from '../../pages/login/login';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

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
    feedFailed: store.ingredients.feedFailed,
  }));

  useEffect(() => {
    dispatch(getInitialData());
  }, []);

  function handleCloseModal() {
    setIsModalOpen(false);
    dispatch(clearModalData());
  };

  function handleOpenModal() {
    setIsModalOpen(true);
  };

  return (
    <>
      <AppHeader />

      <Routes>

        <Route path='/' 
          element={
            feedRequest ? <Preloader /> : feedFailed ? <ErrorMessage /> :
            ingredients.ingredients.length > 0 &&
            <Main
              handleOpenModal={ handleOpenModal }
            />
          } 
        />

        <Route path='/login'
          element={ <Login /> }
        />

        <Route path='/register'
          element={ <Register /> }
        />

        <Route path='/forgot-password'
          // element={ <ForgotPassword /> }
        />

        <Route path='/reset-password'
          // element={ <ResetPassword /> }
        />

        <Route path='/profile'
          // element={ <Profile /> }
        />

        <Route path='/ingredients/:id'
          // element={ <IngredientPage /> }
        />

        <Route path='*'
          element={ <NotFoundPage /> }
        />

      </Routes>

      <Modal
        isModalOpen={ isModalOpen }
        handleCloseModal={ handleCloseModal }
        currentIngredient={ currentIngredient }
      >
        {
          currentIngredient.currentIngredient ? <IngredientDetails /> : <OrderDetails />
        }
      </Modal>

    </>
  );
};

export default App;
