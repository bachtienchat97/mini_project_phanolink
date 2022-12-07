<template>
  <div class="order-product">
    <router-link
      :to="{ path: '/cart' }"
      :disabled="isDisabled"
      :class="{
        'disabled-order': products.quantity === 0,
        'enable-order': products.quantity !== 0,
      }"
    >
      <img src="@/assets/img/add-to-cart.png" alt="add-to-cart" />
      <span class="tooltipText" v-if="products.quantity === 0"
        >sản phẩm này hiện cháy hàng</span
      >
      <span> chọn mua </span>
    </router-link>

    <div class="favorite">
      <img src="@/assets/img/favorite.png" alt="favorite" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import { getStorage } from "@/utils/localStorage";

export default {
  name: "OrderProduct",
  props: { products: Object },

  data() {
    return {
      isDisabled: false,
    };
  },

  computed: {
    ...mapGetters({
      user: "auth/allUser",
    }),
  },

  methods: {
    async orderClicked() {
      const userStore = await this.user,
        userStorage = await JSON.parse(getStorage());

      if (userStore.name == undefined && userStorage == null) {
        this.$router.push({ path: "/login" }).catch((e) => {
          throw new Error("error", e);
        });
      } else if (userStore.name == undefined || userStorage == null) {
        this.$router.push({ path: "/login" }).catch((e) => {
          throw new Error("error", e);
        });
      } else false;

      if (this.products.quantity === 0) {
        this.isDisabled = true;
        return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/styles";

.order-product {
  display: flex;
  align-items: center;
  margin-top: 10px;

  .favorite {
    background-color: $primary-green;
    border-radius: 4px;
    padding: 7px 6px;

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
    position: relative;
    display: flex;
    align-items: center;
    background-color: $color-common;
    margin-right: 10px;
    padding: 10px 15px;
    color: $color-default-lighter;
    text-transform: uppercase;
    font-weight: bold;
    border-radius: 4px;
    border: 1px solid $color-default-darker;

    .tooltipText::before {
      content: "";
      position: absolute;
      bottom: -1px;
      left: -7px;
    }

    .tooltipText {
      visibility: hidden;
      text-transform: lowercase;
      background-color: $color-btn;
      font-size: 15px;
      color: $color-primary;
      text-align: center;
      -khtml-transform: translateY(-4px);
      transform: translateY(-4px);
      padding: 5px 8px;
      border: 1px solid $color-primary;
      border-radius: 5px;
      /* Position the tooltip */
      position: absolute;
      top: -38px;
      right: -150px;
      z-index: 1;
    }

    &:hover .tooltipText {
      visibility: visible;
    }

    &:hover {
      cursor: pointer;
      box-shadow: #8b6c6c33 0 2px 8px;
      opacity: 0.9;
      background-color: #fff;
    }

    img {
      object-fit: cover;
      margin-right: 10px;
      width: 25px;
    }
  }

  .enable-order {
    display: flex;
    align-items: center;
    background-color: $color-btn;
    margin-right: 10px;
    padding: 10px 15px;
    color: $color-btn-2;
    text-transform: uppercase;
    font-weight: bold;
    border-radius: 4px;
    border: 1px solid $color-btn-2;

    &:hover {
      cursor: pointer;
      box-shadow: #8b6c6c33 0 2px 8px;
      opacity: 0.9;
      background-color: #fff;
    }

    img {
      object-fit: cover;
      margin-right: 10px;
      width: 25px;
    }
  }
}
</style>