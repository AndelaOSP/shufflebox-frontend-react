import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import shufflePage from './pages/shuffle/ShufflePage';
import Login from './pages/auth/Login';
import Authenticated from './pages/auth/Authenticated';
import Public from './pages/auth/Public';
import { connect } from 'react-redux';
import { getApiCallState } from './redux/reducers/apiCallReducer';
import { getUser } from './redux/reducers/userReducer';
const App = appProps => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={Login} />
      <Route Public path="/about" component={HomePage} {...appProps} />
      <Route Public path="/faq" component={HomePage} {...appProps} />
      <Route
        Authenticated
        exact
        path="/shuffle/brownbag"
        component={shufflePage}
        {...appProps}
      />
    </Switch>
  </BrowserRouter>
);

function mapStateToProps(state, ownProps) {
  const user = getUser(state);
  const apiCallState = getApiCallState(state);
  return {
    user,
    apiCallState
  };
}
App.propTypes = {
  children: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(App);
