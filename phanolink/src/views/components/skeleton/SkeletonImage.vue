<template>
    <b-skeleton-img  :width="width" :height="height"></b-skeleton-img>
</template>

<script>
export default {
  name: "SkeletonImage",
  props: {
    width: {
      type: String
    },
    height: {
      type: String
    },
  }
}
</script>

<style scoped>

</style>