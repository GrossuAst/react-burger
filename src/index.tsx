import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import './vendor/normalize.css';
import './vendor/fonts/fonts.css';
import './index.css';

import App from './components/app/App';
import reportWebVitals from './reportWebVitals';

import { store } from './services/store.js';
import { rootReducer } from './services/reducers';

// const store = configureStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />  
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
