<template>
  <div>
      <Header/>
        <router-view/>
      <Banner />
      <PromotionHot />
      <FeaturedProducts />
      <NonPrescription />
      <Supplements/>
      <Footer/>
  </div>
</template>

<script>
import Header from '../layouts/Header.vue'
import Footer from '../layouts/Footer.vue'
import PromotionHot from '../components/PromotionHot.vue'
import FeaturedProducts from '../components/FeaturedProducts.vue'
import NonPrescription from '../components/NonPrescription.vue'
import Supplements from '../components/Supplements.vue'
import Banner from '../components/Banner.vue'

export default {
name: 'Home',
components: {Header,Footer,PromotionHot,FeaturedProducts,NonPrescription, Supplements, Banner}
}
</script>
