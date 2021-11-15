import Vue from "vue";
import VueRouter from "vue-router";

import Layout from "../layout/Layout";

import Home from "../views/pages/Home";
import User from "../views/components/user/Layout";
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
      {
        path: 'user',
        name: "User",
        component: User,
      },
      {
        path: 'san-pham-yeu-thich',
        name: 'FavoriteProduct',
        component: FavoriteProduct
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
		if (to.hash) {
			return {
				selector: to.hash,
				// , offset: { x: 0, y: 10 }
			};
		}
		if (savedPosition) {
			return savedPosition;
		}
		return { x: 0, y: 1 };
	},
});

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch((err) => err);
};

export default router;
