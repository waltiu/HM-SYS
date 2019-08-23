import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 41.795428, 123.413131
    defaultCenter: {
      lat: 41.795428,
      lng: 123.413131,
    }
  }
  ,
  mutations: {
    changeCenter (state, info) {
      state.defaultCenter = info

    }

  },
  actions: {

  }
})
