import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import _ from 'lodash';    
Object.defineProperty(Vue.prototype, '$_', { value: _ });

import { BootstrapVue, IconsPlugin, SpinnerPlugin, ToastPlugin, PopoverPlugin } from "bootstrap-vue";


import './axios';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@/assets/scss/styles.scss";


Vue.use(BootstrapVue);
Vue.use(ToastPlugin);
Vue.use(SpinnerPlugin);
Vue.use(PopoverPlugin);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
