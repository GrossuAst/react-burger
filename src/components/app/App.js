import { escape } from "querystring";
import React, { useState, useEffect } from "react";

import { getData } from "../../utils/constants";

import AppHeader from "../app-header/app-header";
import Main from "../main/main";
import ModalOverlay from "../modal-window/modal-overlay/modal-overlay";

function App() {

  const [initialData, setInitialData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getData()
      .then((res) => {
        setInitialData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // useEffect(() => {
  //   if(isModalOpen) {
  //     document.addEventListener('keypress', handleEscPress());
  //   }
  //   return () => {
  //     document.removeEventListener('keypress', handleEscPress());
  //   }
  // });

  // function handleEscPress(e) {

  // };

  function hanldeCloseModal() {
    setIsModalOpen(false);
  };

  function handleOverlayClick(e) {
    if(e.target.classList.contains('modal-overlay_container__6nar1')) {
      setIsModalOpen(false);
    }
    return
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
        /> }

      <ModalOverlay
        isOpen={ isModalOpen }
        hanldeCloseModal={ hanldeCloseModal }
        handleOverlayClick={ handleOverlayClick }
      />
    </>
  );
};

export default App;
