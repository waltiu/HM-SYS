<template>
  <div>
    <el-form ref="formData" :model="formData" label-width="80px" :inline="true">
      <el-form-item v-for="item of tableConfig" :key="item.key" :label="item.title">
        <div v-if="item.type==='input'">
          <el-input v-model="formData[item.key]" style="width:200px"></el-input>
        </div>
        <div v-else-if="item.type==='priceInput'">
          <el-input
            v-model="formData[item.key]"
            style="width:200px"
            :placeholder="tips"
            :disabled="priceInputDIsable"
          ></el-input>
        </div>
        <div v-else-if="item.type==='areaInput'">
          <el-input v-model="formData[item.key]" style="width:200px" placeholder="平方米"></el-input>
        </div>
        <div v-else-if="item.type==='select'">
          <el-select v-model="formData[item.key]" placeholder clearable style="width:200px">
            <el-option v-for="(item,index) of item.values" :key="index" :value="item"></el-option>
          </el-select>
        </div>
        <div v-else-if="item.type==='villageSelect'">
          <el-select v-model="formData[item.key]" placeholder clearable style="width:200px">
            <el-option v-for="(item,index) of villageInfo" :key="index" :value="item.name"></el-option>
          </el-select>
        </div>
        <div v-else-if="item.type==='checkBox'">
          <el-checkbox-group v-model="formData[item.key]" size="small" length="10px">
            <el-checkbox v-for="(item,index) of item.values" :key="index" :label="item" name="type"></el-checkbox>
          </el-checkbox-group>
        </div>
        <div v-else-if="item.type==='twiceInput'">
          <el-select v-model="formData.levelDetail.type" placeholder clearable style="width:100px">
            <el-option v-for="(item,index) of item.values" :key="index" :value="item"></el-option>
          </el-select>
          <el-input v-model="formData.levelDetail.info" placeholder style="width:100px"></el-input>
        </div>
        <div v-else-if="item.type==='sourceSelect'">
          <el-select
            v-model="formData.sourceDetail.Intermediary"
            placeholder
            clearable
            style="width:100px"
          >
            <el-option v-for="(item,index) of IntermediaryInfo" :key="index" :value="item.name"></el-option>
          </el-select>
          <el-input v-model="formData.sourceDetail.info" placeholder="联系方式" style="width:100px"></el-input>
        </div>
        <div v-else-if="item.type==='typeSelect'">
          <el-select v-model="formData.layout.room" placeholder clearable style="width:100px">
            <el-option v-for="(item,index) of item.values.Room" :key="index" :value="item"></el-option>
          </el-select>
          <el-select v-model="formData.layout.hall" placeholder clearable style="width:100px">
            <el-option v-for="(item,index) of item.values.Hall" :key="index" :value="item"></el-option>
          </el-select>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'houseForm',
  props: {
    tableConfig: Array,
    villageInfo: Object,
    type: String,
    IntermediaryInfo: Object
  },
  data () {
    return {
      formData: {
        feature: [],
        setInfo: [],

        levelDetail: {
          type: '',
          info: ''
        },
        sourceDetail: {
          Intermediary: '',
          info: ''
        },
        layout: {
          room: '',
          hall: ''
        }

      },
      allConfig: {},
      config: {},
      priceInputDIsable: true,
      tips: ''
    }
  },
  watch: {
    formData: {
      handler: function (newVal) {
        console.log(newVal)
        let info = newVal
        if (newVal.saleType) {
          this.priceInputDIsable = false
          if (newVal.saleType === '出租') {
            this.tips = '元 / 月'
          } else {
            this.tips = '万 / 平'
          }
        }
        if (newVal.village) {
          info.mapInfo = this.villageInfo[newVal.village].mapCenter
          info.mapCenter = this.villageInfo[newVal.village].mapCenter
        }
        if (newVal.levelDetail.type) {
          info.level = newVal.levelDetail.type
        }
        if (newVal.sourceDetail.Intermediary) {
          info.Intermediary = newVal.sourceDetail.Intermediary
        }
        if (newVal.sourceDetail.info) {
          info.tel = newVal.sourceDetail.info
        }
        this.$emit('getInfo', info)
      },
      deep: true
    }
  },
  mounted () {
    this.allConfig = this.$tableConfig[this.type]
  }
}
</script>

<style>
</style>
