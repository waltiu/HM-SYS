<template>
  <div>
    <lt-search @search="search"></lt-search>
    <lt-table :showData="showData" :config="tableConfig" style="padding-top:20px"></lt-table>
    <lt-page
      ref="ltPage"
      @getData="(info)=>{this.showData=info}"
      :tableData="tableData"
      @search="search"
      :query="query"
    ></lt-page>
  </div>
</template>
<script>
import { config } from './config'
import axios from 'axios'
export default {
  name: 'village',
  data () {
    return {
      showData: [],
      page: {
        currentPage: 1,
        pageSize: 10,
        total: 0
      },
      tableData: [],
      query: ''

    }
  },
  computed: {
    tableConfig: function () {
      return Object.values(config)
        .map(item => {
          return {
            title: item.title,
            key: item.key,
            width: item.width
          }
        })
    }
  },
  methods: {
    search (info) {
      this.query = '' || info
      if (this.query) {
        this.showData = this.tableData.filter((item) => {
          return item.name.includes(this.query)
        })
        this.$refs.ltPage.computedData(this.showData)
      } else {
        this.showData = this.tableData
      }
    },
    getForm () {
      axios.get('/json/village.json')
        .then((res) => {
          this.tableData = res.data.data.village
          this.search()
          this.$refs.ltPage.computedData()
        })
    }

  },
  mounted () {
    // this.$getData()
    this.getForm()
  }
}
</script>
