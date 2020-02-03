<template>
  <div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handlePageChange"
      :current-page="page.currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="page.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tota"
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
    tableData: {
      handler: function () {
        this.computedData()
      },
      immediate: true,
      deep: true
    }
  },
  computed: {
    tota: function () {
      if (this.query) {
        return this.length.length
      } else {
        return this.tableData.length
      }
    }
  },
  methods: {
    handleSizeChange (size) {
      this.page.currentPage = 1
      this.page.pageSize = size
      if (this.query) {
        this.$emit('search', (this.query))
      } else {
        this.computedData()
      }
    },
    handlePageChange (page) {
      this.page.currentPage = page
      if (this.query) {
        this.$emit('search', (this.query))
      } else {
        this.computedData()
      }
    },
    computedData () {
      const data = (this.tableData).slice((this.page.currentPage - 1) * this.page.pageSize, this.page.currentPage * this.page.pageSize)
      this.showData = data
      this.$emit('getPageData', this.showData)
      return this.showData
    }
  }
}
</script>
