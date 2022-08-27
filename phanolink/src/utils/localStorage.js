import { KEY_LOCAL_STORAGE } from '../constants';

export function removeToken() {
  return localStorage.removeItem(KEY_LOCAL_STORAGE);
}

export function setToken(token) {
  return localStorage.setItem(KEY_LOCAL_STORAGE, token);
}

export function getToken() {
  return localStorage.getItem(KEY_LOCAL_STORAGE)
}

export function getTokenParsed() {
  return JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE));
}