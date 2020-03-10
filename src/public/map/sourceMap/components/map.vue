<template>
  <div>
    <slot></slot>
    <div id="map" class="container"></div>
  </div>
</template>
<script>
import 'maptalks/dist/maptalks.css'
import * as maptalks from 'maptalks'

export default {
  name: 'sourceMap',
  data () {
    return {
      map: null
    }
  },
  mounted () {
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
    this.$emit('getMap', this.map)
  }
}
</script>

<style >
.container {
  height: 90vh;
}
</style>
