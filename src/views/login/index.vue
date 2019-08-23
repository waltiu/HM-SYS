<template>
  <div
    class="loginItem"
    v-loading="loginLoading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <div class="login">
      <el-form :model="loginForm" ref="ruleForm" label-width="100px">
        <el-form-item>
          <el-button type="primary" size="small">用户名</el-button>
          <el-input v-model="loginForm.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small">密&nbsp;&nbsp;&nbsp;&nbsp;码</el-button>
          <el-input type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            class="loginButton"
            type="success"
            icon="el-icon-check"
            @click="submitLoginForm('ruleForm')"
            circle
          ></el-button>
          <!-- <el-button type="primary" @click="submitLoginForm('ruleForm')">登陆</el-button>
          <el-button @click="registForm('ruleForm')">注册</el-button>-->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        name: '',
        password: ''
      },
      personForm: {},
      personalData: [],
      data: {},
      loginLoading: false

    }
  },
  methods: {
    submitLoginForm () {
      this.loginLoading = true
      let len = this.personForm.length
      for (var i = 0; i < len; i++) {
        if (this.personForm[i].username === this.loginForm.name &&
          this.personForm[i].password === this.loginForm.password) {
          sessionStorage.setItem('permission', JSON.stringify(this.personForm[i].permission));
          this.personalData.push(this.personForm[i])
          setTimeout(() => {
            this.$message({
              message: '恭喜你，登陆成功',
              type: 'success'            })
            this.$router.push('/map')
            console.log(this.personForm[i].permission)
            var data2 = JSON.parse(sessionStorage.getItem('permission'))
            this.loginLoading = false
          }, 2000);



        }
      }
    }
    ,
    registForm () {
      console.log('a')
    },
    getLoginForm () {
      axios.get('/json/person.json')
        .then((res) => { this.personForm = res.data.personalData })
    }

  },
  mounted () {
    this.getLoginForm()
  },
}

</script>
<style scoped>
.loginItem {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  position: fixed;
  background-image: url(/img/loginBck.jpg);
}
.login {
  position: absolute;
  width: 30%;
  height: 10%;
  margin-top: 15%;
}
.loginButton {
  position: relative;
  left: 200px;
}
</style>
