import {BASE_URL} from '@/constants';
import httpClient from '@/utils/requestApis';

const productApis = {
  getProductByProductID: (id) => {
    return httpClient.get(`${BASE_URL}/products/${id}`);
  }
}

export default productApis;