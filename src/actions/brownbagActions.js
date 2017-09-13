import fetch from 'isomorphic-fetch';
import * as actions from './actionTypes';
import fetchUrl from '../config';

export function requestUnpresentedUsers(user) {
  return {
    type: actions.REQUEST_UNPRESENTED_USERS,
    user
  };
}

export function receiveUnprensentedUsersSuccess(user) {
  return {
    type: actions.RECEIVE_UNPRESENTED_USERS_SUCCESS,
    user
  };
}

export function getUnpresentedUsers(user) {
  return fetchUnpresentedUsers(user);
}

export function fetchUnpresentedUsers(users) {
  return dispatch => {
    return fetch(`${fetchUrl}/api/brownbags/not_presented/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': process.env.TOKEN
      }
    })
    .then(response => response.json())
    .then(response => dispatch(receiveUnprensentedUsersSuccess(response)));
  };
}

export function confirmBrownBag(brownBagObj){
  // this function is called when brownbags are done and status is changed to done
  // the brownBagObj should onky have "date", "status" and "id" fields.
  return dispatch => {
    return fetch(`${fetchUrl}/api/brownbags/${brownBagObj.id}/`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': process.env.TOKEN
      },
      credentials: 'include',
      body: JSON.stringify(brownBagObj)
    })
    .then(dispatch({ type: actions.CONFIRM_BROWNBAG_DONE }))
    .catch(dispatch({ type: actions.BROWNBAG_ACTION_ERROR }));
  };
}

export function cancelBrownBag(brownBagObj){
  // this function is called when brownbags are done and status is changed to done
  // the brownBagObj should onky have "date", "status" and "id" fields.
  return dispatch => {
    return fetch(`${fetchUrl}/api/brownbags/${brownBagObj.id}/`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': process.env.TOKEN
      },
      credentials: 'include',
      body: JSON.stringify(brownBagObj)
    })
    .then(dispatch({ type: actions.CONFIRM_BROWNBAG_CANCEL }))
    .catch(dispatch({ type: actions.BROWNBAG_ACTION_ERROR }));
  };
}
export function requestNextPresenters(presenter) {
  return {
    type: actions.BROWNBAG_NEXT_PRESENTER,
    presenter
  };
}

export function receiveNextPresenterSUccess(presenter) {
  return {
    type: actions.BROWNBAG_NEXT_PRESENTER_SUCCESS,
    presenter
  };
}

export function getNextPresenter(presenter) {
  return fetchNextPresenter(presenter);
}

export function fetchNextPresenter(presenter) {
  console.log('check_here', `${fetchUrl}/api/brownbags/next`);
  return dispatch => {
    return fetch(`${fetchUrl}/api/brownbags/next/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': process.env.TOKEN
      }
    })
    .then(response => response.json())
    .then(response => dispatch(receiveNextPresenterSUccess(response)));
  };
}
