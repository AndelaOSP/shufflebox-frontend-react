import fetch from 'isomorphic-fetch';
import * as actions from './actionTypes';
import fetchUrl from '../../config';


var brownbags = new schema.Entity('brownbags');

export function requestPotentialUsers(user) {
  return {
    type: actions.REQUEST_POTENTIAL_USERS,
    user
  };
}

export function fetchPotentialCandidatesSuccess(users) {
  return {
    type: actions.RECEIVE_POTENTIAL_USERS_SUCCESS,
    users
  };
}

export function getPotentialCandidates(user) {
  return fetchPotentialCandidates(user);
}

export function fetchPotentialCandidates(users) {
  const potentialCandidates = new schema.Entity("potential_presenters")
  const potentialCandidatesSchema = [ nextPresenters ]

  return dispatch => {
    return fetch(`${fetchUrl}/api/brownbags/not_presented/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'JWT '+ process.env.TOKEN
      }
    })
    .then(response => response.json())
    .then(response => {
      // normalize json data from the API response
      let normalizedData = normalize(response, potentialCandidatesSchema)['entities'];
      return dispatch(
        fetchPotentialCandidatesSuccess(normalizedData.potential_presenters)
      )

    });
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
        'Authorization': 'JWT ' + process.env.TOKEN
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
        'Authorization': 'JWT' + process.env.TOKEN
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

export function receiveNextPresenterSuccess(presenter) {
  return {
    type: actions.BROWNBAG_NEXT_PRESENTER_SUCCESS,
    presenter
  };
}

export function getNextPresenter(presenter) {
  return fetchNextPresenter(presenter);
}

export function fetchNextPresenter(presenter) {
  const nextPresenters = new schema.Entity("presenters")
  const nextPresentersSchema = [ nextPresenters ]

  return dispatch => {
    return fetch(`${fetchUrl}/api/brownbags/next/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'JWT ' + process.env.TOKEN
      }
    })
    .then(response => response.json())
    .then(response => {
      let normalizedData = normalize(response, nextPresentersSchema)['entities'];
      return dispatch(receiveNextPresenterSuccess(normalizedData['presenters']))
    });
  };
}
