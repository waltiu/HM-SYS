import Vue from 'vue'

let config = {}
const files = require.context('../../views', true, /config.js$/)
// 路径，是否遍历子目录，正则表达式
files.keys().forEach(element => {
  const type = element.split('/')
  config[type[1]] = files(element).default
})
console.log(config)
Vue.prototype.$tableConfig = config
