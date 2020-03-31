import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login'
import map from './views/map'
import main from './views/main'

import village from './views/village'
import house from './views/house'
import school from './views/school'
import hospital from './views/hospital'
import Intermediary from './views/Intermediary'

import error from './views/ERROR'
import analysis from './views/Analysis'
import compare from './views/compare'
import oauth from './views/oauth'
import user from './views/user'
import houseDetail from './views/house/detail/info/index.vue'
import staff from './views/staff/index.vue'
import staffM from './views/staffM'

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
      path: '/oauth',
      name: 'oauth',
      component: oauth
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: houseDetail
    },
    {
      path: '/staff',
      name: 'staff',
      component: staff
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
          path: '/village',
          name: 'village',
          component: village
        },
        {
          path: '/hospital',
          name: 'hospital',
          component: hospital
        },
        {
          path: '/house',
          name: 'house',
          component: house
        },

        {
          path: '/Intermediary',
          name: 'Intermediary',
          component: Intermediary
        },
        {
          path: '/staffM',
          name: 'staffM',
          component: staffM
        },
        {
          path: '/school',
          name: 'school',
          component: school
        },
        {
          path: '/analysis',
          name: 'analysis',
          component: analysis
        },
        {
          path: '/compare',
          name: 'compare',
          component: compare

        },
        {
          path: '/user',
          name: 'user',
          component: user
        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.path === '/' || to.path === '/error' || to.path === '/oauth') {
    next()
  } else {
    let token = sessionStorage.getItem('token')
    if (token === null) {
      next('/error')
    } else {
      next()
    }
  }
})
export default router
