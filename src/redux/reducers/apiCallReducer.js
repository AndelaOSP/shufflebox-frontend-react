import * as actions from '../actions/actionTypes';
import initialState from './initialState';

export function getApiCallState(state) {
  return state.apiCallState;
}

export default function reducer(
  state = initialState.entities.api_call,
  action = {},
) {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      return {
        error: false,
        loading: true,
        success: false
      };
    case actions.LOGIN_REQUEST_SUCCESS:
      return {
        error: false,
        loading: false,
        success: true
      };
    case actions.LOGIN_REQUEST_FAIL:
      return {
        error: true,
        loading: false,
        success: false
      };

    default:
      return state;
  }
}
