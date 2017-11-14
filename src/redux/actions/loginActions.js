import * as actions from './actionTypes';
import jwt_decode from 'jwt-decode';

function loginRequest() {
  return {
    type: actions.LOGIN_REQUEST
  };
}

function logInRequestSuccess(result) {
  return {
    type: actions.LOGIN_REQUEST_SUCCESS,
    payload: result
  };
}

function logInRequestFail(err) {
  return {
    type: actions.LOGIN_REQUEST_FAIL,
    payload: err
  };
}

function getTokenFromURL() {
  const { search } = window.location;
  const splitSearch = search.split('?token=');
  if (splitSearch.length < 2 || !splitSearch[1]) {
    return '';
  }

  return splitSearch[1];
}

export default function logIn() {
  return dispatch => {
    dispatch(loginRequest());
    const token = getTokenFromURL();
    try {
      const { UserInfo } = jwt_decode(token);

      if (UserInfo.email.match('@andela.com')) {
        localStorage.setItem('token', token);
        dispatch(logInRequestSuccess(UserInfo))
      } else {
        dispatch(logInRequestFail('Invalid email'));
      }
    } catch (err) {
      dispatch(logInRequestFail(err));
    }
  }
}