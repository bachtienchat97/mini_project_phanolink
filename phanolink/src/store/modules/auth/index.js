
const state = {
   user: [],
   localUser: [],
   error: null
};

const getters = {
   allUser: (state) => state.user,
};

const actions = {
   userLogin({ commit }, userInfo) {
      commit('USER_INFO', userInfo);
   },

   logoutUser({ commit }, payload) {
      commit('LOGOUT_USER', payload)

   }
};

const mutations = {
   USER_INFO: (state, value) => (state.user = value),
   LOGOUT_USER: (state, payload) => (state.user = payload)
};

export const auth = {
   namespaced: true,
   state,
   getters,
   actions,
   mutations
}