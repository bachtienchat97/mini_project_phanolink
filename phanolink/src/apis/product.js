import {BASE_URL} from '@/constants';
import axios from 'axios';

const productApis = {
  getProductByProductID: (id) => {
    return axios.get(`${BASE_URL}/products/${id}`);
  }
}

export default productApis;