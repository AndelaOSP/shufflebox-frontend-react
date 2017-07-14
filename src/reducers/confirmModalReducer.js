import * as types from '../actions/actionTypes';
import initialState from './initialState';

export function confirmModalReducer( state=initialState.confirm_modal, action) {
  switch (action.type) {
    case types.SHOW_CONFIRM_MODAL_SUCCESS:
      return Object.assign(
        {}, state, {
          message: action.message,
          isShowing: true,
          id: action.id
        });

    case types.HIDE_CONFIRM_MODAL_SUCCESS:
      return Object.assign(
        {}, state, {
          message: '',
          isShowing: false,
          id: 0
        });  
  
    default:
      return state;  
  }
}
