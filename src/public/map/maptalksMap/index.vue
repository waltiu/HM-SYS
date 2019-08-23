<template>
  <div>
    <div id="map" class="container"></div>
  </div>
</template>
<script>
import 'maptalks/dist/maptalks.css'
import * as maptalks from 'maptalks'

export default {
  name: 'maptalksMap',
  data () {
    return {
      map: {}

    }
  },
  watch: {
    '$store.state.defaultCenter': function () {
      this.map.setCenter([this.$store.state.defaultCenter.lng, this.$store.state.defaultCenter.lat])
    },
    '$store.state.defaultZoom.zoom': function () {
      this.map.setZoom(this.$store.state.defaultZoom.zoom)
    }
  },
  methods: {

  },
  mounted () {
    this.map = new maptalks.Map('map', {
      center: [this.$store.state.defaultCenter.lng, this.$store.state.defaultCenter.lat],
      zoom: this.$store.state.defaultZoom.zoom,
      minZoom: 10,
      maxZoom: 19,
      baseLayer: new maptalks.TileLayer('base', {
        'urlTemplate': 'http://online4.map.bdimg.com/tile/?qt=vtile&x={x}&y={y}&z={z}&styles=pl&scaler=300',
        spatialReference: {
          projection: 'baidu'
        },
        'coordinate': 'BD',
        'subdomains': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        attribution: '&copy; waltiu '
      })
    })
  }
}
</script>

<style >
.container {
  width: 100%;
  height: 80vh;
}
</style>
