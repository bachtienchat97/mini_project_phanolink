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
      <VueSlickCarousel v-bind="slickOptions">
        <SliderFeatured/>
        <SliderFeatured/>
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

export default {
  name: "FeaturedProducts",
  components: {
    VueSlickCarousel,
    SliderFeatured
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
    // position: absolute;
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
