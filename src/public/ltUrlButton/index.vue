<template>
  <div>
    <i class="el-icon-thumb" style="fontSize:25px" @click="jumpUrl"></i>
  </div>
</template>

<script>
export default {
  name: 'detail',
  props: {
    raw: Object
  },
  methods: {
    jumpUrl () {
      let info = this.raw.info
      if (info.url) {
        window.open(info.url)
      } else {
        this.$message({
          message: '当前资源，暂不存在官网！',
          type: 'warning'
        });
      }
    }
  }
}
</script>

<style>
</style>