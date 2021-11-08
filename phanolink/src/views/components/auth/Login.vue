<template>
<div>
<p>Email / SĐT</p>
      <input type="text" placeholder="Nhập email hoặc số điện thoại">
      <p>Mật khẩu</p>
      <input type="text" placeholder="Mật khẩu từ 6 đến 32 ký tự">

      <p>Quên mất khẩu? Nhấn vào <a href="#" class="forget-pass">đây</a></p>
<button class="btn-login" :disabled="isLogin">Đăng nhập</button>
</div>
</template>

<script>

export default {
name: 'Login',
data() {
   return {
      isLogin: true
   }
}
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/helpers/_variables';

[disabled] {
      cursor: no-drop;
      opacity: 0.5;
}

.btn-login {
     width: 100%;
     border-radius: 5px;
     height: 40px;
     font-weight: bold;
     color: $dark;
     background-color: $primary-green;
}
</style>
