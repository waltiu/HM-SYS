<template>
  <div>
    <img :src="src" />
    <test @changePhoto="changePhoto(info)"></test>

    <div>a</div>
  </div>
</template>

<script>
import test from './test'
export default {
  name: 'compare',
  components: {
    test
  },
  data () {
    return {
      src: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1609030395,3373896497&fm=58'
    }
  },
  watch: {
    src: function (newVal) {
      return newVal
    }
  },
  methods: {
    changePhoto (info) {
      this.src = info
    }
  }

}
</script>

<style>
</style>