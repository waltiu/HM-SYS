  <template>
  <el-card>
    <el-form :inline="true" :model="searchData" class="demo-form-inline" ref="searchForm">
      <el-form-item
        v-for="(item) of searchConfig"
        :key="item.key"
        :label="item.title"
        :prop="item.key"
        style="marginLeft:20px"
      >
        <div v-if="item.type==='input'">
          <el-input v-model="searchData[item.key]" placeholder="请输入内容" style="width:250px"></el-input>
        </div>

        <div v-else-if="item.type==='priceSelect'">
          <el-select v-model="searchData[item.key]" placeholder style="width:250px" clearable>
            <el-option v-for="(item,index) of priceValues" :key="index" :value="item"></el-option>
          </el-select>
        </div>
        <div v-else-if="item.type==='singleSelect'">
          <el-select v-model="searchData[item.key]" placeholder style="width:250px" clearable>
            <el-option v-for="(item,index) of item.values" :key="index" :value="item"></el-option>
          </el-select>
        </div>
        <div v-else-if="item.type==='inputAreaPrice'">
          <el-col :span="11">
            <el-input v-model="searchData[item.key].from" style="width: 110px;" placeholder="元/月"></el-input>
          </el-col>
          <el-col :span="2">——&nbsp;</el-col>
          <el-col :span="10">
            <el-input v-model="searchData[item.key].to" style="width: 105px;" placeholder="元/月"></el-input>
          </el-col>
        </div>
        <div v-else-if="item.type==='IntermediarySelect'">
          <el-select v-model="searchData[item.key]" placeholder style="width:250px" clearable>
            <el-option v-for="(item,index) of IntermediaryInfo" :key="index" :value="item"></el-option>
          </el-select>
        </div>
        <div v-else-if="item.type==='inputAreaArea'">
          <el-col :span="11">
            <el-input v-model="searchData[item.key].from" style="width: 110px;" placeholder="平方米"></el-input>
          </el-col>
          <el-col :span="2">——&nbsp;</el-col>
          <el-col :span="10">
            <el-input v-model="searchData[item.key].to" style="width: 105px;" placeholder="平方米"></el-input>
          </el-col>
        </div>
        <div v-else>
          <el-select
            v-model="searchData[item.key]"
            placeholder
            style="width:250px"
            multiple
            clearable
          >
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
      searchData: {

        price: {
          from: null,
          to: null
        },
        area: {
          from: null,
          to: null
        }
      },
      unit: '售卖类型请选择！',
      priceInputDisable: true,
      IntermediaryInfo: ['个人房源']
    }
  },
  props: {
    searchConfig: Array
  },
  watch: {
    'searchData.saleType': {
      handler: function (newVal) {
        if (newVal) {
          this.priceInputDisable = false
          if (newVal === '售卖') {
            this.unit = '元/平'
          } else {
            this.unit = '元/月'
          }
        }
      },
      deep: true
    }
  },
  methods: {
    search () {
      let info = { ...this.searchData }
      if (this.searchData.price.from === null || this.searchData.price.to === null && this.searchData.price) {
        delete info.price
      }
      if (this.searchData.area.from === null || this.searchData.area.to === null && this.searchData.area) {
        delete info.area
      }
      this.$emit('search', info)
    },
    reset (formName) {
      this.searchData = {
        price: {
          from: null,
          to: null
        },
        area: {
          from: null,
          to: null
        }
      }
      this.$emit('search', {})
    }
  },
  mounted () {
    this.$emit('search')
    this.$http
      .get('/api/source/IntermediarySearch')
      .then(res => {
        let info = res.data.data
        info.map(item => {
          this.IntermediaryInfo.push(item.name)
        })
      })
  }


}
</script>
<style scoped>
.searchButton {
  position: absolute;
  right: 50px;
  margin-top: -60px;
}
</style>
