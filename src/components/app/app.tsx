import { Routes, Route, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { clearModalData } from "../../services/current-ingredient/action";
import { checkUserAuth } from '../../services/login/action';
import { getInitialData } from '../../services/burger-ingredients/action';

import Home from '../../pages/home/home';
import Register from '../../pages/register/register';
import Login from '../../pages/login/login';
import Profile from '../../pages/profile/profile';
import Orders from '../../pages/orders/orders';
import ForgotPassword from '../../pages/forgot-password/forgot-password';
import ResetPassword from '../../pages/reset-password/reset-password';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import IngredientPage from '../../pages/ingredient-page/ingredient-page';

import ProtectedRoute from '../protected-route/protected-route';
import AppHeader from "../app-header/app-header";
import Modal from "../modal-window/modal/modal";
import IngredientDetails from "../modal-window/ingredient-details/ingredient-details";
import OrderDetails from "../modal-window/order-details/order-details";

import { IIngredient } from '../../types/types';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ingredientInModal, setIngredientInModal] = useState(null);

  const { currentIngredient, ingredients } = useSelector((store: any) => ({
    currentIngredient: store.currentIngredient,
    ingredients: store.ingredients.ingredients
  }), shallowEqual);

  useEffect(() => {
    if(ingredients.length === 0) {
        dispatch(getInitialData() as any);
    };
  }, []);

  function getIngredientById(id: string): void {
    if(ingredients) {
      const element = ingredients.find((item: IIngredient) => item._id === id);
      setIngredientInModal(element);
      element && state?.backgroundLocation && setIsModalOpen(true);
    }
  };

  useEffect(() => {
    dispatch(checkUserAuth() as any);
  }, []);

  function handleCloseModal() {
    setIsModalOpen(false);
    dispatch(clearModalData());
    ingredientInModal && setIngredientInModal(null);
    navigate('/');
  };

  function handleOpenModal() {
    setIsModalOpen(true);
  };

  return (
    <>
      <AppHeader />

      <Routes location={ state?.backgroundLocation || location } >

        <Route path='/'
          element={ <Home handleOpenModal={ handleOpenModal } /> }
        />

        <Route path='/ingredients/:id' element={ <IngredientPage getIngredientById={ getIngredientById }/> } />

        <Route path='/login'
          element={ <ProtectedRoute onlyUnAuth={ true } component={ <Login /> } /> }
        />

        <Route path='/register'
          element={ <ProtectedRoute onlyUnAuth={ true } component={ <Register /> } /> } 
        />

        <Route path='/forgot-password'
          element={ <ProtectedRoute onlyUnAuth={ true } component={ <ForgotPassword /> } /> }
        />

        <Route path='/reset-password'
          element={ <ProtectedRoute onlyUnAuth={ true } component={ <ResetPassword /> } /> }
        />

        <Route path='/profile' element={ <ProtectedRoute onlyUnAuth={ false } component={ <Profile /> } /> } >
          <Route path='orders' element={ <Orders /> } />
        </Route>

        <Route path='*'
          element={ <NotFoundPage /> }
        />

      </Routes>

      <Modal
        isModalOpen={ isModalOpen }
        handleCloseModal={ handleCloseModal }
      >
        {
          !currentIngredient.currentIngredient && !ingredientInModal && <OrderDetails />
        }
      </Modal>

      {state?.backgroundLocation && (
        <Routes>
          <Route path='/ingredients/:id'
            element={ 
              <Modal isModalOpen={ isModalOpen } handleCloseModal={ handleCloseModal } >
                <IngredientDetails getIngredientById={ getIngredientById } ingredientInModal={ ingredientInModal } />
              </Modal>
            }
          />
        </Routes>
      )}
      
    </>
  );
};

export default App;
