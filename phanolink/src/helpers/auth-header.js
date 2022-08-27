import { KEY_LOCAL_STORAGE } from "../constants"

export function authHeader() {
  const user = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE))

  if(user && user.token) {
    return { 'Authorization': 'Bearer ' + user.token };
  } else{
    return {}
  }
}