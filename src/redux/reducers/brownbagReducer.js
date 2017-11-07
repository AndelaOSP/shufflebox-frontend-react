import * as types from '../actions/actionTypes';
import initialState from './initialState';

export function brownbagReducer(state = initialState.entities.brownbag.next_presenter, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export function skippedBrownBagReducer(state = initialState.entities.brownbag.skipped, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export function previousCandidatesReducer(state = initialState.entities.brownbag.previous_presenters, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export function ongoingCandidatesReducer(state = initialState.entities.brownbag.ongoing, action) {
  switch (action.type) {
    case types.REQUEST_POTENTIAL_USERS:
      return Object.assign({}, state, { isloading: true });

    case types.RECEIVE_POTENTIAL_USERS_SUCCESS:
      return Object.assign({}, state, {
        ...action.users,
        isloading: false
      });

    default:
      return state;

  }
}

export function nextBrownbagReducer(state = initialState.entities.brownbag.next_presenters, action) {
  switch (action.type) {
    case "BROWNBAG_NEXT_PRESENTER_SUCCESS":
      return Object.assign({}, state, action.presenter);

    default:
      return state;
  }
}
