<template>
  <el-dialog
    title="地图选点"
    :visible.sync="dialogVisible"
    width="90%"
    :modal="modal"
    top="2vh"
    @close="close"
  >
    <map-info @getMap="getMap"></map-info>
  </el-dialog>
</template>

<script>
import mapInfo from '../../../views/map/index'
import { HospitalHandle } from '../../../class/map/handle/iconsHandle/extend/hospital'
import { HouseHandle } from '../../../class/map/handle/iconsHandle/extend/house'
import { IntermediaryHandle } from '../../../class/map/handle/iconsHandle/extend/Intermediary'
import { SchoolHandle } from '../../../class/map/handle/iconsHandle/extend/school'
import { VillageHandle } from '../../../class/map/handle/linesHandle/extend/village'
import { DefaultHandle } from '../../../class/map/handle/iconsHandle/extend/default'
export default {
  name: 'slectPoint',
  data () {
    return {
      dialogVisible: false,
      modal: false,
      map: '',
      code: [],
      drawTool: '',
      drawLine: '',
      submitMapInfo: [],
      mapCenter: {},
      confimState: false
    }
  },
  components: {
    mapInfo
  },
  props: {
    selectInfo: Boolean,
    type: String,
    resetPoint: Boolean
  },
  watch: {
    selectInfo: function (newVal) {
      this.dialogVisible = newVal
    },
    resetPoint: function (newVal) {
      this.dialogVisible = newVal
      this.code = []
      this.submitMapInfo = []
    },
    code: {
      handler: function (newVal) {

        let iconList = []
        newVal.map(item => {
          iconList.push({
            mapInfo: item,
          })
        })
        this.drawTool.hidden()
        this.drawTool.show(iconList)

        if (this.type === 'village') {
          let info = []
          info.push({ mapInfo: newVal })
          this.drawLine.hidden()
          this.drawLine.show(info)
        }



      },
      deep: true
    }
  },

  methods: {
    getMap (map) {
      this.map = map
      this.drawInfo(map)
      if (this.type === 'village') {
        this.drawVillage(this.code)
      } else {
        this.drawOther(this.code)
      }
    },
    drawInfo (map) {
      switch (this.type) {
        case 'hospital':
          this.drawTool = new HospitalHandle(map, 'hospital')
          break;
        case 'house':
          this.drawTool = new HouseHandle(map, 'house')
          break;
        case 'Intermediary':
          this.drawTool = new IntermediaryHandle(map, 'Intermediary')
          break;
        case 'school':
          this.drawTool = new SchoolHandle(map, 'school')

          break;
        default:
          this.drawLine = new VillageHandle(map, 'defaultVillage')
          this.drawTool = new DefaultHandle(map, 'default')
      }
    },
    drawVillage () {
      this.map.on('click', (e) => {
        this.$confirm('您已选择：精度' + e.coordinate.x + ' , ' + '纬度' + ' ' + e.coordinate.y, {
          customClass: 'alertdialog',
          confirmButtonText: '下一个坐标',
          cancelButtonText: '确定',
          type: 'warning'
        }).catch(() => {

          this.confimState = true
        }).finally(() => {
          this.code.push([
            e.coordinate.x,
            e.coordinate.y
          ])
          this.submitMapInfo.push(
            {
              lng: e.coordinate.x,
              lat: e.coordinate.y
            }
          )
          this.mapCenter = {
            lng: e.coordinate.x,
            lat: e.coordinate.y
          }
          if (this.confimState) {
            this.close()
          }
        })
      })
    },
    drawOther () {
      this.map.on('click', (e) => {
        this.$alert('您已选择：精度' + e.coordinate.x + ' , ' + '纬度' + ' ' + e.coordinate.y, {
          confirmButtonText: '确定',
          callback: action => {
            this.mapCenter = {
              lng: e.coordinate.x,
              lat: e.coordinate.y
            }
            this.submitMapInfo = {
              lng: e.coordinate.x,
              lat: e.coordinate.y
            }
            this.code.push([
              e.coordinate.x,
              e.coordinate.y
            ])

            this.close()
          }
        })
      })
    }
    ,
    close () {
      this.$emit('reload', {
        mapInfo: this.submitMapInfo,
        mapCenter: this.mapCenter
      })
      this.confimState = false
    }
  },


}
</script>

<style>
</style>