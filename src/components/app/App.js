import { useState, useEffect } from "react";

import { getData } from "../../utils/constants";

import AppHeader from "../app-header/app-header";
import Main from "../main/main";
import Modal from "../modal-window/modal/modal";
import IngredientDetails from "../modal-window/ingredient-details/ingredient-details";
import OrderDetails from "../modal-window/order-details/order-details";

function App() {

  const [initialData, setInitialData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentElementInModal, setCurrentElementInModal] = useState(null);

  useEffect(() => {
    getData()
      .then((res) => {
        setInitialData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
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

      { initialData && 
        <Main
          data={ initialData }
          handleOpenModal={ handleOpenModal }
          setCurrentElementInModal={ setCurrentElementInModal }
        /> 
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
