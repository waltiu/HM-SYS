<template>
  <div>{{base}}</div>
</template>

<script>
export default {
  name: 'indexJumpe',
  props: {
    index: [Number, String]
  },
  data () {
    return {
      base: 0,
      step: ''
    }
  },
  mounted () {
    this.step = this.index / 10
    setInterval(() => {
      if (this.base < this.index) {
        this.base = this.base + this.step
      }
      if (this.base > this.index) {
        this.base = this.index
      }
    }, 150)
  }
}
</script>

<style>
</style>
