<template>
  <div id="echart" :style="Estyle"></div>
</template>
<script>
import echarts from 'echarts'
import theme from './theme.json'

export default {
  name: 'ltEcharts',
  props: {
    Estyle: Object
  },
  mounted () {
    this.setEchart()
  },
  methods: {
    setEchart () {
      const myChart = echarts.init(document.getElementById('echart'), theme)
      const option = {
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
          }
        ]

      }
      myChart.setOption(option)

      window.addEventListener('resize', function () {
        myChart.resize()
      })
    }
  }
}
</script>

<style scoped>
</style>
