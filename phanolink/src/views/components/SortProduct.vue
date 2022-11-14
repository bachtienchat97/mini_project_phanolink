<template>
  <div class="product-sort" >
    <span class="top-title"> Ưu tiên xem : </span>
    <span v-for="item in productList" :key="item.id" class="ascending active" @click="sortLowPrice(item)"
      >Giá Thấp</span
    >
    <span class="descrement">Giá Cao</span>
    <span class="promotion">Khuyến mãi</span>
  </div>
</template>

<script>
export default {
  name: "sortProduct",

  props: {
    productList: {
      type: Array
    }
  },

  methods: {
    sortLowPrice(item) {
      console.log(item, 't')
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/styles";
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
</style>