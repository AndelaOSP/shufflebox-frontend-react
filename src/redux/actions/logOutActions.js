import * as actions from '../actions/actionTypes';

function logOutSuccess() {
  return {
    type: actions.LOG_OUT_REQUEST_SUCCESS
  };
}

export default function logOut() {
  return dispatch => {
    localStorage.removeItem('persist:root');
    dispatch(logOutSuccess());
  };
}
