import {BASE_URL} from '@/constants';
import httpClient from '@/utils/requestApis';

const productApis = {
  getProductByProductID: (id) => {
    return httpClient.get(`${BASE_URL}/products/${id}`);
  },

  getAllProductByCategories: (id) => {
    return httpClient.get(`${BASE_URL}/categories/${id}`);
  }
}

export default productApis;