<template>
  <div>
    <div style="display:flex">
      <el-input
        placeholder="想搜点什么呢？"
        prefix-icon="el-icon-search"
        v-model="query"
        clearable
        style="width:400px"
      ></el-input>

      <el-button round @click="search">
        搜
        <i class="el-icon-location"></i>
        索
      </el-button>
    </div>
    <div>
      <div v-if="listState" class="searchListContent">
        <div v-if="loading" class="loadingContent">
          <i class="el-icon-loading"></i>
          <span>加载中...</span>
        </div>
        <div v-if="!loading" class="dataContent">
          <div class="hadData">
            <div
              v-for="(item, index) in queryData"
              :key="index"
              class="hasDataDetail"
              @click="submit(item.location,item.name)"
            >
              <div class="listContent">
                <i class="el-icon-location-information" style="color: #409eff"></i>
                <div>{{ item.name }}</div>
              </div>
              <div class="listContent">
                <div>{{ item.province }} {{ item.city }} {{ item.district }}</div>
                <div class="latlng">{{ item.location.lat }}, {{ item.location.lng }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'baseSearch',

  data () {
    return {
      query: '',
      loading: false,
      listState: false,
      queryData: []

    }
  },

  methods: {
    search () {
      this.listState = true
      this.loading = true
      axios.get('/searchLocation/place/v2/suggestion', {
        params: {
          query: this.query,
          region: '全国',
          output: 'json',
          ak: 'lvNKaGepBi4j6QORExntHLDTZkXLoCdi'
        }
      })
        .then((res) => {
          this.loading = false
          this.queryData = res.data.result
          if (!this.queryData.length) {
            this.$notify({
              message: '您搜索的地点不存在，请重新输入!  ',
              position: 'top-left',
              type: 'warning'
            })
            this.listState = false
            this.query = ''
          }
        })
    },
    submit (location, name) {
      this.$store.commit('changeCenter', location)
      this.$store.commit('changeZoom', 17)
      this.listState = false
      this.$message.success(`您当前的位置在: ${name}`)
      // this.query = ''
    }
  }
}
</script>
<style>
.dataContent {
  background-color: #ffff;
  width: 400px;
}
.listContent {
  display: flex;
}
.latlng {
  position: relative;
  left: 80px;
  font-size: 12px;
}
.hasDataDetail {
  padding: 10px;
}
.hadData {
  height: 400px;
  overflow: auto;
}
</style>
