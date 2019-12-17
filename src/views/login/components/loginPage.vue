<template>
  <div class="loginCard">
    <el-card class="card">
      <p style="fontSize:25px">登录</p>
      <div>
        <div style="marginTop:8vh">
          <div>
            <el-input
              size="medium"
              prefix-icon="el-icon-monitor"
              v-model="loginForm.name"
              class="inputName"
              placeholder="请输入用户名"
            ></el-input>
          </div>
          <div>
            <el-input
              size="medium"
              prefix-icon="el-icon-edit"
              type="password"
              v-model="loginForm.password"
              class="inputName"
              placeholder="请输入密   码"
            ></el-input>
          </div>
          <el-checkbox v-model="checkedState" class="checkBox">已阅读登录须知</el-checkbox>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      loginForm: {},
      checkedState: false
    }
  }
}
</script>

<style scoped>
.loginCard {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-image: url("https://www.oschina.net/dist/oschina/home/login/imgs/body-bg.png");
}
.card {
  position: relative;
  width: 680px;
  height: 50vh;
  margin: 0px auto;
  top: 18vh;
  text-align: center;
  border-radius: 20px;
}
.inputName {
  width: 40%;
  right: 20%;
  margin-bottom: 5%;
}
.checkBox {
  position: relative;
  right: 30%;
}
</style>
