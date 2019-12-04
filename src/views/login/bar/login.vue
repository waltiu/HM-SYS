<template>
  <div class="loginCard">
    <div class="login">
      <el-form :model="loginForm" ref="ruleForm" :label-position="labelPosition">
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
        <el-form-item>
          <el-button
            class="loginButton"
            type="success"
            icon="el-icon-check"
            @click="submitLoginForm('ruleForm')"
            circle
          ></el-button>
        </el-form-item>
      </el-form>
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
  position: absolute;
  left: -70vw;
  width: 41vw;
  height: 50vh;
  background-image: url("http://demo.demohuo.top/modals/49/4919/demo/images/bg-01.jpg");
}
.login {
  position: relative;
  margin: 10vh -20vh 10vh 14vh;
}
</style>
