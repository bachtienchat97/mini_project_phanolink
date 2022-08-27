// import axios from 'axios';

// import { KEY_LOCAL_STORAGE } from "@/constants";   
// import { removeItem } from "@/utils/localStorage";

const state = {
   user: [],
   localUser: [],
   error: null
};

const getters = {
   allUser: (state) => state.user,
};

const actions = {
   // userLogin({commit}) {
   //    let userName = removeItem();
   //    commit('GET_KEY_USER', userName)
   // },

   userLogin({ commit }, userInfo) {
      commit('USER_INFO', userInfo);
   },

   logoutUser({ commit }, payload) {
      // await removeToken(KEY_LOCAL_STORAGE);
      commit('LOGOUT_USER', payload)

   }
};

const mutations = {
   USER_INFO: (state, value) => (state.user = value),
   // GET_KEY_USER: (state, value) => (state.localUser = value),
   LOGOUT_USER: (state, payload) => (state.user = payload)
};

export const account = {
   state,
   getters,
   actions,
   mutations
}