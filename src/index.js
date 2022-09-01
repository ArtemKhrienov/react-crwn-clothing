import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store/store';

import App from './App';

import './index.scss';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>
);
