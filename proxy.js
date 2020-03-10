
const serverConfig = {

  // '/searchLocaltion': {
  //   target: 'http://api.map.baidu.com/',
  //   changeOrigin: true,
  //   pathRewrite: {
  //     '^/searchLocaltion': '/place/v2/search'
  //   }
  // },
  // '/getLocation': {
  //   target: 'http://api.map.baidu.com/',
  //   changeOrigin: true,
  //   pathRewrite: {
  //     '^/getLocation': ''
  //   }
  // },
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
  },
  '/getGithubUserInfo': {
    target: 'https://api.github.com/user',
    changeOrigin: true,
    pathRewrite: {
      '^/getGithubUserInfo': ''
    }
  },
  '/api': {
    target: 'http://localhost:5000/',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '/api'
    }
  }
}
module.exports = serverConfig
