<template>
  <div>
    <button @click="test">test</button>
    <!-- <el-table :data="upData" style="width: 100%">
      <el-table-column prop="city" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="area" label="地址"></el-table-column>
    </el-table>-->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handlePageChange"
      :current-page="page.currentPage"
      :page-sizes="[100, 200, 300, 400]"
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
      formData: {},
      page: {
        currentPage: 1,
        pageSize: 200,
        total: 400
      }
    }
  },
  computed: {
    updata: function () {
      let begin = this.currentPage
      let total = this.pageSize
      const data = this.formData.slice(begin, total)
      console.log(data)
      return data
    }
  },
  methods: {
    handleSizeChange (size) {
      console.log(size)
      this.page.pageSize = size
    },
    handlePageChange (page) {
      console.log(page)
      this.page.currentPage = page
    },
    getForm () {
      axios.get('/json/village.json')
        .then((res) => {
          this.formData = res.data.data.village
          // this.page = res.data.page
        })
    },
    test () {
      console.log(this.page)
    }
  },
  mounted () {
    this.getForm()
  }
}
</script>
