<template>
  <div class="product-detail container">
    <div class="product-detail-wrapper">
      <div class="product-detail__display">
        <div class="display__image">
          <img :src="products.img_path" :alt="products.description" />
        </div>

        <div class="display__list-image">
          <ul>
            <li><img :src="products.img_path" :alt="products.description" /></li>
            <li><img :src="products.img_path" :alt="products.description" /></li>
            <li><img :src="products.img_path" :alt="products.description" /></li>
          </ul>
        </div>
      </div>

      <div class="product-detail__order">
        <div class="product-title">
          <h2>{{ products.name }}</h2>
        </div>

        <div class="order__top">
          <div class="brand">
            <p>Thương hiệu:</p>
            <span class="brand-text">Blackmores</span>
          </div>
          <div class="sku">
            <p>SKU:</p>
            <b>{{ products.id }}</b>
          </div>
        </div>

        <div class="order__mid">
          <div class="weight">
            <p>Trọng lượng:</p>
            <span> 300g</span>
          </div>

          <div class="size">
            <p>Kích thước:</p>
            <span> 15 x 15 x 15 cm</span>
          </div>

          <div class="speci">
            <p>Quy cách:</p>
            <span> Chai 60 viên</span>
          </div>

          <div class="made">
            <p>Xuất xứ:</p>
            <span> USA</span>
          </div>
        </div>

        <div class="order__bot">
          <div class="price">
            <p>Giá:</p>
            <span class="price__numb"
              >{{ calculateDis(products.original_price, products.discount) }} đ</span
            >
          </div>
          <div class="status">
            <p>Tình trạng:</p>
            <span class="status-text" v-show="products.quantity !== 0">
              Còn hàng</span
            >
            <span class="status-text-danger" v-show="products.quantity === 0"
              >Hết hàng</span
            >
          </div>

          <div class="amount">
            <p>Số lượng</p>

            <div class="amount__count">
              <button class="desc">-</button>
              <div class="number-count">1</div>
              <button class="incr">+</button>
            </div>

            <button :class="{'disabled-order': !isDisabled, 'select-order': isDisabled }" :disabled="products.quantity === 0 ? isDisabled = false : true">
              <img src="@/assets/img/cart--white2x.png" alt="order" />
              chọn mua
            </button>

            <div class="favorite">
              <img src="@/assets/img/favorite.png" alt="favorite" />
            </div>
          </div>
        </div>

        <div class="category__order">
          <p>Danh mục:</p>
          <span v-if="products.category_id === 1">Thực phẩm chức năng</span>
          <span v-if="products.category_id === 2">Dược Phẩm</span>
          <span v-if="products.category_id === 3">Chăm sóc sức khỏe</span>
          <span v-if="products.category_id === 4">Chăm sóc da cho nam</span>
          <span v-if="products.category_id === 5">Chăm sóc da cho nữ</span>
          <span v-if="products.category_id === 6">Mẹ và bé</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {productApis} from "@/apis";

import { calculateDiscount } from "@/utils/calculateDiscount";

export default {
  name: "ProductDetail",

  data() {
    return {
      products: {},
      isDisabled: true
    };
  },

  created() {
    this.getProductByID();
    this.$store.dispatch("category/getCategoryList", { root: true });

  },

  methods: {
    calculateDis(original, discount) {
      return calculateDiscount(original, discount);
    },

     async getProductByID() { 
      try {
        const id = this.$route.params.productID;
        const res = await productApis.getProductByProductID(id);
        if (res.status === 200) {
          this.products = res.data.data;
        }
      } catch (e) {
        throw new Error("error:", e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/styles";

.product-detail {
  margin: 20px auto;

  .product-detail-wrapper {
    display: flex;
  }

  .product-detail__display,
  .product-detail__order {
    background-color: $color-default-lightest;
  }
  .product-detail__display {
    margin-right: 10px;
    width: 40%;

    .display__image {
      width: 100%;
      border-bottom: 1px solid #e2e3e4;

      img {
        object-fit: cover;
        background-position: 50%;
      }
    }

    .display__list-image {
      padding: 20px;
      ul {
        list-style: none;
        display: flex;
        margin-left: -10px;
        li {
          margin-left: 10px;
          img {
            width: 100px;
            object-fit: cover;
          }
        }
      }
    }
  }

  .product-detail__order {
    display: flex;
    flex-direction: column;
    width: 60%;

    .product-title {
      padding: 20px;
    }

    .category__order {
      display: flex;
      align-items: center;
      padding: 35px 20px;
    }

    .brand-text,
    .status-text {
      color: $primary-green;
    }

    .status-text-danger {
      color: $color-danger;
    }

    span {
      font-size: 16px;
      font-weight: bold;
    }
    p {
      margin-right: 10px;
      font-size: 15px;
      font-weight: 500;
    }

    .order__top,
    .order__mid,
    .order__bot {
      border-bottom: 1px solid #e2e3e4;
      padding: 20px;
    }

    .order__top,
    .brand,
    .sku {
      display: flex;
      align-items: center;
    }

    .order__top {
      .brand {
        margin-right: 30px;
      }

      .sku {
      }
    }

    .order__mid {
      .weight,
      .size,
      .made,
      .speci {
        display: flex;
      }
    }

    .order__bot {
      .price,
      .amount,
      .status,
      .amount__count {
        display: flex;
        align-items: center;
      }

      .amount {
        .favorite {
          background-color: $primary-green;
          border-radius: 4px;
          padding: 8px;

          &:hover {
            cursor: pointer;
            opacity: 0.9;
          }

          img {
            object-fit: cover;
            outline: none;
          }
        }

        .disabled-order {
          display: flex;
          align-items: center;
          background-color: $color-danger;
          margin: 0 15px;
          padding: 10px 15px;
          color: #fff;
          text-transform: uppercase;
          font-weight: bold;
          border-radius: 4px;
          opacity: 1;
          &:hover {
            cursor: not-allowed;
          }

          img {
            object-fit: cover;
            margin-right: 10px;
          }
        }

        .select-order {
          display: flex;
          align-items: center;
          background-color: $color-danger;
          margin: 0 15px;
          padding: 10px 15px;
          color: #fff;
          text-transform: uppercase;
          font-weight: bold;
          border-radius: 4px;
          opacity: 1;

          &:hover {
            cursor: pointer;
            box-shadow: #8b6c6c33 0 2px 8px;
            opacity: 0.9;
          }

          img {
            object-fit: cover;
            margin-right: 10px;
          }
        }
      }

      .price__numb {
        color: $color-danger;
      }

      .amount__count {
        border: 1px solid $color-common;
        .desc,
        .incr {
          font-size: 30px;
          padding-bottom: 15px;
          width: 40px;
          height: 40px;
          font-weight: 700;
          background-color: $color-common;
          border: 1px solid $color-common;
          outline: none;
          &:hover {
            opacity: 0.7;
          }
        }
      }

      .amount__count > .number-count {
        font-size: 20px;
        margin: 0 10px;
        padding: 5px 12px;
      }
    }
  }
}
</style>