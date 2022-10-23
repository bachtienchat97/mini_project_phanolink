// import categoryApis from '@/apis';
import {BASE_URL} from '@/constants';

import axios from 'axios';


const state = {
  products: [],
  productListByID: [],
  productDetailByID: {}
};

const getters = {
  productList: (state) => state.products,
  productListByID: (state) => state.productListByID,
  productDetailByID: (state) => state.productDetailByID
};

const actions = {

  async getProductList({ dispatch }) {
    const res = await axios.get(`${BASE_URL}/categories/1`);
    if (res.status === 200) {
      await dispatch("productList", res.data.data);
    }
  },

  productList({ commit }, payload) {
    commit("PRODUCT_LIST", payload);
  },

  // getProductListByID ({ commit }, payload) {
  //   commit("PRODUCT_BY_ID", payload);
  // },

  getProductDetailByID ({ commit }, payload) {
    commit("PRODUCT_DETAIL_BY_ID",payload)
  }
};

const mutations = {
  PRODUCT_LIST: (state, value) => (state.products = value),
  // PRODUCT_BY_ID: (state, value) => (state.productListByID = value),
  PRODUCT_DETAIL_BY_ID: (state, value) => (state.productDetailByID = value)
};

export const product = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}