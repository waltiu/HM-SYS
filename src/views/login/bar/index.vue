<template>
  <div class="bar">
    <img src="/img/login/3.png" style="height: 40px;" class="img" />
    <el-button size="mini" @click="login">登录</el-button>
  </div>
</template>

<script>
export default {
  name: 'bar',
  data () {
    return {
      state: false
    }
  },
  methods: {
    login () {
      this.state = !this.state
      this.$emit('getLoginPageState', this.state)
    }

  }
}
</script>

<style scoped>
.bar {
  position: absolute;
  margin: 0px auto;
  width: 4vh;
  z-index: 999;
}
.img {
  position: relative;
  left: 7px;
}
</style>
