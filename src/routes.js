import React from "react";
import { Route, Switch } from 'react-router-dom';
import App from "./App";
import AuthPage from "./pages/auth/AuthPage";
import HomePage from "./pages/home/HomePage";
import shufflePage from './pages/shuffle/ShufflePage';
import Login from './components/login';
import jwt_decode from 'jwt-decode';


function loggedIn() {
  let token = localStorage.getItem("bucket-token");
  if(token) {
    return true;
  } else {
    return false;
  }
}

function requireAuth(replace){
    if(!loggedIn()){
        replace({
            pathname: 'auth/login'
        });
    }
}



const Routes = () => (
  <App>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/about" component={HomePage} />
      <Route exact path="/faq" component={HomePage} />
      <Route path="/auth/login/" component={AuthPage} />
      <Route path="/shuffle" component={shufflePage} onEnter={requireAuth}/>
  </Switch>
  </App>
 
);

export default  Routes;
