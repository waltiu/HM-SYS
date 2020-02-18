<template>
  <div>
    <slot></slot>
    <div id="map1" class="container1"></div>
  </div>
</template>
<script>
import 'maptalks/dist/maptalks.css'
import * as maptalks from 'maptalks'

export default {
  name: 'maptalksMap',
  data () {
    return {
      map: null
    }
  },
  watch: {
    '$store.state.defaultCenter': function () {
      this.map.setCenter([this.$store.state.defaultCenter.lng, this.$store.state.defaultCenter.lat])
    },
    '$store.state.defaultZoom.zoom': function () {
      this.map.setZoom(this.$store.state.defaultZoom.zoom)
    },
    zoom: function (newVal) {
      this.$store.commit('setZoom', parseInt(newVal))
    }
  },
  computed: {
    zoom: function () {
      if (this.map) { return this.map._zoomLevel }
    }
  },
  methods: {

  },
  mounted () {
    this.$nextTick(() => {
      this.map = new maptalks.Map('map1', {
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
      this.$emit('getMap', this.map)
    })
  }
}
</script>

<style >
.container1 {
  height: 90vh;
}
</style>
