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
          <span
            class="ascending"
            :class="{ active_btn: isActive === 'asc' }"
            @click="sortLowPrice(products)"
            >Giá Thấp</span
          >
          <span
            class="descrement"
            :class="{ active_btn: isActive === 'desc' }"
            @click="sortHighPrice(products)"
            >Giá Cao</span
          >
          <span
            class="promotion"
            :class="{ active_btn: isActive === 'prom' }"
            @click="sortPromotion(products)"
            >Khuyến mãi</span
          >
        </div>

        <div class="wrap-product-card container">
          <ProductCard
            :productsList="productPaginate"
            :isLoadingProducts="isLoadingProducts"
          />

          <b-pagination
            @change="onPageChanged"
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
            align="right"
            style="marginTop: 15px"
          ></b-pagination>
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
      isActive: "",
      products: [],
      isLoadingProducts: false,
      currentPage: 1,
      perPage: 12,
      productPaginate: [],
    };
  },

  computed: {
    ...mapGetters({
      categoriesList: "category/categoriesList",
      productList: "product/productDetailByID", //{}
    }),

    rows() {
      return this.products.length;
    },

    checkLengthText() {
      return this.productList.description.length > 40 ? true : false;
    },
    // the way to access getter in store are cached : property-style access
    // categoriesList() {
    //   return this.$store.getters['category/categoriesList']
    // },
  },

  // beforeMount() {
  //   this.paginate(this.perPage, 0);
  // },

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
          await this.$store.dispatch(
            "product/getProductListByID",
            this.products,
            { root: true }
          );
          this.paginate(this.perPage, 0);
        }
      } catch (e) {
        throw new Error("something went wrong", e);
      } finally {
        this.isLoadingProducts = false;
      }
    },

    paginate(page_size, page_number) {
      let itemsToParse = this.products;
      this.productPaginate = itemsToParse.slice(
        page_size * page_number, //first time : 12 , 0  , second : 12 , 1
        (page_number + 1) * page_size
      );
      window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
      });
    },

    onPageChanged(page) {
      this.paginate(this.perPage, page - 1); // click paginate 2 => 12 , 1
    },

    sortLowPrice(products) {
      this.isActive = "asc";
      this.products = products
        .filter((item, index, arr) => {
          calculateDiscount(item.original_price, item.discount);
          return item.original_price === arr[index].original_price;
        })
        .sort((a, b) => a.original_price - b.original_price);
    },

    sortHighPrice(products) {
      this.isActive = "desc";
      this.products = products
        .filter((item, index, arr) => {
          calculateDiscount(item.original_price, item.discount);
          return item.original_price === arr[index].original_price;
        })
        .sort((a, b) => b.original_price - a.original_price);
    },

    sortPromotion(products) {
      this.isActive = "prom";
      this.products = products
        .filter((item, index, arr) => {
          return item.discount === arr[index].discount;
        })
        .sort((a, b) => b.discount - a.discount);
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

      .active_btn {
        border: 1px solid $color-primary;
        color: $color-primary;
      }
    }
  }
}
</style>
