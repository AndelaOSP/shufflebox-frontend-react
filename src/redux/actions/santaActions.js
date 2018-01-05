import fetch from 'isomorphic-fetch';
import * as actions from './actionTypes';
import fetchUrl from '../../config';

export function requestSantas(santas) {
  return {
    type: actions.REQUEST_SANTAS,
    santas
  };
}

export function requestSanta(santa) {
    return {
      type: actions.REQUEST_SANTA,
      santa
    };
  }

export function fetchSantas() {
  return dispatch => {
    return fetch(`${fetchUrl}/api/santas/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'JWT '+ process.env.TOKEN
      }
    })
    .then(response => response.json())
    .then(response => {
        return response;
    })
    .then(santas => dispatch(requestSantas(santas)));
  };
}

export function fetchSanta(user){
    return dispatch => {
        return fetch(`${fetchUrl}/api/giftee/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'JWT '+ process.env.TOKEN
            }
        })
        .then(response => response.json())
        .then(data => {
            return data;

        })
        .then(santa => dispatch(requestSanta(santa)));
    };
}

