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
        title: {
          text: '半年交易均价：'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['买房', '租房', '新房']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['一月', '二月', '三月', '四月', '五月', '六月']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '买房',
            type: 'line',
            step: 'start',
            data: [6000, 6100, 6500, 6800, 7000, 7200, 8000]
          },
          {
            name: '租房',
            type: 'line',
            step: 'middle',
            data: [700, 800, 100, 1100, 1200, 1300, 1400, 1500]
          },
          {
            name: '新房',
            type: 'line',
            step: 'end',
            data: [7000, 8000, 9000, 9000, 8000, 8500, 9000]
          }
        ]
      };

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
