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
import { HouseHandle } from '../../../class/map/handle/iconsHandle/extend/house'
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
      mapInfo = [this.info.mapInfo.lng, this.info.mapInfo.lat]
      this.info.mapInfo = mapInfo
      this.HouseHandle = new HouseHandle(this.map, 'houseDetail')
      this.HouseHandle.show([this.info])
    }
  }

}
</script>

<style>
</style>