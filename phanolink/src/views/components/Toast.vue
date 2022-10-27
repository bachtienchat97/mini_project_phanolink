<template>
  <div >
    
   <button type="button" @click="runToast">
   </button>
  </div>
</template>

<script>

export default {
  name: "Toast",
  data() {
    return {
      snackbar: true,
      text: `Hello, I'm a snackbar`,
      timeout: 6000,
    };
  },

  methods: {
    runToast() {
       this.$moshaToast('Hmm..not as easy huh')
    }
  },
};
</script>
<style scoped lang="scss">
</style>

