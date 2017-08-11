import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/App";
import AuthPage from "./components/auth/AuthPage";
import LandingPage from "./components/welcome/LandingPage";
import HomePage from "./components/home/HomePage";
import Landing from "./components/welcome/Landing";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Landing} />
    <Route path="/auth/login/" component={AuthPage} />
    <Route path="/home" component={HomePage} />
    <Route path="/landing" component={LandingPage} />
  </Route>
);
