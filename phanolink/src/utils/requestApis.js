import axios from 'axios';
import {BASE_URL} from '@/constants';
import queryString from 'query-string';

const httpClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});


export default httpClient;