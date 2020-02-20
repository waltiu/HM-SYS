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
          <check class="inputName" @checkNumber="checkNumber"></check>

          <el-checkbox v-model="checkedState" class="checkBox">已阅读系统须知</el-checkbox>
          <div class="loadButton">
            <el-button
              @click="checked"
              type="success"
              style="width:48%"
            >登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</el-button>
          </div>
        </div>
      </div>
      <div class="oauth">
        <oauth></oauth>
      </div>
    </el-card>
  </div>
</template>

<script>
import oauth from './oauth'
import check from './check'
export default {
  name: 'login',
  data () {
    return {
      loginForm: {},
      checkedState: false,
      personForm: {},
      personalData: [],
      data: {},
      checkedNumber: false
    }
  },
  components: {
    oauth,
    check
  },
  methods: {
    checkNumber (info) {
      this.checkedNumber = true
    },
    checked () {
      if (this.checkedState) {
        this.login()
      } else {
        this.$message({
          message: '请先阅读，并勾选阅读须知！',
          type: 'warning'
        })
      }
    },

    login () {
      this.$emit('getLoadingState', true)
      this.$http.get('/api/users/login', {
        params: this.loginForm
      }).then(res => {
        if (res.data.status === 200) {
          sessionStorage.setItem(
            'permission',
            'admin'
          )
          sessionStorage.setItem(
            'token',
            res.data.data.token

          )
          this.resetSetItem(
            'useInfo',
            JSON.stringify(res.data.data)
          )
          setTimeout(() => {
            this.$message({
              message: '恭喜你，登陆成功',
              type: 'success'
            })
            this.$router.push('/analysis')
            this.$emit('getLoadingState', false)
          }, 2000)
        } else {
          setTimeout(() => {
            this.$message({
              message: '登录失败，请核对用户名和密码',
              type: 'error'
            })
            this.$emit('getLoadingState', false)
          }, 2000)
        }
      })
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
  width: 550px;
  height: 50vh;
  margin: 0px auto;
  top: 15vh;
  text-align: center;
  border-radius: 20px;
}
.inputName {
  width: 48%;
  right: 20%;
  margin-bottom: 5%;
}
.checkBox {
  position: relative;
  right: 31%;
}
.loadButton {
  position: relative;
  right: 20%;
  width: 100%;
  margin-top: 1.8vh;
}
.oauth {
  position: absolute;
  width: 30%;
  height: 70%;
  top: 90px;
  right: 50px;
  border-left: 1px dashed #eee;
}
</style>
