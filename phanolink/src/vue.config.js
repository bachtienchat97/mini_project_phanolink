module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: `
                  @import "../src/assets/scss/helpers/_variables"
                  @import "../src/assets/scss/helpers/_mixins"
                `
            }
        }
    }
}