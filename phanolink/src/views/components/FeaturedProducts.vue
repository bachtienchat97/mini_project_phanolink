<template>
  <div class="featured-products container">
    <div class="featured-header">
      <div class="featured-left">
        <img src="@/assets/img/product_star2x.png" alt="product" />
        <div class="featured-left__title">
          <span>Sản Phẩm Nổi Bật</span>
          <p>Lorem ipsum, or lipsum as it is sometimes known</p>
        </div>
      </div>
      <a href="#">Xem tất cả ></a>
    </div>
    <div class="featured-content">
      <div class="skeleton-img" v-show="!productList">
        <SkeletonImage :width="width"  v-for="i in 4" :key="i"/>
      </div>

      <VueSlickCarousel v-bind="slickOptions" v-show="productList">
        <SliderFeatured :productList="productList" />
        <SliderFeatured :productList="productList" />
      </VueSlickCarousel>
      <div class="phano">
        <img src="@/assets/img/phanosafe.png" alt="phanosafe" />
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import { mapGetters } from 'vuex';

import SliderFeatured from './SliderFeatured.vue';
import SkeletonImage from '@/views/components/skeleton/SkeletonImage';

export default {
  name: "FeaturedProducts",
  components: {
    VueSlickCarousel,
    SliderFeatured,
    SkeletonImage
  },

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
      height: '264px'
    };
  },

};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers/_variables';

.featured-products {
  margin-bottom: 20px;

  ::v-deep .slick-slider {
    position: unset;
  }
  ::v-deep .slick-list {
    margin: 0 0 25px 0;
    position: unset;
  }

  ::v-deep .slick-dots {
    list-style: none;
    display: flex !important;
    bottom: 0;
    left: 50%;
    padding: 0;
    margin: 15px -5px 0 -5px;

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

  ::v-deep .slick-slider {
    display: grid;
  }

  .featured-content {
    display: flex;

    .skeleton-img {
      display: grid;
      grid-template-columns: repeat(2,1fr);
      gap: 10px;
    }
  }

  .phano {
    margin-left: 10px;
    width: 100%;

    img {
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      &:hover {
        opacity: 0.9;
        cursor: pointer;
      }
    }
  }

  .featured-header {
    padding: 15px;
    display: flex;
    justify-content: space-between;

    a {
      text-decoration: none;
    }
    .featured-left {
      display: flex;

      img {
        object-fit: cover;
        background-repeat: no-repeat;
        background-position: center;
        height: 25px;
        margin-right: 10px;
      }

      .featured-left__title {
        line-height: 17px;

        span {
          font-size: $font-15;
        }

        p {
          margin: 0;
          font-size: 13px;
          color: #706767;
        }
      }
    }
  }
}
</style>
