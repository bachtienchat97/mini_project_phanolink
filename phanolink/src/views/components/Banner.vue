<template>
  <div class="banner container">
    <VueSlickCarousel v-bind="slickOptions">
      <div class="slider-item">
        <img src="@/assets/img/banner-img.png" alt="banner" />
      </div>
      <div class="slider-item">
        <img src="@/assets/img/banner-img.png" alt="banner" />
      </div>
      <div class="slider-item">
        <img src="@/assets/img/banner-img.png" alt="banner" />
      </div>
      <div class="slider-item">
        <img src="@/assets/img/banner-img.png" alt="banner" />
      </div>
      <div class="slider-item">
        <img src="@/assets/img/banner-img.png" alt="banner" />
      </div>
    </VueSlickCarousel>

    <div class="banner-right">
      <div class="banner-right__item">
        <img src="@/assets/img/duocsi.png" alt="item" />
        <p>Dươc sĩ <br />tư vấn</p>
      </div>
      <div class="banner-right__item">
        <img src="@/assets/img/sanphamchinhhang.png" alt="item" />
        <p>Sản phẩm <br />chính hãng</p>
      </div>
      <div class="banner-right__item">
        <img src="@/assets/img/giaohangtoanquoc.png" alt="item" />
        <p>Giao hàng <br />toàn quốc</p>
      </div>
      <div class="banner-right__item">
        <img src="@/assets/img/tichluy.png" alt="item" />
        <p>Tích lũy <br />nhận quà</p>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

export default {
  name: "Banner",
  components: { VueSlickCarousel },
  data() {
    return {
      slickOptions: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        dots: false,
        draggable: true,
      },
    };
  },

  created() {},
};
</script>

<style scoped lang="scss">
.banner {
  display: flex;
  padding: 15px;
  align-items: center;

  ::v-deep .slick-slider {
    width: 80%;
  }
  .slider-item {
    img {
      object-fit: cover;
      object-position: center;
      background-repeat: no-repeat;
      width: 100%;
      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }
  }

  .banner-right {
    width: 20%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;

    p {
      text-align: center;
      margin: 0;
      padding: 0;
    }

    .banner-right__item {
      display: flex;
      align-items: center;
      flex-direction: column;
      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }
  }
}
</style>
