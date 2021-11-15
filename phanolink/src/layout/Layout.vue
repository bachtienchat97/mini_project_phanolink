<template>
  <div class="layout">
      <Header/>
      <BreadCrumb />
        <div class="main-page container">
            <router-view></router-view>
        </div>
      <Footer/>
  </div>
</template>

<script>
import Header from '../views/layouts/Header';
import Footer from '../views/layouts/Footer';
import BreadCrumb from '../views/components/Breadcrumb';

export default {
 name: 'Layout',
 components: {Header,Footer,BreadCrumb}
}
</script>

<style scoped lang="scss">
.layout {
  background-color: #EBEBEB;
}
</style>