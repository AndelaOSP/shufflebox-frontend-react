import * as actions from '../actions/actionTypes';
import initialState from './initialState';

// Selector
export function getUser(state) {
  const user = state ? state.user : null;
  return user;
}

export default function reducer(
  state = initialState.entities.user,
  action = {},
) {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      return {
        ...state,
        validationErrors: ''
      };
    case actions.LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
        loggedIn: true,
        validationErrors: ''
      };
    case actions.LOGIN_REQUEST_FAIL:
      return {
        ...state,
        validationErrors: action.payload
      };
    case actions.LOG_OUT_REQUEST_SUCCESS:
      return {
        ...state,
        userInfo: {},
        loggedIn: false
      };
    default:
      return state;
  }
}
