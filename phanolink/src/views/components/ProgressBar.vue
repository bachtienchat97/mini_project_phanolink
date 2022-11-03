<template>
  <div class="wrap-progress-bar" v-if="isShow">
    <div class="progress-wrap">
      <b-progress
        class="progress-bars"
        height="3px"
        :value="percents"
        :striped="true"
      ></b-progress>
      <b-spinner
        class="spin"
        style="width: 1.3rem; height: 1.3rem"
        variant="primary"
      ></b-spinner>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ProgressBar",
  // props: {
  //   isShow: {
  //     type: Boolean
  //   }
  // },

  data() {
    return {
      percents: 0,
      isShow: false,
      count: 0,
    };
  },

  computed: {
    ...mapGetters({
      product: "product/productListByID",
    }),
  },

  beforeRouteUpdate(to, from, next) {
    if (from.path !== to.path) {
      this.progress();
    }else next()
    console.log(to, "to");
    console.log(from, "from");
    console.log(from.params.id !== to.params.id);
  },

  methods: {
    progress() {
      this.product.forEach((element) => {
        this.count = element;
      });
      let process = setInterval(() => {
        if (this.percents >= 100 && this.product) {
          clearInterval(process);
          this.isShow = false;
        } else {
          this.percents++;
          this.isShow = true;
        }
      }, this.count);
      return process;
    },
  },

  // created() {
  //   this.progress();
  // },
};
</script>

<style lang="scss" scoped>
.wrap-progress-bar {
  position: sticky;
  z-index: 9999;
  top: 0;
  left: 0;

  .progress-wrap {
    width: 100%;
    position: relative;

    .progress-bars {
      width: 100%;
      position: absolute;
      top: 0;
      right: 0;
    }

    .spin {
      position: absolute;
      top: 8px;
      right: 8px;
    }
  }
}
</style>