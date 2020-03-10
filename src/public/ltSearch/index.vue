  <template>
  <el-card style="height:8%">
    <el-form :inline="true" :model="searchData" class="demo-form-inline" ref="searchForm">
      <el-form-item
        v-for="(item) of searchConfig"
        :key="item.key"
        :label="item.title"
        :prop="item.key"
      >
        <div v-if="item.type==='input'">
          <el-input v-model="searchData[item.key]" placeholder="请输入内容"></el-input>
        </div>
        <div v-else>
          <el-select v-model="searchData[item.key]" placeholder style="width:150px">
            <el-option v-for="(item,index) of item.values" :key="index" :value="item"></el-option>
          </el-select>
        </div>
      </el-form-item>
    </el-form>
    <div class="searchButton">
      <el-button type="info" circle @click="reset('searchForm')">重置</el-button>
      <el-button type="primary" circle @click="search">搜索</el-button>
    </div>
  </el-card>
</template>
<script>
export default {
  name: 'ltSearch',
  data () {
    return {
      searchData: {}
    }
  },
  props: {
    searchConfig: Array
  },
  methods: {
    search () {
      this.$emit('search', this.searchData)
    },
    reset (formName) {
      this.$refs[formName].resetFields()
      this.searchData = {}
      // 不经意间解决的bug，搜索重置后但是选择不了其他选项
      this.$emit('search', {})
    }
  }

}
</script>
<style scoped>
.searchButton {
  position: absolute;
  right: 40px;
  margin-top: -60px;
}
</style>
