import Vue from "vue";
import Vuex from "vuex";

import {account} from "./modules/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    account
  },
});
