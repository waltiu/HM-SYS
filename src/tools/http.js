import axios from 'axios'
import Vue from 'vue'

const http = axios.create()
http.interceptors.request.use((config) => {
  config.headers['Tel'] = 'TL15922232724'
  return config
})
http.interceptors.response.use(response => {
  return response
}
  // , error => {
  //   console.log(error)
  // }
)
Vue.prototype.$http = http
