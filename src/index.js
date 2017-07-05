import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css';

// Import Provider from redux and configure store
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

// Set initialState as {} for now
const store = configureStore({});
render(
  <Provider store = {store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
