<template>
  <div>
    <div class="Header">
      <header-card></header-card>
    </div>
    <div class="contain">
      <lt-echarts :style="styles" :sources="sources1"></lt-echarts>
      <lt-echart :style="style"></lt-echart>
      <lt-echarts :style="styles" :sources="sources2"></lt-echarts>
    </div>
  </div>
</template>
<script>
import headerCard from './headerCard'
import { char1Config, char3Config } from './config'
export default {
  name: 'echarts',
  components: {
    headerCard
  },
  data () {
    return {
      styles: {
        width: '28vw',
        height: '300px'

      },
      style: {
        width: '30vw',
        height: '300px'
      },
      sources1: {
        data: [],
        text: '房屋租金比例',
        position: 'left',
        name: 'echarts1',
        type: 'payType'
      },
      sources2: {
        data: [],
        text: '房屋区域分布',
        position: 'right',
        name: 'echarts2',
        type: 'district'

      },
      type: ['payType', 'district']
    }
  },
  mounted () {
    this.char1Config = char1Config
    this.char3Config = char3Config
    char1Config.map(item => {
      this.$http.get('/api/source/houseSearch', { params: {
        payType: item
      } }).then(res => {
        this.sources1.data.push({
          value: res.data.data.length,
          name: item
        })
      })
    })
    char3Config.map(item => {
      this.$http.get('/api/source/houseSearch', { params: {
        district: item
      } }).then(res => {
        this.sources2.data.push({
          value: res.data.data.length,
          name: item
        })
      })
    })
  }
}
</script>
<style scoped>
.style {
  position: relative;
  top: -300px;
  left: 26vw;
}
.styles2 {
  position: relative;
  top: -600px;
  left: 52vw;
}
.contain {
  margin-top: 60px;
  display: flex;
  height: 300px;
}
</style>
