<template>
<div class="breadcrumb-wrap container-fluid">
    <b-breadcrumb :items="items" class="container"></b-breadcrumb>
</div>  
</template>

<script>
export default {
  data() {
      return {
          items: [
              {
                  text: 'Trang Chủ',
                  href: '#'
              },
              {
                  text: 'Dược Phẩm',
                  active: true
              }
          ]
      }
  }
}
</script>

<style lang="scss" scoped>
.breadcrumb-wrap {
    background: #e5dfdf;
    padding: 15px 0;

    .breadcrumb {
        padding: 0 12px;
    }
}
</style>