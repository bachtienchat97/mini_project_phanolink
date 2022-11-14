<template>
  <div class="layout-default">
    <Header />
    <template v-if="isLoading">
      <SkeletonBar v-for="(item,index) in amount" :key="index" />
    </template>
    <BreadCrumb />
    <router-view :key='$route.path'/>
    <Footer />
  </div>
</template>

<script>
import BreadCrumb from "@/views/components/Breadcrumb";
import Header from "@/views/layouts/Header.vue";
import Footer from "@/views/layouts/Footer.vue";
import SkeletonBar from "@/views/components/skeleton/SkeletonBar";
import { mapGetters } from 'vuex';

export default {
  name: "Layout",
  components: { BreadCrumb, Header, Footer, SkeletonBar },

  data() {
    return {
      amount: 6,
      isLoading: false
    }
  },

  computed: {
    ...mapGetters({
      isLoadingCategory: "category/categoriesList"
    })
  },

  created() {
    this.$store.dispatch('category/getCategoryList', {root: true})
    this.isLoadingCategory();
  },

  methods: {
    isLoadingCategory() {
      if(!this.isLoadingCategory) {
        this.isLoading = true;
      } this.isLoading  = false;
    }
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