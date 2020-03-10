<template>
  <div>
    <map-info @getMap="getMap">
      <right-bar :map="map" :style="{'z-index': '999', position: 'absolute', 'right': 0}"></right-bar>
    </map-info>
  </div>
</template>

<script>
import mapInfo from './components/map'
import rightBar from '../../../views/map/rightBar'
export default {
  name: 'sourceMap',
  components: {
    mapInfo,
    rightBar
  },
  data () {
    return {
      map: {}
    }
  },
  methods: {
    getMap (info) {
      this.map = info
    }
  }
}
</script>

<style>
</style>