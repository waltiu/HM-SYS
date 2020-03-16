<template>
  <div>
    <el-form :inline="true" :model="searchData" label-width="60px">
      <el-form-item v-for="(item) of config" :key="item.key" :label="item.title" :prop="item.key">
        <div v-if="item.type==='input'">
          <el-input
            v-model="searchData[item.key]"
            placeholder="请输入内容"
            style="width:200px"
            clearable
          ></el-input>
        </div>
        <div v-else>
          <el-select v-model="searchData[item.key]" placeholder style="width:200px" clearable>
            <el-option v-for="(item,index) of item.values" :key="index" :value="item"></el-option>
          </el-select>
        </div>
      </el-form-item>
    </el-form>
    <result :searchReslut="searchReslut"></result>
  </div>
</template>

<script>
import result from './result'
export default {
  name: 'searchExtend',
  props: {
    type: String
  },
  components: {
    result
  },
  data () {
    return {
      searchData: {},
      searchReslut: []
    }
  },
  computed: {
    config: function () {
      return Object.values(this.$tableConfig[this.type])
        .filter(item => {
          return item.mapSearchAble.tf
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
  watch: {
    searchData: {
      handler: function (newVal) {
        this.$http.get(`/api/source/${this.type}Search`, { params: newVal }).then(res => {
          this.searchReslut = res.data.data
          if (this.searchReslut.length === 0) {
            this.$message({
              message: `暂没有找到符合您条件的资源，请重新选择！`,
              type: 'warn'
            })
          } else {
            this.$message({
              message: `已为您找到${this.searchReslut.length}条数据，请选择搜索结果来查看详情！`,
              type: 'success'
            })
          }
        })
      },
      deep: true
    }
  }
}
</script>

<style>
</style>
