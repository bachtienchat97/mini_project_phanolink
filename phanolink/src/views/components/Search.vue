<template>
  <div class="header-content__left">
    <input
      class="search"
      type="text"
      placeholder="Bạn đang tìm thuốc gì..."
      :value="search"
      @change="$emit('change', $event.target.value)"
    />
    <div class="btn-search" @click="$emit('search', $event.target.value)">
      <b-icon icon="search"></b-icon>
      Tìm kiếm
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",

  model: {
    prop: "search",
    event: "change",
  },

  props: {
    search: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/styles';

.header-content__left {
  .search {
    border: none;
    outline: none;
    border-radius: 5px 0 0 5px;
    padding: 8px 0 8px 15px;
    background-color: $color-white;
    width: 500px;
  }

    .btn-search {
        background: #e2e3e4;
        padding: 8px;
        cursor: pointer;
        border-radius: 0 5px 5px 0;
        &:hover {
          background: #b0b5b9;
        }

        .b-icon {
          margin-right: 5px;
        }
      }
}
</style>