<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>显示学校</span>
        <el-switch
          v-model="value"
          active-color="#13ce66"
          inactive-color="#ff4949"
          @change="state()"
        ></el-switch>
      </div>
      <div>切换上面的开关来切换是否显示学校标注</div>
    </el-card>
  </div>
</template>
<script>
import { IconsHandle } from '../../../../class/map/handle/iconsHandle/iconsHandle'
export default {
  name: 'iconsSchool',
  data () {
    return {
      value: false,
      map: {}
    }
  },
  inject: ['mapDom'],

  mounted () {
    this.map = this.$store.state.defaultMap
  },
  methods: {
    state () {
      if (this.value === true) {
        this.IconsHandle = new IconsHandle(this.mapDom.map, 'source')

        const a =
          [
            [123.403396, 41.799682],
            [120.6341944408, 40.9887584786]
          ]
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
        this.IconsHandle.show(a, b)
      } else {
        this.IconsHandle.hidden()
      }
    }
  }

}
</script>
