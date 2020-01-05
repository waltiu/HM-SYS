import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules/main.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  state: {
    // 41.795428, 123.413131
    defaultCenter: {
      lat: 41.795428,
      lng: 123.413131
    },
    defaultZoom: {
      zoom: '17'
    },
    defaultMap: {},
    token: '',
    query: ''
  },
  mutations: {
    changeCenter (state, info) {
      state.defaultCenter = info
    },
    changeZoom (state, info) {
      state.defaultZoom.zoom = info
    },
    addZoom (state) {
      if (state.defaultZoom.zoom < 19) {
        state.defaultZoom.zoom++
      }
    },
    reduceZoom (state) {
      if (state.defaultZoom.zoom > 8) {
        state.defaultZoom.zoom--
      }
    },
    setZoom (state, info) {
      state.defaultZoom.zoom = info
    },
    getMap (state, info) {
      state.defaultMap = info
    },
    getQuery (state, info) {
      state.query = info
    }

  },
  actions: {

  }
})
