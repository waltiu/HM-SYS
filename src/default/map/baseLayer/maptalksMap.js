import 'maptalks/dist/maptalks.css'
import * as maptalks from 'maptalks'
export const map = new maptalks.Map('map', {
  center: [123.4254440161916, 41.79928173774194],
  zoom: 18,
  minZoom: 5,
  maxZoom: 19,
  baseLayer: new maptalks.TileLayer('base', {
    urlTemplate: 'http://218.25.36.152:9009/arctiler/google/services/TiandituMap3857/Google/{z}/{x}/{y}.png',
    attribution: '&copy; waltiu '
  })
})
