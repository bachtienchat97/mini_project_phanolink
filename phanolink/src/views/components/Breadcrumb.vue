<template>
  <div
    class="breadcrumb-wrap container-fluid"
    v-if="this.$route.meta.breadcrumb"
  >
    <b-breadcrumb :items="items" class="container"></b-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
  data() {
    return {
      items: [
        {
          text: "Trang chủ",
          href: "/",
        },
      ],
    };
  },

  watch: {
    "$route.path": {
      handler(path) {
        const breadcrumb = this.$route.meta.breadcrumb
        if (this.items.filter((item) => item.href === path).length === 0 && breadcrumb) {
          this.items.push({
            text: this.$route.params.slug.replace(/-/g, " "),
            href: path,
          });
        }

        if (this.items.length > 2) {
          this.items.splice(1, 1);
        }
      },
      deep: true,
      immediate: true,
    },
  },
};
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