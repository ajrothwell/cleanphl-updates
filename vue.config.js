module.exports = {
  publicPath: '/wp-content/plugins/philly-litter-index',

  transpileDependencies: [
    // can be string or regex
    '@philly/mapboard',
    '@philly/vue-comps',
    '@philly/vue-mapping',
    '@philly/vue-datafetch',
    // /other-dep/
  ],
}
