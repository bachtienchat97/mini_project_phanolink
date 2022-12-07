<template>
  <form>
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
    <button class="btn-login">
      Đăng nhập
    </button>
  </form>
</template>

<script>
export default {
  name: 'AllowedAccess',
  data() {
    return {
      formSubmit: {
        email: '',
        password: ''
      }
    }
  }
}
</script>

<style>

</style>