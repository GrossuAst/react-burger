import React, { useState, useEffect } from "react";

import { getData } from "../../utils/constants";

import AppHeader from "../app-header/app-header";
import Main from "../main/main";
import ModalOverlay from "../modal-window/modal-overlay/modal-overlay";

function App() {

  const [initialData, setInitialData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentElementInModal, setCurrentElementInModal] = useState(null);

  console.log(currentElementInModal)

  useEffect(() => {
    getData()
      .then((res) => {
        setInitialData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function hanldeCloseModal() {
    setIsModalOpen(false);
    setCurrentElementInModal(null);
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
        /> }

      <ModalOverlay
        isOpen={ isModalOpen }
        hanldeCloseModal={ hanldeCloseModal }

        currentElementInModal={ isModalOpen && currentElementInModal }
        
      />
    </>
  );
};

export default App;
