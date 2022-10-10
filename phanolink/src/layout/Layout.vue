<template>
  <div class="layout">
    <Header />
    <BreadCrumb />
    <router-view :key='$route.path'></router-view>
    <Footer />
  </div>
</template>

<script>
import BreadCrumb from "../views/components/Breadcrumb";
import Header from "@/views/layouts/Header.vue";
import Footer from "@/views/layouts/Footer.vue";

export default {
  name: "Layout",
  components: { BreadCrumb, Header, Footer },
};
</script>

<style scoped lang="scss">
.layout {
  background-color: #ebebeb;
}
</style>