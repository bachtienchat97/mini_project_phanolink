<template>
  <div class="layout-default">
    <Header />
    <BreadCrumb />
    <router-view :key="$router.path" />
    <Footer />
  </div>
</template>

<script>
import BreadCrumb from "@/views/components/Breadcrumb";
import Header from "@/views/layouts/Header.vue";
import Footer from "@/views/layouts/Footer.vue";

export default {
  name: "Layout",
  components: { BreadCrumb, Header, Footer },
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