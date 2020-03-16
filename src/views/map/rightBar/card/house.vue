<template>
  <div>
    <el-card class="box-card">
      <el-tabs type="card" v-model="extend">
        <el-tab-pane label="房屋" name="first">
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
            <img src="/img/map/house.jpg" class="mapImgLengend" />
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

import { HouseHandle } from '../../../../class/map/handle/iconsHandle/extend/house'
export default {
  name: 'iconHouse',
  data () {
    return {
      value: false,
      map: {},
      extend: 'first',
      type: 'house'
    }
  },
  components: {
    search,
    switchButton
  },
  inject: ['mapDom'],

  mounted () {
    this.map = this.$store.state.defaultMap
  },
  methods: {
    showMapInfo (info) {
      if (info) {
        this.HouseHandle = new HouseHandle(this.mapDom.map, 'house')
        this.HouseHandle.show(info)
      } else {
        this.HouseHandle.hidden()
      }
    }
  }

}
</script>
<style >
</style>
