<template>
  <div class="bar">
    <img
      src="https://image1.ljcdn.com/materials/list/2016-11-23/phpkDJEoM.png"
      style="height: 40px;"
      class="img"
    />
    <el-button size="mini" @click="login">登录</el-button>
    <login v-show="loginShow" @getLoadingState="getLoadingState"></login>
  </div>
</template>

<script>
import login from './login'
export default {
  name: 'bar',
  components: {
    login
  },
  data () {
    return {
      loginShow: false
    }
  },
  methods: {
    login () {
      this.loginShow = !this.loginShow
    },
    getLoadingState (info) {
      this.$emit('getLoadingState', info)
    }
  }
}
</script>

<style scoped>
.bar {
  position: absolute;
  margin: 0px auto;
  width: 4vh;
}
.img {
  position: relative;
  left: 7px;
}
</style>
