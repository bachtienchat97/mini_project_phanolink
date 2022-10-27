import { KEY_LOCAL_STORAGE } from '@/constants';

export function removeStorage() {
  return localStorage.removeItem(KEY_LOCAL_STORAGE);
}

export function setStorage(token) {
  return localStorage.setItem(KEY_LOCAL_STORAGE, token);
}

export function getStorage() {
  return localStorage.getItem(KEY_LOCAL_STORAGE)
}

export function getStorageParse() {
  return JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE));
}