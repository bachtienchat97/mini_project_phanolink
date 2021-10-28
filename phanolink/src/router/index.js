import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/pages/Home";
import User from "../views/pages/User";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    childrend: [],
  },
  {
    path: "/user",
    name: "User",
    component: User,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
