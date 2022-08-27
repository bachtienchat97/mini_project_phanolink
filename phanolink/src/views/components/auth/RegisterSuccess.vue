<template>
  <div class="register-success">
      <button classs="btn-register__success" v-if="isSuccess">Quay Lại Đăng Nhập</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'RegisterSuccess',

    async create() {
        await axios.get('data');
    }
}
</script>

<style lang="scss" scoped>
.register-success {
    width: 100%;
    height: 100%;
    padding: 15px;
}
.btn-register__success {
    width: 100%;
    border-radius: 5px;
    height: 40px;
    font-weight: bold;
    color: $color-bg-white;
    margin-top: 15px;
    font-size: $font-15;
    background-color: $primary-green;
}
</style>