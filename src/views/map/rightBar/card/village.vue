<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>显示小区</span>
        <el-switch
          v-model="value"
          active-color="#13ce66"
          inactive-color="#ff4949"
          @change="state()"
        ></el-switch>
      </div>
      <div>切换上面的开关来切换是否显示小区范围</div>
    </el-card>
  </div>
</template>
<script>
import { VillageHandle } from '../../../../class/map/handle/linesHandle/extend/village.js'
export default {
  name: 'region',
  data () {
    return {
      value: false,
      map: {}
    }
  },
  inject: ['mapDom'],
  mounted () {
    this.map = this.mapDom.map
    console.log(this.map)
  },
  methods: {
    state () {
      if (this.value === true) {
        this.VillageHandle = new VillageHandle(this.mapDom.map, 'village')

        const a = [
          {
            name: 'waltiu',
            coordinate: [
              [123.413131, 41.795428],
              [121.6341944408, 41.9887584786]
            ]
          }, {
            name: 'waltiu',
            coordinate: [
              [123.403396, 41.799682],
              [120.6341944408, 40.9887584786]
            ]
          }

        ]

        this.VillageHandle.show(a)
      } else {
        this.VillageHandle.hidden()
      }
    }
  }
}
</script>
