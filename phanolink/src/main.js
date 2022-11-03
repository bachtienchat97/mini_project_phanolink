import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'nprogress/nprogress.css';


import { BootstrapVue, IconsPlugin, SpinnerPlugin, SkeletonPlugin } from "bootstrap-vue";

import '@/utils/requestApis';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@/assets/scss/styles.scss";


Vue.use(BootstrapVue);
Vue.use(SpinnerPlugin);
Vue.use(SkeletonPlugin);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
