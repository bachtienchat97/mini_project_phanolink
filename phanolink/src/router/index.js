import Vue from "vue";
import VueRouter from "vue-router";

import Layout from "@/layout/Layout";

import FavoriteProduct from "@/views/components/user/FavoriteProduct";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import (/* webpackChunkName: "home"*/ '@/views/pages/Home'),
      },
      {
        path: '/:slug/:id',
        name: 'Product',
        component: () => import (/* webpackChunkName: "product"*/ '@/views/pages/Product')
      },
      // {
      //   path: 'user',
      //   name: "User",
      //   component: User,
      // },
      {
        path: '*',
        name: 'NotFound',
        component: () => import (/* webpackChunkName: "notfound"*/ '@/views/pages/NotFound404')
      },
      {
        path: 'san-pham-yeu-thich',
        name: 'FavoriteProduct',
        component: FavoriteProduct
      },

    ]
  },
  
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: () => import ('../views/components/auth/Login')
  // }
];

const router = new VueRouter({
  mode: "history",
  scrollBehavior: () => ({ x: 0, y: 0 }),
  base: process.env.BASE_URL,
  routes,
});

export default router;
