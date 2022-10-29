<template >
    <div class="skeleton">
      <div class="card-img">
        <b-skeleton-img
          :width="'100%'"
          :height="'180px'"
          style="margin-bottom: 5px"
        ></b-skeleton-img>
      </div>

      <div class="card-description">
        <b-skeleton animation="fade" width="90%" :style="{ marginBottom: marginBottom }"></b-skeleton>

        <div class="description-wrap">
          <b-skeleton animation="fade" width="90%" style="margin-bottom: 6px;"> </b-skeleton>

          <b-skeleton animation="fade" width="90%"> </b-skeleton>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "SkeletonCard",
  props: {
    amount: {
      type: Number
    }
  },

  data() {
    return {
      marginBottom: 5
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/styles";

.skeleton {
  padding: 10px;
  max-width: 300px;
  width: 230px;
  background-color: $color-white;
  .card-description {
    font-size: 14px;
  }

  .description-wrap {
    margin-top: 6px;
  }

  .card-img {
    margin-bottom: 10px;
    img {
      height: 180px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
}
</style>