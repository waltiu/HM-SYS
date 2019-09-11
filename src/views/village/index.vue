<template>
  <div>
    <button @click="test">test</button>
    <div>
      <el-input clearable v-model="query"></el-input>
      <el-button type="danger" @click="search">搜索</el-button>
    </div>
    <el-table :data="showData" style="width: 100%">
      <el-table-column prop="city" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="area" label="地址"></el-table-column>
    </el-table>
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
import axios from 'axios'
export default {
  name: 'village',
  data () {
    return {
      showData: [],
      page: {
        currentPage: 1,
        pageSize: 10,
        total: ''
      },
      tableData: [],
      query: ''

    }
  },

  methods: {
    search () {
      if (this.query) {
        this.showData = this.tableData.filter((item) => {
          return item.name.indexOf(this.query) === 0
        })
        this.page.total = this.showData.length
      } else {
        this.showData = this.tableData
        this.page.total = this.showData.length
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
    test () {
      console.log(this.page)
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
