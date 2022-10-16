<template>
  <div class="product container">
    <div class="wrapper-product">
      <div class="product-sidebar">
        <div class="category-product">
          <div class="category-product-top">Danh Mục Sản Phẩm</div>
          <div class="category-product-bot">
            <ul>
              <li v-for="item in categoriesList" :key="item.id">
                <router-link
                  exact-active-class="active-link"
                  :to="{
                    name: 'Product',
                    params: { slug: convertSlug(item.name), id: item.id },
                  }"
                >
                  {{ item.name }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="advertisement">Quảng Cáo</div>
      </div>

      <div class="product-main">
        <div class="product-sort">
          <span class="top-title"> Ưu tiên xem : </span>
          <span class="ascending active">Giá Thấp</span>
          <span class="descrement">Giá Cao</span>
          <span class="promotion">Khuyến mãi</span>
        </div>

        <div class="wrap-product-card container">
          <div
            class="product-card"
            v-for="product in products"
            :key="product.id"
          >
            <router-link
              :to="{
                name: 'ProductDetail',
                params: {
                  slug: convertSlug(product.name),
                  categoryID: product.category_id,
                  productID: product.id,
                },
                query: { page: 1 },
              }"
            >
              <div class="card">
                <div
                  class="card--discount"
                  v-show="product.discount !== 0 ? isDiscount : !isDiscount"
                >
                  {{ product.discount }}% GIẢM
                </div>
                <div
                  class="card-wrap"
                  v-if="
                    product.quantity === 0 ? (checkSold = true) : !checkSold
                  "
                >
                  <div :class="{ 'card--sold': checkSold }">Hết Hàng</div>
                  <div
                    class="card--discount"
                    v-show="product.discount !== 0 ? isDiscount : !isDiscount"
                  >
                    {{ product.discount }}% GIẢM
                  </div>
                </div>

                <img
                  v-if="checkFreeShip(product.is_free_shipping)"
                  class="freeship-ico"
                  src="@/assets/img/icons8-in-transit.gif"
                  alt="transit"
                  :width="30"
                />
                <span
                  :class="{ show: isDiscount }"
                  style="
                    font-size: 12px;
                    position: absolute;
                    top: 40px;
                    left: 15px;
                    border-radius: 5px;
                    padding: 5px;
                    margin-top: 5px;
                    color: #ffffff;
                    font-size: 12px;
                    display: flex;
                    background: #acacac;
                  "
                  v-if="product.quantity > 0"
                  >có sẵn: {{ product.quantity }}</span
                >
                <div class="card-img">
                  <img :src="product.img_path" :alt="product.description" />
                </div>

                <div class="card-description">
                  <p :class="{ 'text-overflow': showLess }">
                    {{ product.description }}
                  </p>

                  <div class="description-wrap">
                    <span class="discount-price"
                      >{{
                        calculateDis(product.original_price, product.discount)
                      }}
                      đ</span
                    >
                    <span class="root-price" v-if="product.discount > 0"
                      >{{ product.original_price }} đ</span
                    >
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mixins from "@/mixins";
import { mapGetters } from "vuex";

import { categoryApis } from "@/apis";
// import {productApis} from "@/apis";

import { calculateDiscount } from "@/utils/calculateDiscount";
import { freeShip } from "@/utils/freeShip";

export default {
  name: "Product",
  mixins: [mixins],
  data() {
    return {
      showLess: true,
      checkSold: false,
      products: [],
      isDiscount: true,
    };
  },

  computed: {
    ...mapGetters({
      categoriesList: "category/categoriesList",
      productList: "product/productListByID",
      productDetail: "product/productDetailByID",
    }),

    checkLengthText() {
      return this.productList.description.length > 50 ? true : false;
    },
  },

  created() {
    this.renderProductByCategoryID();
    this.$store.dispatch("category/getCategoryList", { root: true });
    this.$store.dispatch("product/getProductList", { root: true });
  },

  methods: {
    calculateDis(original, discount) {
      return calculateDiscount(original, discount);
    },

    checkFreeShip(isFree) {
      return freeShip(isFree);
    },

    //display product list by categoryID
    async renderProductByCategoryID() {
      try {
        const categoryID = this.$route.params.id;
        const res = await categoryApis.getProductBaseOnCategoryID(categoryID);
        if (res.status === 200) {
          this.products = res.data.data;
          console.log(this.products, "[");
        }
      } catch (e) {
        throw new Error("something went wrong", e);
      }
    },

   

    // async getProductByID() {
    //   try {
    //     const id = this.$route.params.productID;
    //     const res = await categoryApis.getProductBaseOnCategoryID(id);

    //     if (res.status === 200) {

    //     }
    //   } catch (e) {
    //     throw new Error("error: ", e);
    //   }
    // },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/styles";
.product {
  margin: 0 auto;

  .wrapper-product {
    display: flex;
    margin: 20px 0;
    .product-main {
      padding-left: 15px;
    }
    .advertisement {
      width: 190px;
      font-size: $size15;
      font-weight: bold;
      background-color: $color-white;
      margin-top: $size20;
      padding: $size10;
    }

    .category-product {
      display: flex;
      flex-direction: column;
      width: 190px;
      background-color: $color-white;

      .category-product-top {
        border-bottom: 1px solid gray;
        font-weight: bold;
        font-size: $size15;
        padding: $size10;
      }

      .category-product-bot {
        font-size: 14px;
        padding: $size10;

        .active-link {
          color: rgb(48, 48, 175);
        }

        ul {
          li {
            margin-bottom: $size10;
            list-style: none;

            &:hover a {
              color: rgb(48, 48, 175);
            }
            a {
              text-decoration: none;
              color: black;
            }
          }
        }
      }
    }

    .product-sort {
      display: flex;
      margin: 10px 0;
      align-items: center;

      .top-title {
        font-size: 14px;
      }

      .ascending,
      .descrement,
      .promotion {
        font-size: 14px;
        text-transform: uppercase;
        font-weight: 300;
        border-radius: 5px;
        padding: 5px 6px;
        margin-left: 10px;
        border: 1px solid gainsboro;
        box-shadow: #63636333 0 2px 8px;
        &:hover {
          color: $color-white;
          background-color: #336699;
          cursor: pointer;
          transition: all 0.15s ease-in;
        }
      }

      .active {
        background: #336699;
        color: $color-white;
      }
    }

    .wrap-product-card {
      display: grid;
      grid-template-columns: repeat(4, auto);
      gap: 10px;
    }

    .product-card {
      .card {
        padding: 10px;
        position: relative;
        background-color: $color-white;

        &:hover {
          cursor: pointer;
          box-shadow: #63636333 0 2px 8px;
        }

        span .show {
          top: 4px;
        }

        .freeship-ico {
          position: absolute;
          top: 20px;
          right: 20px;
        }

        .card-wrap {
          display: flex;
          align-items: center;
        }

        .card--discount {
          position: absolute;
          top: 4px;
          left: 15px;
          border-radius: 5px;
          padding: 5px;
          margin-top: 5px;
          color: #ffffff;
          font-size: 12px;
          text-transform: uppercase;
          display: flex;
          background: #f77c29;
        }

        .card--sold {
          display: flex;
          position: absolute;
          top: 35px;
          left: 15px;
          border-radius: 5px;
          padding: 5px;
          margin-top: 5px;
          color: #ffffff;
          font-size: 12px;
          text-transform: uppercase;
          background-color: $color-red;
        }

        .card-img {
          padding: 10px;
          margin-bottom: 10px;
          img {
            height: 180px;
            width: 300px;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
          }
        }

        .card-description {
          font-size: 14px;
          padding: 10px;

          .text-overflow {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            margin-bottom: 5px;
            color: black;
            &:hover {
              color: $primary-green;
            }
          }

          .description-wrap {
            display: flex;
            flex-direction: column;
            .root-price {
              text-decoration: line-through;
              font-size: 13px;
            }

            .discount-price {
              color: red;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
}
</style>
