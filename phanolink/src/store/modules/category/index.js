import { BASE_URL } from "@/constants";

import axios from "axios";

const state = {
  categories: [],
};

const getters = {
  categoriesList: (state) => state.categories,
};

const actions = {
  async getCategoryList({ dispatch }) {
    const res = await axios.get(`${BASE_URL}/home/categories`);
    if (res.status === 200) {
      await dispatch("categoryList", res.data.data);
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
