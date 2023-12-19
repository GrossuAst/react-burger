import React, { useState, useEffect } from "react";

import { getData } from "../../utils/constants";

import AppHeader from "../app-header/app-header";
import Main from "../main/main";

function App() {

  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    getData()
      .then((res) => {
        setInitialData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <AppHeader />
      { initialData && <Main data={ initialData } /> }
    </>
  );
};

export default App;
