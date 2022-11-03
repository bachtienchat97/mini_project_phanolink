import axios from "axios";
import { BASE_URL } from "@/constants";
import queryString from "query-string";
import Nprogress from "nprogress";
import { getToken } from "@/utils/tokenCookies";
// import ProgressBar from "@/views/components/ProgressBar";

// axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token');

const httpClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});


httpClient.interceptors.request.use(
  function (config) {
    Nprogress.start();
    // Do something before request is sent
    console.log(config, "config");
    const token = getToken();
    console.log(token, "token");

    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    Nprogress.done();
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  function (response) {
    console.log(response, "res");
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    Nprogress.done();
    
    return response;
  },
  function (error) {
    Nprogress.done();
    console.log(error, "error");
    
    return Promise.reject(error.response.data);
  }
);
export default httpClient;
