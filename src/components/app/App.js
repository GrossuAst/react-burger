import React from 'react';

import AppHeader from '../app-header/app-header';
import Main from '../main/main';

import { apiConfig } from '../../utils/constants';

function App() {

  // function getData() {
  //   return fetch(apiConfig.url, {
  //     method: 'GET',
  //     headers: apiConfig.headers,
  //   })
  //     .then((res) => {
  //       if(res.ok) {
  //         return res.json();
  //       }
  //       return Promise.reject(`Ошибка ${res.status}`);
  //     })
  // }

  // React.useEffect(() => {
  //   getData()
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // }, []);

  return (
    <>
      <AppHeader />
      <Main />
    </>
  );
}

export default App;
