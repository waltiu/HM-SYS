<template>
  <div>
    <div class="Header">
      <header-card></header-card>
    </div>
    <div class="contain">
      <lt-echarts :style="styles" class="styles1" :sources="sources1"></lt-echarts>
      <lt-echart :style="style" class="style"></lt-echart>
      <lt-echarts :style="styles" class="styles2" :sources="sources2"></lt-echarts>
    </div>
  </div>
</template>
<script>
import headerCard from './headerCard'
export default {
  name: 'echarts',
  components: {
    headerCard
  },
  data () {
    return {
      styles: {
        width: '469px',
        height: '300px'

      },
      style: {
        width: '600px',
        height: '300px'
      },
      sources1: {
        data:
          [
            { value: 335, name: '短租' },
            { value: 310, name: '合租' },
            { value: 234, name: '整租' },
            { value: 435, name: '买房' },
            { value: 548, name: '卖房' }
          ],
        text: '房屋售卖分类',
        position: 'left',
        name: 'echarts1'
      },
      sources2: {
        data:
          [
            { value: 335, name: '二手房' },
            { value: 310, name: '新房' },
            { value: 234, name: '清水房' },
            { value: 435, name: '精装房' },
            { value: 548, name: '地铁' },
            { value: 548, name: '医院' },
            { value: 548, name: '学区房' }
          ],
        text: '房屋资源分类',
        position: 'right',
        name: 'echarts2'
      }
    }
  }
}
</script>
<style scoped>
.style {
  position: relative;
  top: -300px;
  left: 450px;
}
.styles2 {
  position: relative;
  top: -600px;
  left: 1000px;
}
.contain {
  position: absolute;
  margin-top: 60px;
}
</style>
