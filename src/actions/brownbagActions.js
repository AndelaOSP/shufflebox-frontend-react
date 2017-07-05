import * as actions from './actionTypes';

export function getBrownbagNextPresenter(nextPresenter){
  // The nextPresenter is an object with id, name, date, email, avatar and status
  return {
    type: actions.BROWNBAG_NEXT_INLINE,
    nextPresenter: nextPresenter
  };
}
