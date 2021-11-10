<template>
  <div class="layout">
      <Header/>
        <div class="main-page">
            <router-view></router-view>
        </div>
      <Footer/>
  </div>
</template>

<script>
import Header from '../views/layouts/Header';
import Footer from '../views/layouts/Footer';

export default {
 name: 'Layout',
 components: {Header,Footer}
}
</script>

<style scoped lang="scss">
.layout {
  background-color: #EBEBEB;
}
</style>