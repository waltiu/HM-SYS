import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login'
import map from './views/map'
import main from './views/main'
import source from './views/source'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/main',
      name: 'main',
      component: main,
      children: [
        {
          path: '/map',
          name: 'map',
          component: map
        },
        {
          path: '/source',
          name: 'source',
          component: source
        }
      ]
    }
  ]
})
