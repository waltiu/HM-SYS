<template>
  <div>
    <map-info @getMap="getMap"></map-info>
  </div>
</template>

<script>
import mapInfo from '../../../../views/map/index'
import { HouseHandle } from '../../../../class/map/handle/iconsHandle/extend/house'

export default {
  name: 'houseOther',
  components: {
    mapInfo
  },
  data () {
    return {
      code: [],
      drawTool: '',
      formData: {}
    }
  },
  props: {
    info: Object
  },
  watch: {
    code: {
      handler: function (newVal) {
        let iconList = []
        newVal.map(item => {
          iconList.push({
            mapInfo: item
          })
        })
        if (iconList.length > 0) {
          this.drawTool.hidden()
          this.drawTool.show(iconList)
        }
      },
      deep: true
    }
  },
  methods: {
    getMap (map) {
      if (this.info.mapCenter) {
        map.setCenter([this.info.mapCenter.lng, this.info.mapCenter.lat])
        map.setZoom(18)
      }
      this.drawTool = new HouseHandle(map, 'house')

      map.on('click', (e) => {
        console.log(1)
        this.code = []

        this.$alert('您已选择：精度' + e.coordinate.x + ' , ' + '纬度' + ' ' + e.coordinate.y, {
          confirmButtonText: '确定',
          callback: action => {
            let mapCenter = {
              lng: e.coordinate.x,
              lat: e.coordinate.y
            }
            this.formData.mapInfo = mapCenter
            this.formData.mapCenter = mapCenter
            this.$emit('getInfo', this.formData)
            this.code.push([
              e.coordinate.x,
              e.coordinate.y
            ])
          }
        })
      })
    }
  }
}
</script>

<style>
</style>
