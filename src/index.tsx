import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './vendor/normalize.css';
import './vendor/fonts/fonts.css';
import './index.css';

import App from './components/app/app';
import reportWebVitals from './reportWebVitals';

import { store } from './services/store.js';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={ store }>
        <App />  
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
