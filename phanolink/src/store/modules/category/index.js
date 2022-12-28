import { BASE_URL_GOKISOFT } from "@/constants";

import httpClient from "@/utils/requestApis";

const state = {
  categories: [],
  isLoadCategory: false
};

const getters = {
  categoriesList: (state) => state.categories,
  isLoadCategory: (state) => state.isLoadCategory,
};

const actions = {
  async getCategoryList({ dispatch, state }) {
    state.isLoadCategory = true

    const res = await httpClient.get(`${BASE_URL_GOKISOFT}/home/categories`);
    if (res.status === 200) {
        dispatch("categoryList", res.data.data);
        state.isLoadCategory = false;
    }
  },

  categoryList({ commit }, payload) {
    commit("CATEGORY_LIST", payload);
  },
};

const mutations = {
  CATEGORY_LIST: (state, value) => (state.categories =  value),
};

export const category = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
