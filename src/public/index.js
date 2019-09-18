import Vue from 'vue'
import maptalksMap from './map/maptalksMap'
import ltPage from './ltPage'
import ltTable from './ltTable'
import ltSearch from './ltSearch'
import http from './methods/ajax'
Vue.component('maptalks-map', maptalksMap)
Vue.component('lt-page', ltPage)
Vue.component('lt-table', ltTable)
Vue.component('lt-search', ltSearch)
Vue.prototype.$getData = http
