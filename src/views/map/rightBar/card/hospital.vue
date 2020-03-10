<template>
  <div>
    <el-card class="box-card">
      <el-tabs type="card" v-model="extend">
        <el-tab-pane label="医院" name="first">
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
            <img src="/img/map/hospital.jpg" class="mapImgLengend" />
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

import { HospitalHandle } from '../../../../class/map/handle/iconsHandle/extend/hospital'
export default {
  name: 'iconHouse',
  data () {
    return {
      value: false,
      map: {},
      extend: 'first',
      type: 'hospital'
    }
  },
  inject: ['mapDom'],
  components: {
    search,
    switchButton
  },
  mounted () {
    this.map = this.$store.state.defaultMap
  },
  methods: {
    showMapInfo (info) {
      if (info) {
        this.HospitalHandle = new HospitalHandle(this.mapDom.map, 'hospital')
        this.HospitalHandle.show(info)
      } else {
        this.HospitalHandle.hidden()

      }
    },
  }

}
</script>
<style >
.mapImgLengend {
  width: 45px;
  height: 45px;
  position: relative;
  top: 25px;
}
</style>
