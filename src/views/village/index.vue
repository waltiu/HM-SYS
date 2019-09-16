<template>
  <div>
    <div>
      <el-input clearable v-model="query"></el-input>
      <el-button type="danger" @click="search">搜索</el-button>
    </div>
    <lt-table :showData="showData" :config="tableConfig"></lt-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handlePageChange"
      :current-page="page.currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="page.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="page.total"
    ></el-pagination>
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
    search () {
      if (this.query) {
        this.showData = this.tableData.filter((item) => {
          return item.name.includes(this.query)
        })
        this.page.total = this.showData.length
        if (this.page.currentPage === 1) {
          this.computedData()
        }
      } else {
        this.showData = this.tableData
        this.page.total = this.showData.length
        if (this.page.currentPage === 1) {
          this.computedData()
        }
      }
    },
    handleSizeChange (size) {
      this.page.pageSize = size
      this.search()
      this.computedData()
    },
    handlePageChange (page) {
      this.page.currentPage = page
      this.search()
      this.computedData()
    },
    getForm () {
      axios.get('/json/village.json')
        .then((res) => {
          this.tableData = res.data.data.village
          this.search()
          this.computedData()
        })
    },
    computedData () {
      const data = this.showData.slice((this.page.currentPage - 1) * this.page.pageSize, this.page.currentPage * this.page.pageSize)
      this.showData = data
    }
  },
  mounted () {
    this.getForm()
  }
}
</script>
