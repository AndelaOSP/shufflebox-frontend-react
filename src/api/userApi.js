import { CALL_API } from 'redux-api-middleware';

export function fetchUnpresentedUsers(users) {
  return {
    [CALL_API]: {
      endpoint: 'https://shufflebox-api.herokuapp.com/api/users/',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': process.env.TOKEN
      },
      types: ['REQUEST', 'SUCCESS', 'FAILURE']
    }
  };
}
