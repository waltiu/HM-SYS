<template>
  <div class="village">
    <lt-search @search="getTableList" :searchConfig="searchConfig"></lt-search>
    <lt-table
      :showData="showData"
      :config="tableConfig"
      style="padding-top:20px"
    >
      <div class="operationList" slot-scope="info">
        <collet style="marginRight:12px " :raw="info"></collet>
        <detail style="marginRight:12px" :raw="info"></detail>
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
  </div>
</template>
<script>
import axios from 'axios'
import mapShow from './map'
import detail from './detail'
import collet from './collect'
export default {
  name: 'village',
  components: {
    mapShow,
    detail,
    collet
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
      type: 'village'
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
        .get('/api/source/villageSearch', { params: info })
        .then(res => {
          this.tableData = res.data.data
        })
    },
    clickInfo (info) {
      console.log(info, 11)
    }
  },
  mounted () {
    this.getTableList()
  }
}
</script>
<style scoped>
.operationList {
  display: flex;
  position: relative;
  left: 30px;
}
</style>
