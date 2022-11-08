import { BASE_URL } from "@/constants";

import httpClient from "@/utils/requestApis";

const state = {
  products: [],
  productListByID: [],
  productDetailByID: {},
};

const getters = {
  productList: (state) => state.products,
  productListByID: (state) => state.productListByID,
  productDetailByID: (state) => state.productDetailByID,
};

const mutations = {
  PRODUCT_LIST_HOME: (state, value) => (state.products = value),
  PRODUCT_DETAIL_BY_ID: (state, value) => (state.productDetailByID = value),
  PRODUCT_BY_ID: (state, value) => (state.productListByID = value),
};

const actions = {
  async getProductListByID({ commit }, payload) {
    await commit("PRODUCT_BY_ID", payload);
  },

  async getProductListHome({ dispatch }) {
    const res = await httpClient.get(`${BASE_URL}/categories/1`);
    if (res.status === 200) {
      await dispatch("productListHome", res.data.data);
    }
  },

  productListHome({ commit }, payload) {
    commit("PRODUCT_LIST_HOME", payload);
  },

  getProductDetailByID({ commit }, payload) {
    commit("PRODUCT_DETAIL_BY_ID", payload);
  },

};

export const product = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
