<template>
<div class="wrapper-user__content">
  <ManagerAccount />
  <div class="favorite-product container">
      <div class="title-favorite">SẢN PHẨM YÊU THÍCH</div>
      <div class="product-list">
          <div class="product-item">
              <img src="../../../assets/img/amoga.png" alt="img">
              <div class="item-content">
                  <p>Thực Phẩm Chức Năng Bổ Não Giảm Triệu Chứng...</p>
                  <span>246.000đ</span>
              </div>
          </div>
          <div class="product-item">
              <img src="../../../assets/img/amoga.png" alt="img">
              <div class="item-content">
                  <p>Thực Phẩm Chức Năng Bổ Não Giảm Triệu Chứng...</p>
                  <span>246.000đ</span>
              </div>
          </div>
          <div class="product-item">
              <img src="../../../assets/img/amoga.png" alt="img">
              <div class="item-content">
                  <p>Thực Phẩm Chức Năng Bổ Não Giảm Triệu Chứng...</p>
                  <span>246.000đ</span>
              </div>
          </div>
          <div class="product-item">
              <img src="../../../assets/img/amoga.png" alt="img">
              <div class="item-content">
                  <p>Thực Phẩm Chức Năng Bổ Não Giảm Triệu Chứng...</p>
                  <span>246.000đ</span>
              </div>
          </div>
      </div>
  </div>
</div>
</template>

<script>
import ManagerAccount from '../ManagerAccount';

export default {
  name: 'FavoriteProduct',
  components: { ManagerAccount }
}
</script>

<style scoped lang="scss">
@import '../../../assets/scss/helpers/_variables';

.wrapper-user__content {
    margin: 20px ;
    display: flex;
}

.favorite-product {
    position: relative;
    background: $color-bg-white;
    padding-top: 55px;
    padding-left: 0;
    padding-right: 0;
    margin-left: 15px;

    .title-favorite {
        background-color: $primary-green;
        color: $color-bg-white;
        padding: 5px 20px;
        position: absolute;
        width: 200px;
        top: 0;
        left: 10px;
    }

    .product-list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }

    .item-content {
        padding: 5px 15px;

        p {
            color: $dark;
        }

        span {
            color: $color-red;
        }
    }

    .product-item {
        width: 100%;
        padding: 15px;
        img {
            object-fit: cover;
            object-position: center;
        }
    }
}
</style>