<template>
  <div>
    <el-card class="box-card">
      <el-tabs type="card" v-model="extend">
        <el-tab-pane label="小区" name="first">
          <el-collapse>
            <el-collapse-item>
              <template slot="title">
                <img src="/img/map/extend.png" width="20px" height="20px" />
                <p>高级筛选</p>
              </template>
              <search :type="type"></search>
            </el-collapse-item>
          </el-collapse>
          <div class="switch">
            <div class="line"></div>
            <el-switch
              v-model="value"
              active-color="#13ce66"
              inactive-color="#ff4949"
              class="switchbutton"
              @change="state()"
            ></el-switch>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<script>
import search from './components/search'
import { VillageHandle } from '../../../../class/map/handle/linesHandle/extend/village'
export default {
  name: 'village',
  data () {
    return {
      value: false,
      map: {},
      extend: 'first',
      type: 'village'
    }
  },
  components: {
    search
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
<style>
.switch {
  position: relative;
  margin-top: 20px;
}
.switchbutton {
  position: relative;
  left: 220px;
}
.line {
  width: 100px;
  height: 10px;
  background-color: rgb(179, 154, 18);
  top: 10px;
  position: relative;
}
</style>
