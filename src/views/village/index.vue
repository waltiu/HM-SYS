<template>
  <div>
    <button @click="test">test</button>
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
        total: 40
      },
      tableData: []

    }
  },

  methods: {
    handleSizeChange (size) {
      console.log(size)
      this.page.pageSize = size
      this.computedData()
    },
    handlePageChange (page) {
      console.log(page)
      this.page.currentPage = page
      this.computedData()
    },
    getForm () {
      axios.get('/json/village.json')
        .then((res) => {
          this.tableData = res.data.data.village
          this.computedData()
        })
    },
    test () {
      console.log(this.page)
    },
    computedData () {
      this.showData = this.tableData
      const data = this.showData.slice((this.page.currentPage - 1) * this.page.pageSize, this.page.currentPage * this.page.pageSize)
      this.showData = data
    }
  },
  mounted () {
    this.getForm()
  }
}
</script>
