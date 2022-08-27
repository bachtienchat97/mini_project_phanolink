<template>
  <span class="logout" @click="btnLogout">Đăng xuất</span>
</template>

<script>

// import { KEY_LOCAL_STORAGE } from '@/constants';
// import { removeToken } from '@/utils/localStorage';


export default {

  name: "Logout",

  methods: {
    // ...mapActions('logoutUser', null),
    btnLogout() {
      this.$store.dispatch("logoutUser", {});
      localStorage.removeItem('phanolink_user');
    },
  },
};
</script>

<style scoped lang="scss">
.logout {
  cursor: pointer;
}
</style>