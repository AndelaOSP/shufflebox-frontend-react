import React from "react";
import { Route, Switch } from 'react-router-dom';
import App from "./App";
import AuthPage from "./pages/auth/AuthPage";
import HomePage from "./pages/home/HomePage";
import shufflePage from './pages/shuffle/ShufflePage';
import Login from './components/login';

const Routes = () => (
  <App>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/about" component={HomePage} />
      <Route exact path="/faq" component={HomePage} />
      <Route path="/auth/login/" component={AuthPage} />
      <Route path="/shuffle" component={shufflePage} />
  </Switch>
  </App>
 
);

export default  Routes;
