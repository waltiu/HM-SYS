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

        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: [
            '和平区', '沈河区', '皇姑区', '大东区', '铁西区', '东陵区', '于洪区', '沈北新区', '苏家屯区', '浑南新区'
          ]

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
            name: '和平区',
            type: 'line',
            step: 'start',
            data: [1400, 1500, 1430, 1320, 1230, 1100, 1300]
          },
          {
            name: '沈河区',
            type: 'line',
            step: 'middle',
            data: [1350, 1400, 1400, 1405, 1430, 1470, 1430, 1500]
          },
          {
            name: '皇姑区',
            type: 'line',
            step: 'end',
            data: [1400, 1300, 1530, 1520, 1530, 1500, 1600]

          },
          {
            name: '大东区',
            type: 'line',
            step: 'end',
            data: [1000, 1100, 1130, 1120, 1030, 1000, 1200]

          },
          {
            name: '铁西区',
            type: 'line',
            step: 'end',
            data: [1000, 1100, 1130, 1120, 1030, 1000, 1200]

          },
          {
            name: '东陵区',
            type: 'line',
            step: 'end',
            data: [1100, 1200, 1130, 1220, 1130, 1100, 1200]

          },
          {
            name: '于洪区',
            type: 'line',
            step: 'end',
            data: [1001, 1110, 1131, 1121, 1130, 1100, 1200]

          },
          {
            name: '沈北新区',
            type: 'line',
            step: 'end',
            data: [1010, 1100, 1230, 1320, 1130, 1200, 1100]

          },
          {
            name: '苏家屯区',
            type: 'line',
            step: 'end',
            data: [800, 900, 1130, 1100, 1020, 1100, 1100]

          },
          {
            name: '浑南新区',
            type: 'line',
            step: 'end',
            data: [900, 1000, 1030, 1020, 1130, 1100, 1000]

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
