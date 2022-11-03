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
          <ProductCard  :productsList="products" :isLoadingProducts="isLoadingProducts"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mixins from "@/mixins";
import { mapGetters } from "vuex";

import { categoryApis } from "@/apis";

import { calculateDiscount } from "@/utils/calculateDiscount";
import { freeShip } from "@/utils/freeShip";
import ProductCard from "@/views/components/ProductCard";

export default {
  name: "Product",
  components: {
    ProductCard,
  },

  mixins: [mixins],
  data() {
    return {
      showLess: true,
      checkSold: false,
      isDiscount: true,
      products: [],
      isLoadingProducts: false,
    };
  },

  computed: {
    ...mapGetters({
      categoriesList: "category/categoriesList",
      productList: "product/productDetailByID",
    }),

    checkLengthText() {
      return this.productList.description.length > 50 ? true : false;
    },
  },

  created() {
    this.renderProductByCategoryID();
  },

  methods: {
    async renderProductByCategoryID() {
      try {
        this.isLoadingProducts = true;
        const categoryID = this.$route.params.id;
        const res = await categoryApis.getProductBaseOnCategoryID(categoryID);
        if (res.status === 200) {
          this.isLoadingProducts = false;
          this.products = await res.data.data;
          //dispatch data to state in store 
          await this.$store.dispatch("product/getProductListByID", this.products,{root: true})
        }
      } catch (e) {
        throw new Error("something went wrong", e);
      }finally {
        this.isLoadingProducts = false;
      }
    },

    calculateDis(original, discount) {
      return calculateDiscount(original, discount);
    },

    checkFreeShip(isFree) {
      return freeShip(isFree);
    },

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

        .active-link {
          color: rgb(48, 48, 175);
          border-left: 2px solid rgb(48, 48, 175);
        }

        ul {
          li {
            list-style: none;
            margin: 10px 0;

            &:hover a {
              color: rgb(48, 48, 175);
            }
            a {
              text-decoration: none;
              color: $dark;
              padding: 10px 0px 10px 10px;
              font-size: 15px;
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
        box-shadow: #63636333 0 2px 8px;
        color: $dark;
        border: 1px solid $dark;
        background-color: $color-white;
        &:hover {
          cursor: pointer;
          transition: all 0.15s ease-in;
          border: 1px solid $color-primary;
          color: $color-primary;
        }
      }

      .active {
        border: 1px solid $color-primary;
        color: $color-primary;
      }
    }
  }
}
</style>
