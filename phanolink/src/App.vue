<template>
  <div class="main-app">
      <router-view />
  </div>
</template>

<script>

export default {
  name: "App",
 
};
</script>

<style lang="scss">
@import '@/assets/scss/styles';
.main-app {
  background-color: #ebebeb;
}
</style>
