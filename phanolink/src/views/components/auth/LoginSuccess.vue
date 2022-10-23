<template>
  <div>
    <div v-if="!user.name">
      <span class="login" @click="openModal">Đăng nhập</span>
      <span class="user">Tài khoản</span>
    </div>
    <Logout v-if="user.name" />
    <span class="user" v-if="user.name">{{ user.name }}</span>
  </div>
</template>

<script>
import { KEY_LOCAL_STORAGE } from "@/constants";

import { mapGetters } from "vuex";
import Logout from "./Logout.vue";

export default {
  components: { Logout },
  name: "LoginSuccess",

  data() {
    return {
    };
  },

  computed: {
    ...mapGetters({
      user: "auth/allUser", //Array
    }),
  },

  methods: {
    openModal() {
      return (document.getElementById("modal-1").style.display = "block");
    },
  },

  created() {
    const isUserLocal = localStorage.getItem(KEY_LOCAL_STORAGE);
    //check if user in local storage dot not have then assign into allUser in store
    if (isUserLocal !== null) { 
      const user = JSON.parse(isUserLocal);
      this.user.name = user.name; //object
    }
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/styles";

.user {
  cursor: pointer;
}

.login {
  cursor: pointer;
  font-size: 13px;
  border-radius: 5px;
  font-weight: 500;
  &:hover {
    color: $color-primary;
  }
}
</style>