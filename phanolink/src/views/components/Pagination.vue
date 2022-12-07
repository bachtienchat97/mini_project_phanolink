<template>
  <div>
    
  </div>
</template>

<script>
export default {
  name: "Pagination",

  props: {
    productsList: {
      type: Array,
    },
    perPage: {
      type: Number,
      default: 8
    },

    currentPage: {
      type: Number,
      default: 1
    }
  },

  data() {
    return {
    };
  },

  computed: {
   
  },

  methods: {
    updateData(currentPage) {
      console.log(currentPage, "r");
    },
  },

};
</script>

<style scoped>
</style>