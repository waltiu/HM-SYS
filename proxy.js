

const serverConfig = {

  "/searchLocaltion": {
    target: "http://api.map.baidu.com/",
    changeOrigin: true,
    pathRewrite: {
      "^/searchLocaltion": ""
    }
  },
  "/getLocation": {
    target: "http://api.map.baidu.com/",
    changeOrigin: true,
    pathRewrite: {
      "^/getLocation": ""
    }
  },
  "/searchLocation/": {
    target: "http://api.map.baidu.com",
    changeOrigin: true,
    pathRewrite: {
      "^/searchLocation/": "/"
    }
  }
};


module.exports = serverConfig;
