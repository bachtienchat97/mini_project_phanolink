<template>
  <div class="product-detail container">
    <div class="product-detail-wrapper" v-if="isLoadingProductByID">
      <div class="product-detail__display">
        <div class="display__image">
          <SkeletonImage :width="large" :height="large" />
        </div>

        <div class="display__list-image">
          <ul>
            <li>
              <SkeletonImage :width="small" :height="small" />
            </li>
            <li>
              <SkeletonImage :width="small" :height="small" />
            </li>
            <li>
              <SkeletonImage :width="small" :height="small" />
            </li>
          </ul>
        </div>
      </div>

      <div class="product-detail__order">
        <div class="product-title">
          <SkeletonBar :width="widthLarge" />
        </div>

        <div class="order__top">
          <SkeletonBar :width="widthSmaller" style="marginRight: 10px" />
          <SkeletonBar :width="widthSmaller" />
        </div>

        <div class="order__mid">
          <div class="weight">
            <SkeletonBar :width="widthSmall" />
          </div>
          <div class="size">
            <SkeletonBar :width="widthSmall" />
          </div>
          <div class="speci">
            <SkeletonBar :width="widthSmall" />
          </div>
          <div class="made">
            <SkeletonBar :width="widthSmall" />
          </div>
        </div>

        <div class="order__bot">
          <div class="price">
            <SkeletonBar :width="widthSmall" />
          </div>
          <div class="status">
            <SkeletonBar :width="widthSmall" />
          </div>

          <div class="amount">
            <SkeletonBar :width="widthDefault" />
          </div>
        </div>

        <div class="category__order">
          <SkeletonBar :width="widthDefault" />
        </div>
      </div>
    </div>


    <div class="product-detail-wrapper" else>
      <div class="product-detail__display">
        <div class="display__image">
          <img :src="products.img_path" :alt="products.description" />
        </div>

        <div class="display__list-image">
          <ul>
            <li>
              <img :src="products.img_path" :alt="products.description" />
            </li>
            <li>
              <img :src="products.img_path" :alt="products.description" />
            </li>
            <li>
              <img :src="products.img_path" :alt="products.description" />
            </li>
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
              >{{
                calculateDis(products.original_price, products.discount)
              }}
              đ</span
            >
            <span class="price__original" v-if="products.discount !== 0"
              >{{ products.original_price }} đ</span
            >
            <div class="price__discount" v-if="products.discount !== 0">
              {{ products.discount }}% Giảm
            </div>
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

            <p class="quantity" v-if="products.quantity !== 0">
              {{ products.quantity }} sản phẩm có sẵn
            </p>
          </div>

          <OrderProduct :products="products" />
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
import OrderProduct from "@/views/components/OrderProduct";
import SkeletonImage from "@/views/components/skeleton/SkeletonImage";
import SkeletonBar from "@/views/components/skeleton/SkeletonBar";

import { productApis } from "@/apis";

import { calculateDiscount } from "@/utils/calculateDiscount";

export default {
  name: "ProductDetail",
  components: { SkeletonImage, SkeletonBar, OrderProduct },
  data() {
    return {
      products: {},
      large: "412px",
      small: "100px",
      widthSmaller: "20%",
      widthDefault: "40%",
      widthSmall: "50%",
      widthLarge: "60%",
      isLoadingProductByID: false,
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
        this.isLoadingProductByID = true;
        const id = this.$route.params.productID;
        const res = await productApis.getProductByProductID(id);
        if (res.status === 200) {
          this.products = await res.data.data;
          this.isLoadingProductByID = false;
        }
      } catch (e) {
        throw new Error("error message:", e);
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
      padding: 20px;
      border-bottom: 1px solid #e2e3e4;

      &:hover img {
        cursor: pointer;
      }
      img {
        object-fit: cover;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        transition: all 0.3s ease-in-out;
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
    }

    .order__mid {
      .weight,
      .size,
      .speci {
        display: flex;
        margin-bottom: 10px;
      }

      .made {
        display: flex;
      }
    }

    .order__bot {
      margin-top: -10px;

      .price,
      .amount,
      .status,
      .amount__count {
        display: flex;
        align-items: center;
      }

      .price,
      .amount,
      .status {
        margin-top: 10px;
      }

      .price__numb {
        color: $color-danger;
        margin-right: 10px;
      }

      .price__original {
        text-decoration: line-through;
        font-size: 14px;
        font-weight: 600;
        color: #a39797;
      }

      .price__discount {
        color: #fff;
        text-transform: uppercase;
        font-weight: 600;
        border-radius: 4px;
        background-color: #f77c29;
        padding: 2px 4px;
        margin-left: 10px;
        font-size: 12px;
      }

      .quantity {
        font-size: 14px;
        margin-right: 0;
        margin-left: 10px;
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