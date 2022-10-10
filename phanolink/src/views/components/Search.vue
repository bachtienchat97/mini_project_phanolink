<template>
<div class="header-content__left">
 <input
    class="search"
    type="text"
    placeholder="Bạn đang tìm thuốc gì..."
    :value="search"
    @change="$emit('change',$event.target.value)"
/>
</div>
</template>

<script>
export default {
 name: 'Search',

 model: {
    prop: 'search',
    event: 'change'
  },

  props: {
    search: {
      type: String
    }
  },
  
}
</script>

<style lang="scss" scoped>
.header-content__left {
  .search {
        border: none;
        outline: none;
        border-radius: 5px 0 0 5px;
        padding: 5px 9px;
        width: 500px;
        background-color: #ffffff;
      }
}

</style>