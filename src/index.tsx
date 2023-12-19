import React from 'react';
import ReactDOM from 'react-dom/client';

import './vendor/normalize.css';
import './vendor/fonts/fonts.css';
import './index.css';

import App from './components/app/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
