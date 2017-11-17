import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './App';
// import './styles/styles.css';
import './styles/main.scss';
import { PersistGate } from 'redux-persist/es/integration/react';

// Import Provider from redux and configure store
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';

// Set initialState as {} for now
const { persistor, store } = configureStore({});
render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
