<template>
  <div class="layout-default">
    <ProgressBar/>
    <Header />
    <BreadCrumb />
    <router-view :key='$route.path'/>
    <Footer />
  </div>
</template>

<script>
import BreadCrumb from "@/views/components/Breadcrumb";
import Header from "@/views/layouts/Header.vue";
import Footer from "@/views/layouts/Footer.vue";
import ProgressBar from "@/views/components/ProgressBar";

export default {
  name: "Layout",
  components: { BreadCrumb, Header, Footer, ProgressBar },

  created() {
    this.$store.dispatch('category/getCategoryList', {root: true})
  }
};
</script>

<style scoped>

.layout-default {
  background-color: #ebebeb;
}

.fade-enter-active {
  transition: opacity 0.8s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>