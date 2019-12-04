<template>
  <div class="loginCard">
    <div class="login">
      <el-form :model="loginForm" ref="ruleForm" :label-position="labelPosition" class="form">
        <el-form-item label="用户名：">
          <el-input prefix-icon="el-icon-monitor" v-model="loginForm.name" style="width:50%"></el-input>
        </el-form-item>
        <el-form-item label="密   码：">
          <el-input
            prefix-icon="el-icon-edit"
            type="password"
            v-model="loginForm.password"
            style="width:50%"
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
    <el-button class="loginButton" @click="submitLoginForm('ruleForm')">登录</el-button>

    <p class="tips">+++++++++++第三方登录+++++++++++</p>

    <div class="otherLoad">
      <div>1</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'loginForm',
  data () {
    return {
      labelPosition: 'top',
      loginForm: {
        name: '',
        password: ''
      },
      personForm: {},
      personalData: [],
      data: {},
      loginLoading: false,
      style1: { top: '10px' },
      barShow: false
    }
  },
  methods: {
    submitLoginForm () {
      this.$emit('getLoadingState', true)
      let len = this.personForm.length
      for (var i = 0; i < len; i++) {
        if (this.personForm[i].username === this.loginForm.name &&
          this.personForm[i].password === this.loginForm.password) {
          sessionStorage.setItem('permission', JSON.stringify(this.personForm[i].permission))
          sessionStorage.setItem('token', JSON.stringify(this.personForm[i].token))
          this.personalData.push(this.personForm[i])
          setTimeout(() => {
            this.$message({
              message: '恭喜你，登陆成功',
              type: 'success'
            })
            this.$router.push('/map')
            this.$emit('getLoadingState', false)
          }, 2000)
        } else {
          setTimeout(() => {
            this.$emit('getLoadingState', false)
          }, 2000)
        }
      }
    },
    getLoginForm () {
      axios.get('/json/person.json')
        .then((res) => { this.personForm = res.data.personalData })
    }
  },
  mounted () {
    this.getLoginForm()
  }
}
</script>

<style scoped>
.loginCard {
  border-radius: 20px;
  position: relative;
  left: -70vw;
  width: 41vw;
  height: 50vh;
  background-image: url("http://demo.demohuo.top/modals/49/4919/demo/images/bg-01.jpg");
}
.login {
  position: relative;
  left: 25%;
  width: 41vw;
}
.loginButton {
  text-align: center;
  position: relative;
  left: 30%;

  margin: 0px auto;
  width: 15vw;
  border-radius: 30%;
  background-image: url("http://demo.demohuo.top/modals/49/4919/demo/images/bg-01.jpg");
}
.otherLoad {
  position: absolute;
  width: 40vw;
}
.tips {
  position: relative;
  left: 10px;
  width: 41vw;
  overflow: hidden;
  opacity: 0.4;
  font-size: 12px;
  top: 20px;
  left: 28%;
}
.form {
  width: 100%;
  margin: 0px auto;
}
</style>
