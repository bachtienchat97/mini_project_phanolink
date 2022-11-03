import { TOKEN } from "@/constants";
import Cookies from 'js-cookie';

export function getToken() {
  return Cookies.get(TOKEN);
}

export function setToken(token) {
  return Cookies.set(TOKEN, token, { expires: 1 });
}

export function removeToken() {
  return Cookies.remove(TOKEN);
}