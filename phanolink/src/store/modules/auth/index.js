// import httpClient from "@/utils/requestApis";

const state = {
   user: {},
   error: null,
   isAuthen: false,
};

const getters = {
   allUser: (state) => state.user,
   isAuthen: (state) => state.isAuthen,
};

const actions = {
   async userLogin({ commit }, userInfo) {
      // if(userInfo.accessToken) {
      //    const res = await httpClient.get("profile", userInfo.accessToken);
      //    console.log(res,'res')
      // }
      commit('USER_INFO', userInfo);
   },

   // userStorage({commit}, userStorage) {
   //    commit('USER_STORAGE', userStorage)
   // },


   logoutUser({ commit }, payload) {
      commit('LOGOUT_USER', payload)
   }
};

const mutations = {
   USER_INFO: (state, userLogin) => (state.user = userLogin, state.isAuthen = true),
   // AUTHENTICATOR: (state, isAuthen) => (state.isAuthen = isAuthen),
   LOGOUT_USER: (state, userLogout) => (state.user = userLogout, state.isAuthen = false),
};

export const auth = {
   namespaced: true,
   state,
   getters,
   actions,
   mutations
}