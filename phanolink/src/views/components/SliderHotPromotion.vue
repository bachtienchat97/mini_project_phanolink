<template>
  <div class="item-content">
    <div class="item" v-for="item in productList" :key="item.id">
      <img :src="item.img_path" :alt="item.name" v-if="item.is_hot" />
      <img :src="item.img_path" :alt="item.name" v-if="item.is_hot" />
      <img :src="item.img_path" :alt="item.name" v-if="item.is_hot" />
    </div>
  </div>
</template>

<script>

export default {
  name: "SliderHotPromotions",

  props: {
    productList: {
      type: Array
    }
  }
};
</script>

<style lang="scss" scoped>
.item-content {
  display: flex !important;
  margin-left: -10px;
  margin-bottom: 20px;

  .item {
    display: flex;
  }

  img {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-left: 10px;
    width: 365px;
    &:hover {
      opacity: 0.8;
      cursor: pointer;
      border: 1px solid #05a8d0;
    }
  }
}
</style>