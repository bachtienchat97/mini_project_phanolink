<template>
  <div class="NotFound">
    <p class="not-found">404</p>
    <p class="not-found-content title">Không tìm thấy trang</p>
    <p class="not-found-content">Trang bạn đang tìm kiếm không tồn tại</p>
    <div class="container-navigate-home">
      <router-link :to="{ name: 'Home', path: '/' }" class="back-to-home"
        >Quay về trang chủ</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound404',
 
  created() {
    this.$store.dispatch("category/getCategoryList", { root: true });
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/styles';

.NotFound {
  font-size: 1.4rem;
  text-align: center;
  color: $primary-green;
  padding: 7rem 0;
  border-top: 1px solid #d1d1d1;

  .not-found-content {
    color: $primary-green;
    font-weight: 500;
    font-size: 2rem;
  }
  .not-found-content.title {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
  .not-found {
    font-size: 15rem;
  }
  .back-to-home {
    display: inline-block;
    background-color: $primary-green;
    color: $color-default-lighter;
    padding: 1.5rem 2rem;
    font-weight: bold;
    font-size: 1.8rem;
    border-radius: 0.5rem;
    &:hover {
      color: $color-default-lighter;
      background-color: $primary-green;
    }
  }
  .container-navigate-home {
    margin-top: 4rem;
  }
}
</style>
