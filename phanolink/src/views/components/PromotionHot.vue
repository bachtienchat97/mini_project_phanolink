<template>
  <div class="promotion container">
    <div class="promotion-header">
      <div class="promotion-title">
        <img src="@/assets/img/hot-icon-fire.png" alt="hot-icon-fire" />
        <span>Khuyến Mãi Hot</span>
      </div>
      <a href="#">Xem tất cả ></a>
    </div>
    <VueSlickCarousel v-bind="slickOptions" v-if="productList">
      <SliderHotPromotion :productList="productList" />
      <SliderHotPromotion :productList="productList" />
    </VueSlickCarousel>

    <div class="skeleton-img" v-if="!productList">
      <SkeletonImage :width="width" :height="height" v-for="i in 3" :key="i" style="marginLeft: 10px; display: unset; padding: 0;"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

import SkeletonImage from "@/views/components/skeleton/SkeletonImage";

import SliderHotPromotion from './SliderHotPromotion.vue';

export default {
  name: "PromotionHot",

  components: { VueSlickCarousel, SliderHotPromotion,SkeletonImage },

   computed: {
    ...mapGetters({
      productList: "product/productList",
    }),
  },

  
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
      width: '365px',
      height: '264px',
    };
  },

  methods: {
   
  },

  
};
</script>

<style lang="scss" scoped>
.promotion {
  margin-bottom: 20px;
  position: relative;

  .skeleton-img {
    display: flex;
    margin-left: -10px;
  }

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
