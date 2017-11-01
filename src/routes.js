import React from "react";
import { Route, Switch } from 'react-router-dom';
import App from "./App";
import AuthPage from "./pages/auth/AuthPage";
import HomePage from "./pages/home/HomePage";
import shufflePage from './pages/shuffle/ShufflePage';
import Login from './components/login';
import jwt_decode from 'jwt-decode';

const getTokenFromURL = () => {
  const {search} = window.location;
  const splitSearch = search.split("?token=");
  if (splitSearch.length < 2 || !splitSearch[1]){
      return "";
  }

  return splitSearch[1];
};

const checkToken = () => {
  const token = this.getTokenFromURL();
  try{
      const {UserInfo} = jwt_decode(token);
      
      if (UserInfo.email.match("@andela.com")){
          localStorage.setItem("token", token);
          this.setState(state => ({isLoggedIn: true}));
      } else {
          this.setState(state => ({isInvalidToken: true}));
      }
  } catch (exception){
      this.setState(state => ({isInvalidToken: true}));
  }
 
};

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
