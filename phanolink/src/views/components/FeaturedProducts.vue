<template>
  <div class="featured-products container">
    <div class="featured-header">
      <div class="featured-left">
        <img src="../../assets/img/product_star2x.png" alt="product" />
        <div class="featured-left__title">
          <span>Sản Phẩm Nổi Bật</span>
          <p>Lorem ipsum, or lipsum as it is sometimes known</p>
        </div>
      </div>
      <a href="#">Xem tất cả ></a>
    </div>
    <div class="featured-content">
      <VueSlickCarousel v-bind="slickOptions">
        <div class="item-content">
          <img src="../../assets/img/khuyen-mai-hot-img2.png" alt="item" />
          <img src="../../assets/img/khuyen-mai-hot-img2.png" alt="item" />
          <img src="../../assets/img/khuyen-mai-hot-img2.png" alt="item" />
          <img src="../../assets/img/khuyen-mai-hot-img2.png" alt="item" />
        </div>

        <div class="item-content">
          <img src="../../assets/img/khuyen-mai-hot-img2.png" alt="item" />
          <img src="../../assets/img/khuyen-mai-hot-img2.png" alt="item" />
          <img src="../../assets/img/khuyen-mai-hot-img2.png" alt="item" />
          <img src="../../assets/img/khuyen-mai-hot-img2.png" alt="item" />
        </div>
      </VueSlickCarousel>

      <div class="phano">
        <img src="../../assets/img/phanosafe.png" alt="phanosafe" />
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";

export default {
  name: "FeaturedProducts",
  components: {
    VueSlickCarousel,
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
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/helpers/_variables';

.featured-products {
  position: relative;

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
    position: absolute;
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
    display: flex;
    width: 70%;
  }

  .featured-content {
    width: 100%;
    display: flex;
    margin-bottom: 20px;
  }

  .phano {
    width: 30%;
    margin-left: 10px;

    img {
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      width: 100%;
      &:hover {
        opacity: 0.9;
        cursor: pointer;
      }
    }
  }

  .item-content {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    height: 608px;

    img {
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      width: 100%;

      &:hover {
        opacity: 0.8;
        cursor: pointer;
        border: 1px solid #05a8d0;
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
