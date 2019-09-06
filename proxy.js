
const serverConfig = {

  '/searchLocaltion': {
    target: 'http://api.map.baidu.com/',
    changeOrigin: true,
    pathRewrite: {
      '^/searchLocaltion': ''
    }
  }
}

module.exports = serverConfig
