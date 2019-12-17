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
import { LineHandle } from '../../../../class/map/handle/linesHandle/linesHandle'
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
        this.LineHandle = new LineHandle(this.mapDom.map, 'village')

        const a = [
          [
            [123.413131, 41.795428],
            [121.6341944408, 41.9887584786]
          ],
          [
            [123.403396, 41.799682],
            [120.6341944408, 40.9887584786]
          ]
        ]
        const b = {
          arrowStyle: null, // arrow-style : now we only have classic
          arrowPlacement: 'vertex-last', // arrow's placement: vertex-first, vertex-last, vertex-firstlast, point
          visible: true,
          editable: true,
          cursor: null,
          shadowBlur: 0,
          shadowColor: 'black',
          draggable: false,
          dragShadow: false, // display a shadow during dragging
          drawOnAxis: null,
          symbol: {
            'lineColor': '#1bbc9b',
            'lineWidth': 3
          }
        }
        this.LineHandle.show(a, b)
      } else {
        this.LineHandle.hidden()
      }
    }
  }
}
</script>
