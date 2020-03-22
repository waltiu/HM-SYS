import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import '../src/public/index'
import 'element-ui/lib/theme-chalk/index.css'
import 'vue2-animate/dist/vue2-animate.min.css'
import './config/tableConfig/index'
import './tools/http'
import './tools/resetSession'
import './tools/base64'
Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
var preD = function (e) {
  e.preventDefault()
}
document.addEventListener('touchmove', preD, { passive: false })
