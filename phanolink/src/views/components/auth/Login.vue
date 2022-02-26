<template>
<form @submit.prevent="handleSubmit">
<p>Email / SĐT</p>
      <input placeholder="Nhập email hoặc số điện thoại" v-model="email">
      <p>Mật khẩu</p>
      <input type="password" placeholder="Mật khẩu từ 6 đến 32 ký tự" v-model="password">

      <p>Quên mất khẩu? Nhấn vào <a href="#" class="forget-pass">đây</a></p>
<button type="submit" class="btn-login" @click="handleSubmit">Đăng nhập</button>
</form>
</template>

<script>
import axios from 'axios';

export default {
name: 'Login',
data() {
   return {
      email: '',
      password: ''
   }
},
methods: {
      async handleSubmit() {
         const response = await axios.post('login', {
               email: this.email,
               password: this.password
         })
         
         localStorage.setItem('token', response.data.token)

      //    this.$router.push('/')
         this.$bvModal.hide('modal-1')
      },
      
      // hideModal() {
      //       this.$refs['my-modal'].hide()
      // }
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
     color: $color-bg-white;
     font-size: $font-15;
     background-color: $primary-green;
     transition: 0.3s;
     &:hover {
        opacity: 0.8
     }
}
</style>
