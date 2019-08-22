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
          <div v-if="!queryData" claas="noData">无数据</div>
          <div class="hadData">
            <div
              v-for="(item, index) in queryData"
              :key="index"
              class="hasDataDetail"
              @click="submit(item.location)"
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
  computed: {

    centerAndZoom: function () {
      let prop = this.$store.state.defaultCenter
      return {
        center: [prop.lng, prop.lat],

      }
    }
  },

  methods: {
    search () {
      this.listState = true
      this.loading = true
      axios.get('/searchLocation/place/v2/suggestion', {
        params: {
          query: this.query,
          region: '沈阳',
          city_limit: true,
          output: 'json',
          ak: 'lvNKaGepBi4j6QORExntHLDTZkXLoCdi'
        }
      })
        .then((res) => {
          this.loading = false
          this.queryData = res.data.result
        })
    },
    submit (info) {
      this.$store.commit('changeCenter', info)
      console.log(this.$store.state.defaultCenter)
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
  position: absolute;
  right: 120px;
  font-size: 12px;
}
.hasDataDetail {
  padding: 10px;
}
.hadData {
  /* height: 400px; */
}
</style>
