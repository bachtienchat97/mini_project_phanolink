import Vue from "vue";
import VueRouter from "vue-router";

import Layout from "@/layout/Layout";

import { userLocal } from "@/utils/userLocalStorage";

import store from "@/store";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  scrollBehavior: () => ({ x: 0, y: 0 }),

  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "/",
          name: "Home",
          component: () =>
            import(/* webpackChunkName: "home"*/ "@/views/pages/Home"),
        },
        {
          path: "/:slug/:id",
          name: "Product",
          component: () =>
            import(/* webpackChunkName: "product"*/ "@/views/pages/Product"),
        },
        {
          path: "/:slug/:categoryID/:productID",
          name: "ProductDetail",
          component: () =>
            import(
              /* webpackChunkName: "productdetail" */ "@/views/pages/ProductDetail"
            ),
        },
        {
          path: "*",
          name: "NotFound",
          component: () => import("@/views/pages/NotFound404"),
        },
        {
          path: "/login",
          name: "Modal",
          component: () => import("@/views/components/Modal"),
        },
        {
          path: "/cart",
          name: "Cart",
          component: () =>
            import(/* webpackChunkName: "cart" */ "@/views/pages/Cart"),
          meta: {
            requiresAuth: true,
            requiresQuantity: true,
          },
        },
      ],
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const userStorage = await JSON.parse(userLocal),
    userStore = await store.getters["auth/allUser"],
    productStore = await store.getters["product/productDetailByID"],
    modal = document.getElementById("modal-1");
  // quantity = to.matched.some((record) => {
  //   record.meta.requiresQuantity;
  // });
  if (to.meta.requiresAuth) {
    if (userStore.name == undefined && userStorage == null) {
      if (userStore.name == undefined || userStorage == null) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        modal.style.display = "block";
      } else if (productStore.quantity === 0 && userStore.name !== undefined) {
        modal.style.display = "none";
        next(false);
      } else {
        next();
      }
    } else if (productStore.quantity === 0 && userStore.name !== undefined) {
      modal.style.display = "none";
      next(false);
    } else {
      next();
    }
  } else {
    next();
  }

  // if (quantity && productStore.quantity !== 0) {
  //   if (userStore.name == undefined && userStorage == null) {
  //     if (userStore.name == undefined || userStorage == null) {
  //       window.scrollTo({
  //         top: 0,
  //         left: 0,
  //         behavior: "smooth",
  //       });
  //       modal.style.display = "block";
  //       next(false);
  //     }else {
  //       next();
  //     }
  //   }else {
  //     next();
  //   }
  // }else {
  //   next()
  // }

  // if (to.name !== "ProductDetail" && to.name !== "Cart") {
  //     modal.style.display = "none";
  // }
  // if (to.name !== "ProductDetail") {
  //   if (userStore.name == undefined && userStorage == null) {
  //     if (userStore.name == undefined || userStorage == null) {
  //       modal.style.display = "none";
  //     }else next();
  //   }else next();
  // }else next();
});

export default router;
