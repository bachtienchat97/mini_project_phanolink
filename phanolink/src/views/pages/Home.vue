<template>
  <div>
    <Banner />
    <PromotionHot />
    <FeaturedProducts />
    <ProductCategories
      v-for="item in categoriesList"
      :key="item.id"
      :item="item"
    />
      <router-view />
  </div>
</template>

<script>
import PromotionHot from "@/views/components/PromotionHot.vue";
import FeaturedProducts from "@/views/components/FeaturedProducts.vue";
import ProductCategories from "@/views/components/ProductCategories.vue";
import Banner from "@/views/components/Banner.vue";


import { mapGetters } from "vuex";

export default {
  name: "Home",

  components: {
    PromotionHot,
    FeaturedProducts,
    ProductCategories,
    Banner,
  },

  created() {
    this.$store.dispatch("product/getProductListHome", {root: true});
  },

  computed: {
    ...mapGetters({
      categoriesList: "category/categoriesList",
    }),
  },

};
</script>
