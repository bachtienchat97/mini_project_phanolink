import { BASE_URL } from '../constants';

export const userService = {
  login
}

function login( username, password ) {
  const requestOptions = {
    method: 'POST',
    header: { 'Content-Type': 'application/json' },
    body: JSON.stringify( { username, password } )
  }

  return fetch(BASE_URL, requestOptions)
  .then()
}