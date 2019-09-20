<template>
  <div>
    <lt-echarts :style="style" class="style"></lt-echarts>
    <lt-echart :style="style2" class="style2"></lt-echart>
  </div>
</template>
<script>
export default {
  name: 'echarts',
  data () {
    return {
      style: {
        width: '800px',
        height: '700px'

      },
      style2: {
        width: '600px',
        height: '300px'
      }
    }
  }
}
</script>
<style scoped>
.style2 {
  position: absolute;
  left: 1250px;
  top: 100px;
}
</style>
