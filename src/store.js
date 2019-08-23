import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 41.795428, 123.413131
    defaultCenter: {
      lat: 41.795428,
      lng: 123.413131
    },
    defaultZoom: {
      zoom: '18'
    }
  },
  mutations: {
    changeCenter (state, info) {
      state.defaultCenter = info
    },
    changeZoom (state, info) {
      state.defaultZoom.zoom = info
    },
    addZoom (state) {
      state.defaultZoom.zoom++
    },
    reduceZoom (state) {
      state.defaultZoom.zoom--
    }

  },
  actions: {

  }
})
