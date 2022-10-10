<template>
  <div class="item-content">
    <div class="item-product" v-for="item in productList" :key="item.id">
      <img :src="item.img_path" :alt="item.name"  v-if="item.id == 17" />
      <img :src="item.img_path" :alt="item.name"  v-if="item.id == 17" />
      <img :src="item.img_path" :alt="item.name"  v-if="item.id == 17" />
      <img :src="item.img_path" :alt="item.name"  v-if="item.id == 17" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "SliderFeatured",

  computed: {
    ...mapGetters({
      productList:'product/productList'})
  },
};
</script>

<style lang="scss" scoped>
.item-product {

  img {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    &:hover {
      opacity: 0.8;
      cursor: pointer;
      border: 1px solid #05a8d0;
    }
  }
}
</style>