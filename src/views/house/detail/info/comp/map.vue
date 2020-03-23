<template>
  <div class="location">
    <div id="locationMap" class="container"></div>
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
  props: {
    info: [Object, String]
  },
  watch: {
    info: function (newVal) {
      let center = [newVal.mapCenter.lng, newVal.mapCenter.lat]
      console.log(center)
      this.map = new maptalks.Map('locationMap', {
        center: center,
        zoom: 18,
        minZoom: 8,
        maxZoom: 19,
        baseLayer: new maptalks.TileLayer('base', {
          urlTemplate:
            'http://online4.map.bdimg.com/tile/?qt=vtile&x={x}&y={y}&z={z}&styles=pl&scaler=300',
          spatialReference: {
            projection: 'baidu'
          },
          attribution: '&copy; waltiu '
        })
      })
    }
  },
  mounted () {}
}
</script>

<style scoped>
.container {
  height: 40vh;
  width: 35vw;
}
.location {
  position: absolute;
  left: 900px;
  top: 710px;
}
</style>
