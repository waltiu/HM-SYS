
const serverConfig = {

  '/searchLocaltion': {
    target: 'http://api.map.baidu.com/',
    changeOrigin: true,
    pathRewrite: {
      '^/searchLocaltion': '/place/v2/search'
    }
  },
  '/getLocation': {
    target: 'http://api.map.baidu.com/',
    changeOrigin: true,
    pathRewrite: {
      '^/getLocation': ''
    }
  },
  '/searchLocation/': {
    target: 'http://api.map.baidu.com',
    changeOrigin: true,
    pathRewrite: {
      '^/searchLocation/': '/'
    }
  },
  '/github': {
    target: 'https://github.com',
    changeOrigin: true,
    pathRewrite: {
      '^/github': '/'
    }
  }
}
module.exports = serverConfig
