<template>
  <lt-echarts :style="style" @click="test"></lt-echarts>
</template>
<script>
export default {
  name: 'echarts',
  data () {
    return {
      style: {
        width: '800px',
        height: '700px'

      }
    }
  }
}
</script>
