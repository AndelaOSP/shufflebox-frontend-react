import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import Routes from './routes';
// import './styles/styles.css';
import './styles/main.scss';

// Import Provider from redux and configure store
import {Provider} from 'react-redux';
import configureStore from './redux/store/configureStore';

// Set initialState as {} for now
const store = configureStore({});
render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
