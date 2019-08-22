import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    defaultCenter: {
      lat: 41.800475,
      lng: 123.401711,
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
