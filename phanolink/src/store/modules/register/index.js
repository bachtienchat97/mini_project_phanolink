// import axios from 'axios';

// import { KEY_LOCAL_STORAGE } from "@/constants";   
// import { removeItem } from "@/utils/localStorage";

const state = {
  userRegister: [],
};

const getters = {
};

const actions = {
 register() {
    context.commit('USER_REGISTER')
 }
};

const mutations = {
};

export const account = {
  state,
  getters,
  actions,
  mutations
}