<template>
  <div class="promotion container">
    <div class="promotion-header">
      <div class="promotion-title">
        <img src="@/assets/img/hot-icon-fire.png" alt="hot-icon-fire" />
        <span>Khuyến Mãi Hot</span>
      </div>
      <a href="#">Xem tất cả ></a>
    </div>

    <VueSlickCarousel v-bind="slickOptions" >
      <SliderHotPromotion v-for="item in 3" :key="item" />
    </VueSlickCarousel>
  </div>
</template>

<script>
// import categoryApis from '@/apis';

import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

import SliderHotPromotion from './SliderHotPromotion.vue';

export default {
  name: "PromotionHot",

  components: { VueSlickCarousel, SliderHotPromotion },

  data() {
    return {
      slickOptions: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        arrows: false,
        draggable: true,
      },
    };
  },

  methods: {
    // async getProductSlider() {
    //   const res = await categoryApis.getProductSlider(1);
    //   if (res.status === 200) {
    //     const product = res.data.data;
    //     console.log(product)
    //     await this.$store.dispatch('product/getProductList', product, { root: true });
    //   }
    // }
  },

  created() {
    this.$store.dispatch('product/productList',{root: true});
  }
};
</script>

<style lang="scss" scoped>
.promotion {
  margin-bottom: 20px;
  position: relative;

  ::v-deep .slick-dots {
    list-style: none;
    display: flex !important;
    position: absolute;
    bottom: 0;
    left: 50%;
    padding: 0;
    margin: 0 -5px;

    .slick-active {
      button {
        background: #05a8d0;
      }
    }

    li {
      margin: 0 5px;

      button {
        border-radius: 50%;
        padding: 4px;
        font-size: 0;
        background: #969696;
        transition: 0.5s;
        outline: none;
        cursor: pointer;
        border: none;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }

  .promotion-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    .promotion-title {
      display: flex;

      img {
        width: 20px;
        margin-right: 10px;
      }

      span {
        font-size: 15px;
      }
    }

    a {
      text-decoration: none;
    }
  }
}
</style>
