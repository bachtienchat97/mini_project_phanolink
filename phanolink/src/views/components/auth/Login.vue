<template>
  <form @submit.prevent="handleSubmit">
    <p>Email / SĐT</p>
    <input
      placeholder="Nhập email hoặc số điện thoại"
      v-model="formSubmit.email"
    />
    <p>Mật khẩu</p>
    <input
      type="password"
      placeholder="Mật khẩu từ 6 đến 32 ký tự"
      v-model="formSubmit.password"
    />

    <p>Quên mật khẩu? Nhấn vào <a href="#" class="forget-pass">đây</a></p>
    <button class="btn-login" @click="handleSubmit">
      Đăng nhập
    </button>
  </form>
</template>

<script>
import axios from "axios";

import { setToken } from "@/utils/localStorage.js";

export default {
  name: "Login",

  data() {
    return {
      formSubmit: {
        email: "",
        password: "",
      },
      errMSG: "",
    };
  },

  methods: {
    async handleSubmit() {
      const response = await axios.post("login", this.formSubmit);

      if (response.status === 200) {
        // dispatch action to store or using helper mapAction
        await this.$store.dispatch('auth/userLogin', response.data.data, {root: true});
        await setToken(JSON.stringify(response.data.data));
        this.$bvModal.hide("modal-1"); //? hide modal
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/helpers/_variables";

[disabled] {
  cursor: no-drop;
  opacity: 0.5;
}

.btn-login {
  width: 100%;
  border-radius: 5px;
  height: 40px;
  font-weight: bold;
  color: $color-bg-white;
  font-size: $font-15;
  background-color: $primary-green;
  transition: 0.3s;
  &:hover {
    opacity: 0.8;
  }
}
</style>
