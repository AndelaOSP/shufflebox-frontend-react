import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css';
import "./styles/main.scss";

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);
