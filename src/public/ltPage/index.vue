<template>
  <div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handlePageChange"
      :current-page="page.currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="page.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  name: 'lt-page',
  data () {
    return {
      page: {
        currentPage: 1,
        pageSize: 10
      },
      showData: [],
      length: ''
    }
  },
  props: {
    tableData: Array,
    query: String
  },
  watch: {
    tableData: function () {
      this.computedData()
    }
  },
  computed: {
    total: function () {
      return this.length || this.tableData.length
    }
  },
  methods: {
    handleSizeChange (size) {
      this.page.pageSize = size
      this.$emit('search', (this.query))
      this.computedData()
    },
    handlePageChange (page) {
      this.page.currentPage = page
      this.$emit('search', (this.query))
      this.computedData()
    },
    computedData (info) {
      this.length = info
      const data = (info || this.tableData).slice((this.page.currentPage - 1) * this.page.pageSize, this.page.currentPage * this.page.pageSize)
      this.showData = data
      this.$emit('getData', this.showData)
    }
  },


}
</script>