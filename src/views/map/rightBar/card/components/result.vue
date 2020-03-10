<template>
  <div>
    <div style="display:flex">
      <h1 style="marginTop:10px">搜索结果</h1>
      <el-select v-model="choose" placeholder="请选择" style="width:200px;marginLeft:6px">
        <el-option
          v-for="(item,index) of searchReslut"
          :key="index"
          :label="item.name"
          :value="item"
        ></el-option>
      </el-select>
    </div>
    <div>
      <span style="color:red;top:10px">Tips:如查看资源，请打开下方的地图展示开关</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'result',
  props: {
    searchReslut: [Object, Array]
  },
  data () {
    return {
      choose: ""
    }
  },
  watch: {
    choose: {
      handler: function (newVal) {
        this.$store.commit('changeCenter', newVal.mapCenter)

      },
      deep: true
    }
  }
}
</script>

<style>
</style>