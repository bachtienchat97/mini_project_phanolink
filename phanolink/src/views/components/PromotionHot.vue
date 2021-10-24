<template>
  <div class="promotion container">
     <div class="promotion-header">
         <div class="promotion-title">
           <img src="../../assets/img/hot-icon-fire.png" alt="hot-icon-fire">
           <span>Khuyến Mãi Hot</span>
         </div>
         <a href="#">Xem tất cả ></a>
     </div>

  <VueSlickCarousel
  v-bind='slickOptions'
  >
    <div class="item-content">
      <div class="item">
      <img src="../../assets/img/khuyen-mai-hot-img2.png" alt="img">
      </div>
      <div class="item">
      <img src="../../assets/img/khuyen-mai-hot1.png" alt="img">
      </div>
      <div class="item">
      <img src="../../assets/img/khuyen-mai-hot-img2.png" alt="img">
      </div>
     </div>

    <div class="item-content">
      <div class="item">
      <img src="../../assets/img/khuyen-mai-hot-img2.png" alt="img">
      </div>
      <div class="item">
      <img src="../../assets/img/khuyen-mai-hot1.png" alt="img">
      </div>
      <div class="item">
      <img src="../../assets/img/khuyen-mai-hot-img2.png" alt="img">
      </div>
    </div>
  
    <div class="item-content">
      <div class="item">
      <img src="../../assets/img/khuyen-mai-hot-img2.png" alt="img">
      </div>
      <div class="item">
      <img src="../../assets/img/khuyen-mai-hot1.png" alt="img">
      </div>
      <div class="item">
      <img src="../../assets/img/khuyen-mai-hot-img2.png" alt="img">
      </div>
    </div>
  </VueSlickCarousel>

  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
 name: 'PromotionHot',
 components: {VueSlickCarousel},
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
    draggable: true
    },
  };
 },
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/slick';

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

   .slick-active{
      button {
        background: #05A8D0;
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

    
    .item-content{
      display: flex !important;
      margin-left: -10px;
      margin-bottom: 20px;

      img {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        margin-left: 10px;
        width: 365px;
        &:hover {
          opacity: 0.8;
          cursor: pointer;
          border: 1px solid #05A8D0;
        }
      }
    }
    

.promotion-header {
  display :flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
.promotion-title{
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