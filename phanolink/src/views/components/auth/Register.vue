<template>
  <form @submit.prevent="handleSubmit">
    <p>Họ tên</p>
    <input type="text" placeholder="Nhập họ tên" v-model="name" />

    <p>Email</p>
    <input type="email" placeholder="Nhập Email" v-model="email" />

    <p>Mật khẩu</p>
    <input
      type="password"
      placeholder="Mật khẩu từ 6 đến 32 ký tự"
      v-model="password"
    />

    <p>Số điện thoại</p>
    <input placeholder="Nhập số điện thoại" v-model="phone" />
    <button class="btn-register">Tạo tài khoản</button>
  </form>
</template>

<script>
//import axios from "axios";

export default {
  name: "Register",
  props: {
    isType: { type: String, default: '' }
  },
  data() {
    return {
      isRegister: true,
      name: "",
      email: "",
      password: "",
      phone: "",
      isSuccess: null,
    };
  },

  methods: {
    async handleSubmit() {
      // const response = await axios.post('register', {
      //   name : this.name,
      //   email: this.email,
      //   password: this.password,
      //   phone: this.phone
      // });

      // this.isSuccess = response;

      // open modal login
      console.log('run submit register')
      this.$emit("update:isType", 'login');
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/helpers/_variables";

[disabled] {
  cursor: no-drop;
  opacity: 0.5;
}

.btn-register {
  width: 100%;
  border-radius: 5px;
  height: 40px;
  font-weight: bold;
  color: $color-bg-white;
  font-size: $font-15;
  margin-top: 15px;
  background-color: $primary-green;
  transition: 0.3s;
  &:hover {
    opacity: 0.8;
  }
}
</style>
