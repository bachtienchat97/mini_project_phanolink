<template>
  <div class="product-card-child">
    <template v-if="isLoadingProducts">
      <SkeletonProductList v-for="item in amount" :key="item" />
    </template>

      <div
        v-else
        class="product-card overflow-auto"
        v-for="product in productsList"
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
              v-if="product.quantity === 0 ? (checkSold = true) : !checkSold"
            >
              <div :class="{ 'card--sold': checkSold }" v-if="checkSold">Hết Hàng</div>
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
                color: #ffffff;
                font-size: 12px;
                display: flex;
                background: #acacac;
              "
              v-if="product.quantity > 0"
              >có sẵn: {{ product.quantity }}</span
            >
            <div class="card-img">
              <img :src="product.img_path" v-if="product.img_path" />
              <img src="@/assets/img/durex.png" v-else />
            </div>

            <div class="card-description">
              <p :class="{ 'text-overflow': true }">
                {{ product.description }}
              </p>

              <div class="description-wrap" v-if="product.discount > 0">
                <span class="discount-price"
                  >{{
                    calculateDis(product.original_price, product.discount)
                  }}
                  đ</span
                >

                <span class="root-price">{{ product.original_price }} đ</span>
              </div>
              <span class="discount-price" v-if="product.discount === 0"
                >{{ product.original_price }} đ</span
              >
            </div>
          </div>
        </router-link>
      </div>
  </div>
</template>

<script>
import SkeletonProductList from "@/views/components/skeleton/SkeletonCard";

import { calculateDiscount } from "@/utils/calculateDiscount";
import { freeShip } from "@/utils/freeShip";

import mixins from "@/mixins";

export default {
  name: "ProductCard",
  components: { SkeletonProductList },

  mixins: [mixins],

  props: {
    productsList: {
      type: Array,
    },
    isLoadingProducts: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      showLess: true,
      checkSold: false,
      isDiscount: true,
      amount: 12,
    };
  },

  computed: {
   
  },

  methods: {
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
.product-card-child {
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 10px;

  .product-card {
    width: 100%;
    .card {
      width: 100%;
      height: 100%;
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
        img {
          height: 180px;
          width: 100%;
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

        .discount-price {
          color: red;
          font-weight: bold;
        }

        .description-wrap {
          display: flex;
          flex-direction: column;

          .root-price {
            text-decoration: line-through;
            font-size: 13px;
            color: #a39797;
          }
        }
      }
    }
  }
}
</style>