<template>
  <div>
    <router-view />
    <Banner />
    <PromotionHot />
    <FeaturedProducts />
    <ProductCategories
      v-for="item in categoriesList"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script>
import PromotionHot from "@/views/components/PromotionHot.vue";
import FeaturedProducts from "@/views/components/FeaturedProducts.vue";
import ProductCategories from "@/views/components/ProductCategories.vue";
import Banner from "@/views/components/Banner.vue";

import { mapGetters } from "vuex";
// import { BASE_URL } from "@/constants/index";
// import axios from "axios";

export default {
  name: "Home",

  components: {
    PromotionHot,
    FeaturedProducts,
    ProductCategories,
    Banner,
  },

  computed: {
    ...mapGetters({
      categoriesList: "category/categoriesList",
    }),
  },

  created() {
    this.$store.dispatch('category/getCategoryList',{root: true});
  },

  methods: {
    // async getProductList() {
    //   try {
    //     const res = await axios.get(`${BASE_URL}/home/categories`);
    //     if (res.status === 200) {
    //       await this.$store.dispatch("category/getCategoryList", res.data.data);
    //     }
    //   } catch (e) {
    //     throw new Error("something went wrong");
    //   }
    // },
  },
};
</script>
