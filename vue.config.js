// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-excel/' : '/',

  configureWebpack: {
    resolve: {
      fallback: {
        path: false,
      },
    },
  },
}
