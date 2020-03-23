<template>
  <div class="village">
    <lt-search @search="getTableList" :searchConfig="searchConfig"></lt-search>
    <lt-table
      :showData="showData"
      :config="tableConfig"
      style="padding-top:20px"
      @getSelection="getSelection"
    >
      <div class="operationList" slot-scope="info">
        <lt-collect
          style="marginRight:12px "
          :raw="info"
          @reload="getTableList"
          :type="type"
          :colletedData="colletedData"
          @getSelection="getSelection"
        ></lt-collect>
        <lt-url-button style="marginRight:12px" :raw="info"></lt-url-button>
        <map-show :raw="info"></map-show>
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

export default {
  name: 'hospital',
  components: {
    mapShow
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
      type: 'hospital',
      colletedData: null,
      selectInfo: []
    }
  },
  computed: {
    tableConfig: function () {
      return Object.values(this.$tableConfig[this.type]).map(item => {
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
        .get('/api/source/hospitalSearch', { params: info })
        .then(res => {
          this.tableData = res.data.data
        })
      let name = { name: JSON.parse(sessionStorage.getItem('useInfo')).name }
      this.$http.get('/api/users/userInfo', { params: name }).then(res => {
        this.colletedData = res.data.collected
      })
    },
    clickInfo (info) {
      console.log(info, 11)
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
  margin-left: 40%;
}
</style>
