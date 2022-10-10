import {BASE_URL} from '@/constants';
import axios from 'axios';
// import queryString from 'query-string';
import httpClient from '@/utils/requestApis';

const categoryApis = {
  getCategoryList: () => {
    return axios.get(`${BASE_URL}/home/categories`).then(function(res){
      console.log(res, 'res')
    }).catch(function(err) {
      console.log(err)
    })
  },

  getProductBaseOnCategoryID: (id) => {
    // const queryParams = queryString.stringify(query);
    return httpClient.get(`${BASE_URL}/categories/${id}`);
  },

  // getProductSlider: (id) => {
  //   // const queryParams = queryString.stringify(query);
  //     return httpClient.get(`/categories/1`);
  // },

  // getProducts: () => {
  //   // const queryParams = queryString.stringify(query);
  //     return httpClient.get(`/categories/${id}`);
  // }
}

export default categoryApis;