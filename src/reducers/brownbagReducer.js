import * as types from '../actions/actionTypes';

export function brownbagReducer( state , action) {
  switch (action.type) {
    case types.BROWNBAG_NEXT_INLINE:
      return action.nextPresenter;

    default:
      return state;  
  }
}