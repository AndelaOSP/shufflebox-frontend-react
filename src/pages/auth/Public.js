import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const Public = ({ apiCallState, user, component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (apiCallState.loading) return <div />;
      return !user.loggedIn ? (
        React.createElement(component, { ...props, apiCallState, user })
      ) : (
        <Redirect to="/shuffle/" />
      );
    }}
  />
);

export default Public;
