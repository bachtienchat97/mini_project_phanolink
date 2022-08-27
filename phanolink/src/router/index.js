import Vue from "vue";
import VueRouter from "vue-router";

import Layout from "../layout/Layout";

import Home from "../views/pages/Home";
// import User from "../views/components/user/Layout";
import FavoriteProduct from "../views/components/user/FavoriteProduct";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      // {
      //   path: 'user',
      //   name: "User",
      //   component: User,
      // },
      {
        path: 'san-pham-yeu-thich',
        name: 'FavoriteProduct',
        component: FavoriteProduct
      },
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
  // {
  //   path: '/register',
  //   name: 'Register',
  //   component: () => import ('../views/components/auth/Register')
  // },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: () => import ('../views/components/auth/Login')
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
