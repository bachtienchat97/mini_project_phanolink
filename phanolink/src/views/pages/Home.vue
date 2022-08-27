<template>
  <div>
    <router-view />
    <Banner />
    <PromotionHot />
    <FeaturedProducts />
    <NonPrescription />
    <Supplements />
  </div>
</template>

<script>
// import Header from "../layouts/Header.vue";
// import Footer from "../layouts/Footer.vue";
import PromotionHot from "@/views/components/PromotionHot.vue";
import FeaturedProducts from "@/views/components/FeaturedProducts.vue";
import NonPrescription from "@/views/components/NonPrescription.vue";
import Supplements from "@/views/components/Supplements.vue";
import Banner from "@/views/components/Banner.vue";

export default {
  name: "Home",

  components: {
    // Header,
    // Footer,
    PromotionHot,
    FeaturedProducts,
    NonPrescription,
    Supplements,
    Banner,
  },
};
</script>
