<template>
  <div>
      <Header/>
        <router-view/>
      <PromotionHot />
      <Footer/>
  </div>
</template>

<script>
import Header from '../layouts/Header.vue'
import Footer from '../layouts/Footer.vue'
import PromotionHot from '../components/PromotionHot.vue'

export default {
name: 'Home',
components: {Header,Footer,PromotionHot}
}
</script>
