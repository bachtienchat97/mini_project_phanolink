<template>
  <b-skeleton animation="fade" :width="width" :height="height" style="marginBottom: margin"></b-skeleton>
</template>

<script>
export default {
  name: "SkeletonBar",

  props: {
    width: {
      type: String
    },

    height: {
      type: String
    },

    margin: {
      type: String
    }
  }
}
</script>

<style>

</style>