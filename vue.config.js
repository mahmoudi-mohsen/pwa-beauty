const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    output: {filename: '[name].[hash].bundle.js'},
  },
  pwa: {
    name: 'گیسو سیفی',
    themeColor: '#222222',
    msTileColor: '#d7b46a',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    iconPaths: {
      faviconSVG: 'static/favicon.png',
      favicon32: 'static/favicon-32x32.png',
      favicon16: 'static/favicon-16x16.png',
      appleTouchIcon: 'static/apple-touch-icon-152x152.png',
      msApplicationIcon: 'static/msapplication-icon-144x144.png',
      maskIcon: 'static/msapplication-icon-144x144.png',
      msTileImage: 'static/msapplication-icon-144x144.png'
    },
  },
})
