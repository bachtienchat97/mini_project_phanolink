<template>
  <div class="container">
      <Header/>
      <router-view/>
      <b-button variant="primary">submit</b-button>
      <Footer/>
  </div>
</template>

<script>
import Header from '../layouts/Header.vue'
import Footer from '../layouts/Footer.vue'

export default {
name: 'Home',
components: {Header,Footer}
}
</script>

<style lang="scss" scoped>

</style>