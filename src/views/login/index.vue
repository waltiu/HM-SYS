<template>
  <div
    class="loginItem"
    v-loading="loginLoading"
    element-loading-text="正在登录中..."
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <loginPage class="loginPage" v-if="loginPageState" @getLoadingState="getLoadingState"></loginPage>
    <div class="right">
      <transition name="slide-fade">
        <img
          src="/img/map/bar.png"
          style="height: 60px;margin-top: 50vh;"
          class="barImg"
          @click="showLogin"
        />
      </transition>
      <transition name="slide-fade">
        <div class="rightBar" v-show="barShow">
          <bar @getLoginPageState="getLoginPageState"></bar>
        </div>
      </transition>
    </div>
    <div class="github">
      <svg
        @click="jumperToGithub"
        aria-hidden="true"
        style="fill:#000; color:#fff; z-index: 999; position: fixed; top: 0; border: 0; left: 0; transform: scale(-1, 1);"
        viewBox="0 0 250 250"
        width="4.5%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
        <path
          class="octo-arm"
          d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
          fill="currentColor"
          style="transform-origin: 130px 106px;"
        />
        <path
          class="octo-body"
          d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
          fill="currentColor"
        />
      </svg>
    </div>

    <div class="title">
      <img src="/img/login/logo.png" width="100%" />
    </div>
    <div class="middleText">
      <h1 class="htitle">您的贴♥房管家!</h1>
      <div class="iconList" style="display:flex">
        <div class="icon">
          <div style="height:80px">
            <img src="/img/login/2.png" :style="style1" />
          </div>
          <h2>找二手房</h2>
          <h3>天啊，在这里竟然找不到你想要的？</h3>
        </div>
        <div class="icon">
          <div>
            <div style="height:80px">
              <img src="/img/login/1.png" :style="style1" />
            </div>
          </div>
          <h2>地图找房</h2>
          <h3>为您精准定位，位置周边配置一览无余</h3>
        </div>
        <div class="icon">
          <div style="height:80px">
            <img src="/img/login/4.gif" :style="style1" />
          </div>
          <h2>专业顾问</h2>
          <h3>在这里，你可以找到你知道的或者不知道的专业中介</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loginPage from './components/loginPage'
import bar from './bar/index'
export default {
  name: 'login',
  data () {
    return {
      loginLoading: false,
      style1: { top: '10px' },
      barShow: false,
      loginPageState: false

    }
  },
  components: {
    bar,
    loginPage
  },
  methods: {
    showLogin () {
      this.barShow = !this.barShow
    },
    getLoginPageState (info) {
      this.loginPageState = info
      this.barShow = !info
    },
    getLoadingState (info) {
      this.loginLoading = info
    },
    iconJump () {
      let TF = false
      setInterval(() => {
        if (TF) {
          this.style1 = { marginTop: '-15px' }
          TF = !TF
        } else {
          this.style1 = { marginTop: '0px' }
          TF = !TF
        }
      }, 700)
    },
    jumperToGithub () {
      window.location.href = 'https://github.com/15922232724'
    }

  },
  mounted () {
    this.iconJump()
  }
}

</script>
<style scoped>
.github {
  position: absolute;
  top: 0px;
  left: 0px;
}
.loginItem {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  position: fixed;
  background-image: url(/img/login/headerBack.jpg);
}
.iconList {
  margin-top: 60px;
}
.rightBar {
  height: 100vh;
  width: 6.5vh;
  background-image: linear-gradient(#e66465, #9198e5);
}
.right {
  position: absolute;
  right: 0px;
  display: flex;
  z-index: 999;
}
.login {
  position: absolute;
  width: 30%;
  height: 10%;
  margin: 15% 50% 25% 38%;
}
.loginButton {
  position: absolute;
  margin-left: 44%;
}
.title {
  position: absolute;
  left: 6.5%;
  top: 10%;
  transform: rotateY(50deg);
  transform: rotate(22deg);
}

.htitle {
  letter-spacing: 20px;
  color: #ffffff;
  font-size: 50px;
  text-shadow: 5px 5px 5px#DEDEDE;
}
.middleText {
  position: relative;
  width: 600px;
  margin: 0px auto;
  top: 250px;
}
.icon {
  position: relative;
  text-align: center;
  margin-top: 0px;
  width: 25%;
  margin-right: 15px;
}
.icon img {
  width: 76px;
  height: 60px;
}
.barImg {
  position: relative;
}
.loginPage {
  position: absolute;
  z-index: 1;
}
</style>
