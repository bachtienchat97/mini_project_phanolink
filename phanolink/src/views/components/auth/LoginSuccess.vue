<template>
  <div>
    <div v-if="!allUser.name && userLocal === ''">
      <span class="login" v-b-modal.modal-1>Đăng nhập</span>
      <span class="user">Tài khoản</span>
    </div>
      <Logout v-if="allUser.name || userLocal !== ''"/>
      <span class="user" v-if="allUser.name">{{ allUser.name }}1</span>
  </div>
</template>

<script>
import { KEY_LOCAL_STORAGE } from "@/constants";
// import { getTokenParsed } from "@/utils/localStorage";

import { mapActions, mapGetters } from "vuex";
import Logout from "./Logout.vue";

export default {
  components: { Logout },
  name: "LoginSuccess",

  data() {
    return {
      userLocal: '',
    };
  },

  computed: {
    ...mapGetters(["allUser"]),
  },
  methods: {
    ...mapActions(["logoutUser"]),
    // getUserLocal() {
    //   const username = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE));
    //   if (username.name !== '') {
    //     this.userLocal = username.name;
    //   }
    //   return this.userLocal
    // }
  },

  created() {
    
    const isUserLocal = localStorage.getItem(KEY_LOCAL_STORAGE);
    if (isUserLocal !== null) {
      const user = JSON.parse(isUserLocal)
      this.allUser.name = user.name;
    }
  },
};
</script>

<style scoped lang="scss">
.user {
  cursor: pointer;
}
</style>