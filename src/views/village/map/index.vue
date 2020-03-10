<template>
  <div>
    <i class="el-icon-map-location" style="fontSize:25px" @click="showInfo"></i>
    <button-dialog :info="info" @close="close">
      <map-info @getMap="getMap"></map-info>
    </button-dialog>
  </div>
</template>

<script>
import mapInfo from '../../map/index'
import { VillageHandle } from '../../../class/map/handle/linesHandle/extend/village'
export default {
  name: 'readOnMap',
  components: {
    mapInfo
  },
  data () {
    return {
      info: {},
      map: {}
    }
  },
  props: {
    raw: Object
  },
  watch: {
    map: function (newVal) {
      let info = this.raw.info
      this.$store.commit('changeCenter', info.mapCenter)
      this.$store.commit('setZoom', 14)
      this.drawInfo(info)
    }
  },
  methods: {
    showInfo () {
      this.info = this.raw.info
    },
    close () {
      this.info = null
      this.$emit('reload')
    },
    getMap (info) {
      this.map = info
    },
    drawInfo (info) {
      let mapInfo = []
      this.info.mapInfo.map(item => {
        mapInfo.push([item.lng, item.lat])
      })
      this.info.mapInfo = mapInfo
      this.VillageHandle = new VillageHandle(this.map, 'villageDetail')
      this.VillageHandle.show([this.info])

    }
  }

}
</script>

<style>
</style>