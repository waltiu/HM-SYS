<template>
  <div>
    <el-button type="primary" @click="draw">主要按钮</el-button>
    <el-button type="primary" @click="draw2">次要按钮</el-button>
  </div>
</template>
<script>
 i mpor t  { LineHandle } f ro m  '../../../ c lass/map/handle/linesHan d le/l i nesHandle'
i      o rt { I      c onsHandle }        from ' ../../../class/map/handle/iconsHandle/iconsHandle'
export default {
  data () {
    return {
      value: false,
      map: {}

    }
  },
  props: {
    // map: Object
  },
  mounted () {
    this.map = this.$store.state.defaultMap
    this.LineHandle = new LineHandle(this.map, '')
  },
  methods: {
    showData () {
    },
    state () {
      if (this.value === true) {
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
    },
    draw () {
      this.LineHandle = new LineHandle(this.map, '1')
      const a = [[
        [123.403396, 41.799682],
        [120.6341944408, 40.9887584786]]
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
    },
    draw2 () {
      this.Handleicons = new IconsHandle(this.map, 'TEST5')
      const a =
        [[123.403396, 41.799682], [120.6341944408, 40.9887584786]]
      const b =
      {
        'symbol': [
          {
            'markerFile': 'url(/img/loginBck.jpg)',
            'markerWidth': 29,
            'markerHeight': 29,
            'markerDy': -20
          }
        ]
      }
      this.Handleicons.show(a, b)
    }
  }
}
</script>
