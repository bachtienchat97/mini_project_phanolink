<template>
  <div>
    <transition name="fade">
      <slot/>
    </transition>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.fade-enter-active {
  transition: opacity 0.8s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>