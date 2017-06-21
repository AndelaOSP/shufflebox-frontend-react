import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import AuthPage from './components/auth/AuthPage';
import HomePage from './components/home/HomePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={AuthPage} />
    <Route path="/auth/login/" component={AuthPage} />
    <Route path="/home" component={HomePage} />
  </Route>
);
