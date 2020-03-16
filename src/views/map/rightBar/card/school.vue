<template>
  <div>
    <el-card class="box-card">
      <el-tabs type="card" v-model="extend">
        <el-tab-pane label="学校" name="first">
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
            <img src="/img/map/school.jpg" class="mapImgLengend" />

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

import { SchoolHandle } from '../../../../class/map/handle/iconsHandle/extend/school'
export default {
  name: 'iconsSchool',
  data () {
    return {
      value: false,
      map: {},
      extend: 'first',
      type: 'school'
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
        this.SchoolHandle = new SchoolHandle(this.mapDom.map, 'school')
        this.SchoolHandle.show(info)
      } else {
        this.SchoolHandle.hidden()
      }
    }
  }

}
</script>
<style >
</style>
