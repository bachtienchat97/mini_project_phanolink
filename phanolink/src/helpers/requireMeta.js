import store from "@/store";
import { getStorageParse } from "@/utils/localStorage";

const requireMeta = {
  requireAuth: async (to, from, next) => {
    const userStore = await store.getters["auth/allUser"];
    const requireAuth = to.matched.some((record) => record.meta.requiresAuth);
    if (requireAuth) {
      if (getStorageParse() == null && userStore == null) {
        next({ path: "/login" });
      } else if (getStorageParse() == null) {
        next({ path: "/login" });
      } else if (userStore == null) next({ path: "/login " });
      else next();
    } else next();
  },

  requireLoggin: async (to, from, next) => {
    const userStore = await store.getters["auth/allUser"];

    const requireLoggin = to.matched.some((record) => record.meta.isLoggin);

    if (requireLoggin) {
      if (userStore === null) {
        next(false);
      } else if (getStorageParse() !== null) {
        next(false);
      } else next();
    } else next();
  },
};

export default requireMeta;
