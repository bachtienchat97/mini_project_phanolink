<template>
  <div class="cart-wrapper container">
    <div class="cart">
      <div class="cart-left">
        <div class="header-mark">
          <h4>giỏ hàng</h4>
          <b>( 1 sản phẩm )</b>
        </div>

        <div class="cart-title">
          <div class="title-product">Sản Phẩm</div>
          <div class="title-price">Giá</div>
          <div class="title-amount">Số Lượng</div>
        </div>
      </div>

      <div class="cart-right">
        <div class="code-discount">
          <div class="code-discount-title">
            <b>Mã giảm giá</b>
          </div>
          <div class="insert-code">
            <input
              class="text-code"
              type="text"
              placeholder="Nhập mã giảm giá..."
            />
            <div class="apply-code">áp dụng</div>
          </div>
        </div>

        <div class="pay">
          <div class="pay-first">
            <div class="provisional">
              <p>Tạm Tính:</p>
              <span>272.000 đ</span>
            </div>
            <div class="discount">
              <p>Giảm giá:</p>
              <span>20.000 đ</span>
            </div>
          </div>

          <div class="pay-second">
            <p>Thành Tiền:</p>
            <div class="price-sum">
              <h2>252.000 đ</h2>
              <p>(Đã Bao Gồm VAT Nếu Có)</p>
            </div>
          </div>
        </div>
        <router-link :to="{ name: 'Cart' }">
          <button type="button" class="order-process" @click="onClickOrder">
            tiến hành đặt hàng
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import { loginOrNot } from "@/utils/loginOrNot";
import { userLocal } from '@/utils/userLocalStorage';

export default {
  name: "Cart",

  computed: {
    ...mapGetters({
      userStore: "auth/allUser",
    }),
  },

  mounted() {},

  methods: {
    onClickOrder() {
    const userStorage = JSON.parse(userLocal);
      return loginOrNot(userStorage,this.userStore);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/styles";
.cart-wrapper {
  margin: 20px auto;

  .cart {
    display: flex;

    .cart-left {
      background-color: $color-white;
      width: 70%;

      .cart-title {
        display: flex;
        border-bottom: 1px solid $color-common;
        padding: 25px 0 5px 30px;

        .title-product {
          width: 60%;
        }

        .title-price,
        .title-amount {
          width: 20%;
        }
      }

      .header-mark::before {
        content: "";
        position: absolute;
        /* width: 0; */
        /* height: 0; */
        top: 0;
        left: -8px;
        border-bottom: 5px solid #016b68;
        border-left: 8px solid transparent;
      }

      .header-mark {
        display: flex;
        background-color: #01adab;
        width: 160px;
        height: 55px;
        margin-left: 30px;
        -khtml-transform: translateY(-4px);
        transform: translateY(-4px);
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #ffffff;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        position: relative;
        font-size: 14px;
        font-size: 0.875rem;
      }
    }

    .cart-right {
      margin-left: 20px;
      width: 30%;

      .order-process {
        background-color: $color-red;
        padding: 10px 40px;
        text-transform: uppercase;
        color: $color-white;
        font-size: 20px;
        width: 100%;
        font-weight: bold;
        &:hover {
          opacity: 0.9;
          cursor: pointer;
        }
      }

      .code-discount,
      .pay {
        margin-bottom: 20px;
        background-color: $color-white;
      }

      .code-discount {
        padding: 20px;

        .code-discount-title {
          padding-bottom: 10px;
          border-bottom: 1px solid $color-common;
        }

        .insert-code {
          display: flex;
          margin-top: 15px;
          align-content: center;
          justify-content: space-evenly;

          .apply-code {
            text-transform: uppercase;
            color: $color-white;
            font-size: 15px;
            padding: 8px 20px;
            background-color: #01adab;
            font-weight: bold;
            flex-shrink: 0;
            outline: none;

            &:hover {
              cursor: pointer;
              opacity: 0.9;
            }
          }
        }

        .text-code {
          outline: none;
          border: 1px solid $color-common;
          padding: 8px 0 8px 15px;
          overflow: hidden;
          font-size: 15px;
        }
      }

      .pay {
        display: flex;
        flex-direction: column;
        padding: 35px 20px;

        .pay-first {
          border-bottom: 1px solid $color-common;
          padding-bottom: 10px;

          .provisional,
          .discount {
            display: flex;
            justify-content: space-between;
          }
        }

        .pay-second {
          display: flex;
          justify-content: space-between;
          padding-top: 15px;
        }
      }
    }
  }
}
</style>