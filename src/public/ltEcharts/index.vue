<template>
  <div id="echarts" :style="Estyle"></div>
</template>
<script>
import echarts from 'echarts'
import theme from './theme.json'
import router from '../../router'

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
      const myChart = echarts.init(document.getElementById('echarts'), theme)
      const option = {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          // { value: 335, name: '学区房' },
          //   { value: 310, name: '清水房' },
          //   { value: 234, name: '精装房' },
          //   { value: 135, name: '临地铁' },
          //   { value: 1048, name: '临医院' },
          //   { value: 251, name: '短租' },
          //   { value: 147, name: '长租' },
          //   { value: 102, name: '其他' }
          data: ['学区房', '清水房', '精装房', '临地铁', '临医院', '短租', '长租', '其他']
        },
        series: [
          {
            name: '房屋租售',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
              normal: {
                position: 'inner'
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: '新房 ', selected: true },
              { value: 679, name: '租房' },
              { value: 1548, name: '二手房' }
            ]
          },
          {
            name: '房屋分类',
            type: 'pie',
            radius: ['40%', '55%'],
            label: {
              normal: {
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                backgroundColor: '#eee',
                borderColor: '#aaa',
                borderWidth: 1,
                borderRadius: 4,
                // shadowBlur:3,
                // shadowOffsetX: 2,
                // shadowOffsetY: 2,
                // shadowColor: '#999',
                // padding: [0, 7],
                rich: {
                  a: {
                    color: '#999',
                    lineHeight: 20,
                    align: 'center'
                  },
                  // abg: {
                  //     backgroundColor: '#333',
                  //     width: '100%',
                  //     align: 'right',
                  //     height: 22,
                  //     borderRadius: [4, 4, 0, 0]
                  // },
                  hr: {
                    borderColor: '#aaa',
                    width: '100%',
                    borderWidth: 0.5,
                    height: 0
                  },
                  b: {
                    fontSize: 16,
                    lineHeight: 33
                  },
                  per: {
                    color: '#eee',
                    backgroundColor: '#334455',
                    padding: [2, 4],
                    borderRadius: 2
                  }
                }
              }
            },
            data: [
              { value: 335, name: '学区房' },
              { value: 310, name: '清水房' },
              { value: 234, name: '精装房' },
              { value: 135, name: '临地铁' },
              { value: 1048, name: '临医院' },
              { value: 251, name: '短租' },
              { value: 147, name: '长租' },
              { value: 102, name: '其他' }
            ]
          }
        ]
      }
      myChart.setOption(option)

      window.addEventListener('resize', function () {
        myChart.resize()
      })
      myChart.on('click', function (params) {
        console.log(router.push('/source'))
      })
    }
  }
}
</script>
<style scoped>
.chart-part1 {
  width: 40px;
  height: 400px;
}
</style>
