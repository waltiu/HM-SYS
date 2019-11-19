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
    },
    zoom: function () {
      // parseInt(this.map._zoomLevel)
      this.$store.commit('setZoom', parseInt(this.map._zoomLevel))
    }
  },
  computed: {
    zoom: function () {
      return this.map._zoomLevel
    }
  },
  methods: {

  },
  mounted () {
    // this.map.getZoom()
    // console.log(this.zoom)
    this.map = new maptalks.Map('map', {
      center: [this.$store.state.defaultCenter.lng, this.$store.state.defaultCenter.lat],
      zoom: this.$store.state.defaultZoom.zoom,
      minZoom: 8,
      maxZoom: 19,
      baseLayer: new maptalks.TileLayer('base', {
        'urlTemplate': 'http://online4.map.bdimg.com/tile/?qt=vtile&x={x}&y={y}&z={z}&styles=pl&scaler=300',
        spatialReference: {
          projection: 'baidu'
        },
        attribution: '&copy; waltiu '
      })
    })
    this.$store.commit('getMap', this.map)
  }
}
</script>

<style >
.container {
  width: 110%;
  height: 100vh;
}
</style>
