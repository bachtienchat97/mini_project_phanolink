<template>
  <div>
      <p>Họ tên</p>
      <input type="text" placeholder="Nhập họ tên">

      <p>Email</p>
      <input type="text" placeholder="Nhập Email">

      <p>Mật khẩu</p>
      <input type="text" placeholder="Mật khẩu từ 6 đến 32 ký tự">

      <p>Số điện thoại</p>
      <input type="text" placeholder="Nhập số điện thoại">

    <button type="submit" class="btn-register" :disabled="isRegister">Tạo tài khoản</button>
  </div>
</template>

<script>

export default {
  name: "Register",

  data() {
    return {
      isRegister: true
    }
  },

  methods: {
    
  },

  computed: {
     
  }
};
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/helpers/_variables';

[disabled] {
  cursor: no-drop;
  opacity: 0.5;
}

.btn-register {
     width: 100%;
     border-radius: 5px;
     height: 40px;
     font-weight: bold;
     color: $dark;
     margin-top: 15px;
     background-color: $primary-green;
}
</style>
