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
            <switch-button :type="type" @showMapInfo="showMapInfo" class="switchButton"></switch-button>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<script>
import search from './components/search'
import switchButton from './components/switch'

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
    search,
    switchButton
  },

  inject: ['mapDom'],
  mounted () {
    this.map = this.mapDom.map
  },
  methods: {
    showMapInfo (info) {
      if (info) {
        this.VillageHandle = new VillageHandle(this.mapDom.map, 'village')
        this.VillageHandle.show(info)
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

.line {
  width: 100px;
  height: 10px;
  background-color: #a0522d;
  top: 10px;
  position: relative;
}
.switchButton {
  position: relative;
  margin-left: 100px;
  top: -3px;
}
</style>
