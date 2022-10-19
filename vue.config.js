// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-print/' : '/',

  configureWebpack: {
    resolve: {
      fallback: {
        path: false,
      },
    },
  },
}
