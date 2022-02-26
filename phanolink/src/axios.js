import axios from 'axios'

axios.defaults.baseURL = 'https://boiling-brook-88386.herokuapp.com/api/';

axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token');