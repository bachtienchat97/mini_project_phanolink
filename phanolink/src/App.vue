<template>
  <div class="main-app">
      <router-view/>
  </div>
</template>

<script>
import {objWindow} from '@/helpers/windowObject';

export default {
  name: "App",
  beforeCreate() {
    objWindow;
  }
};
</script>

<style lang="scss">
@import '@/assets/scss/styles';
.main-app {
  background-color: #ebebeb;
}
</style>
