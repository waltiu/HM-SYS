import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login'
import map from './views/map'
import main from './views/main'
import source from './views/village'
import error from './views/ERROR'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/error',
      name: 'error',
      component: error
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
router.beforeEach((to, from, next) => {
  if (to.path === '/' || to.path === '/error') {
    next()
  } else {
    console.log('2')
    let token = sessionStorage.getItem('token')
    if (token === null) {
      next('/error')
    } else {
      next()
    }
  }
})
export default router
