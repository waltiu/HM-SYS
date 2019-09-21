<template>
  <div :id="this.sources.name" :styles="Estyles"></div>
</template>
<script>
import echarts from 'echarts'
import theme from './theme.json'
import router from '../../router'
import store from '../../store'

export default {
  name: 'ltEcharts',
  data () {
    return {
    }
  },
  props: {
    Estyles: Object,
    sources: Object
  },
  watch: {
    sources: function (newVal) {
      console.log(newVal)
      return newVal
    }
  },
  mounted () {
    this.setEchart()
    console.log(this.sources.name)
  },
  computed: {
    legend: function () {
      return this.sources.data.map((item) => {
        return item.name
      })
    }

  },
  methods: {
    setEchart () {
      const myChart = echarts.init(document.getElementById(this.sources.name), theme)
      const option = {
        title: {
          text: this.sources.text,
          subtext: '纯属虚构',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: `{a} <br/>{b} : {c} ({d}%)`
        },
        legend: {
          orient: 'vertical',
          left: this.sources.position,
          data: this.legend
        },
        series: [
          {
            name: '上月：',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: this.sources.data,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }

      myChart.setOption(option)

      window.addEventListener('resize', function () {
        myChart.resize()
      })
      myChart.on('click', function (res) {
        store.commit('getQuery', res.name)
        router.push('/source')
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
