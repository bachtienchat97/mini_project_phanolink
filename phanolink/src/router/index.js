import Vue from "vue";
import VueRouter from "vue-router";

import LayoutDefault from "@/layout/LayoutDefault";
import requireMeta from "@/helpers/requireMeta";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  scrollBehavior: () => ({ x: 0, y: 0 }),

  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: LayoutDefault,
      children: [
        {
          path: "/",
          name: "Home",
          component: () => import("@/views/pages/Home"),
        },

        {
          path: "login",
          name: "Modal",
          component: () => import("@/views/components/auth/Modal"),
          beforeEnter: requireMeta.requireLoggin,
          meta: {
            isLoggin: true,
            breadcrumb: false,
          },
        },

        {
          path: "/:slug/:id",
          name: "Product",
          component: () =>
            import(/* webpackChunkName: "product"*/ "@/views/pages/Product"),
          meta: {
            breadcrumb: true,
          },
        },

        {
          path: "/:slug/:categoryID/:productID",
          name: "ProductDetail",
          component: () =>
            import(
              /* webpackChunkName: "productdetail" */ "@/views/pages/ProductDetail"
            ),
          meta: {
            breadcrumb: true,
          },
        },

        {
          path: "cart",
          name: "Cart",
          component: () =>
            import(/* webpackChunkName: "cart" */ "@/views/pages/Cart"),
          beforeEnter: requireMeta.requireAuth,
          meta: {
            requiresAuth: true,
            breadcrumb: true,
          },
        },
        {
          path: "/:notfound(.*)*",
          name: "NotFound",
          component: () => import("@/views/pages/NotFound404"),
          meta: {
            title: "page not found",
          },
        },
      ],
    },
  ],
});


export default router;
