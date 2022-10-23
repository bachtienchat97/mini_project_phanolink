<template>
  <span class="logout" @click="btnLogout">Đăng xuất</span>
</template>

<script>
import { KEY_LOCAL_STORAGE } from "@/constants";

export default {
  name: "Logout",

  methods: {
    async btnLogout() {
      await this.$store.dispatch("auth/logoutUser", {}, { root: true });
      localStorage.removeItem(KEY_LOCAL_STORAGE);
      if (localStorage.getItem("username")) {
         localStorage.removeItem("username");
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/styles";

.logout {
  cursor: pointer;
  color: $color-white;
  &:hover {
    color: $color-primary;
  }
}
</style>