

export default {
  methods: {
    convertSlug(str) {
      return str.split(" ").join("-");
    },

    createToast (message, title, variant = "secondary", solid = true) {
      this.$bvToast.toast(message, {
        title,
        variant,
        solid,
        autoHideDelay: 5000,
        noCloseButton: true
      });
    },

  },
};
