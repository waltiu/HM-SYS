<template>
  <div>
    <lt-search @search="search"></lt-search>
    <lt-table :showData="showData" :config="tableConfig" style="padding-top:20px"></lt-table>
    <lt-page
      ref="ltPage"
      @getData="(info)=>{this.showData=info}"
      @search="search"
      :tableData="tableData"
      :query="query"
    ></lt-page>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'village',
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
      return Object.values(this.$tableConfig[this.type])
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
        this.showData = this.$refs.ltPage.computedData(this.showData)
      } else {
        this.showData = this.$refs.ltPage.computedData()
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
    this.getForm()
  }
}
</script>
