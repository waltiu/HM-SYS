<template>
  <div class="village">
    <lt-search @search="getTableList" :searchConfig="searchConfig"></lt-search>
    <lt-table
      :showData="showData"
      :config="tableConfig"
      style="padding-top:20px"
      @getSelection="getSelection"
    >
      <div slot-scope="info">
        <div class="operationList">
          <lt-collect
            style="marginRight:12px "
            :raw="info"
            @reload="getTableList"
            :type="type"
            :colletedData="colletedData"
          ></lt-collect>
          <!-- <detail style="marginRight:12px" :raw="info"></detail> -->
          <map-show :raw="info"></map-show>
        </div>
      </div>
    </lt-table>
    <lt-page
      ref="ltPage"
      @getPageData="
        info => {
          this.showData = info;
        }
      "
      :tableData="tableData"
      :query="query"
    ></lt-page>
    <lt-curl :info="selectInfo" :type="type" @reload="getTableList"></lt-curl>
  </div>
</template>
<script>
import axios from 'axios'
import mapShow from './map'
// import detail from './detail'
export default {
  name: 'village',
  components: {
    mapShow
    // detail,
  },
  data () {
    return {
      showData: [],
      page: {
        currentPage: 1,
        pageSize: 10
      },
      tableData: [],
      query: '',
      type: 'village',
      colletedData: null,
      selectInfo: []
    }
  },
  computed: {
    tableConfig: function () {
      return Object.values(this.$tableConfig[this.type])
        .filter(item => {
          return item.tableShow.tf
        })
        .map(item => {
          return {
            title: item.title,
            key: item.key,
            width: item.width
          }
        })
    },
    searchConfig: function () {
      return Object.values(this.$tableConfig[this.type])
        .filter(item => {
          return item.searchAble.tf
        })
        .map(item => {
          return {
            title: item.title,
            key: item.key,
            type: item.searchAble.type,
            values: item.searchAble.values
          }
        })
    }
  },
  methods: {
    getTableList (info) {
      this.$http
        .get('/api/source/villageSearch', { params: info })
        .then(res => {
          this.tableData = res.data.data
        })
      let name = { name: JSON.parse(sessionStorage.getItem('useInfo')).name }
      this.$http.get('/api/users/userInfo', { params: name }).then(res => {
        this.colletedData = res.data.collected
      })
    },
    getSelection (info) {
      this.selectInfo = info
    }
  },
  mounted () {
    this.getTableList(this.$store.state.query)
    this.$store.commit('getQuery', {})
  }
}
</script>
<style scoped>
.operationList {
  display: flex;
  position: relative;
  margin-left: 30%;
}
</style>
