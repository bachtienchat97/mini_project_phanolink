import { BASE_URL } from "@/constants";

import httpClient from "@/utils/requestApis";
import { productApis } from "@/apis";

const state = {
  productsListHome: [],
  productListByID: [],
  productDetailByID: {},
  allProducts: [],
};

const getters = {
  productList: (state) => state.productsListHome,
  productListByID: (state) => state.productListByID,
  productDetailByID: (state) => state.productDetailByID,
  allProductByCategories: (state) => state.allProducts,
};

const mutations = {
  PRODUCT_LIST_HOME: (state, value) => (state.productsListHome = value),
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

  async getAllProductByCategory({ state }) {
    for (let index = 1; index < 7; index++) {
      
      if (index >= 1 && index <= 7) {
        if (state.allProducts.length <= 7) {
          const res = await productApis.getAllProductByCategories(index);
          if (res.status === 200) {
            await state.allProducts.push(res.data.data);
          } else {
            console.log("false");
          }
        }
      }
    }
  },
};

export const product = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
