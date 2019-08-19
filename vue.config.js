const proxyConfig = require('./proxy')

module.exports = {
  productionSourceMap: false,
  devServer: {
    host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
    proxy: proxyConfig
    // watchOptions: {
    //   poll: true
    // }
  }
}
