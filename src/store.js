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
      zoom: '17'
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
    }

  },
  actions: {

  }
})
