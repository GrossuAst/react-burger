import { Routes, Route } from 'react-router-dom';

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getInitialData } from "../../services/actions/burger-ingredients";
import { clearModalData } from "../../services/actions/current-ingredient";

import Home from '../../pages/home/home';
import Register from '../../pages/register/register';
import Login from '../../pages/login/login';
import Profile from '../../pages/profile/profile';
import OrdersList from '../../pages/orders-history/orders-list';
import ForgotPassword from '../../pages/forgot-password/forgot-password';
import ResetPassword from '../../pages/reset-password/reset-password';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

import AppHeader from "../app-header/app-header";
import Modal from "../modal-window/modal/modal";
import IngredientDetails from "../modal-window/ingredient-details/ingredient-details";
import OrderDetails from "../modal-window/order-details/order-details";

function App() {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { currentIngredient } = useSelector(store => ({
    currentIngredient: store.currentIngredient,
  }));

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
          element={ <Home handleOpenModal={ handleOpenModal } /> }
        />

        <Route path='/login'
          element={ <Login /> }
        />

        <Route path='/register'
          element={ <Register /> }
        />

        <Route path='/forgot-password'
          element={ <ForgotPassword /> }
        />

        <Route path='/reset-password'
          element={ <ResetPassword /> }
        />

        <Route path='/profile'
          element={ <Profile /> }
        />

        <Route path='/profile/orders'
          element={ <OrdersList /> }
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
