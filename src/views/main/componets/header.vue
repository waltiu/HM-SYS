<template>
  <div class="info">
    <el-dropdown>
      <div>
        <img style="width:40px;height:40px" :src="useInfo.picture" class="infoImg" />
        <span class="name">{{useInfo.name}}</span>
        <i class="el-icon-arrow-down el-icon--right icon"></i>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <P @click="getUser">个人信息</P>
        </el-dropdown-item>
        <el-dropdown-item>
          <p @click="exit">退出登录</p>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import user from '../../user'
export default {
  name: 'headerInfo',
  data () {
    return {
      info: null,
      useInfo: {}
    }
  },
  components: {
    user

  },

  methods: {
    exit () {
      this.$router.push('/')
      sessionStorage.setItem(
        'permission',
        null
      )
      sessionStorage.setItem(
        'token',
        null
      )
      sessionStorage.setItem(
        'useInfo',
        null
      )
    },
    getUser () {
      this.$router.push('/user')
    }
  },
  created () {
    this.useInfo = JSON.parse(sessionStorage.getItem('useInfo'))
    window.addEventListener('setItem', () => {
      this.useInfo = JSON.parse(sessionStorage.getItem('useInfo'))
    })
  }

}
</script>

<style scoped>
.info {
  display: flex;
  position: absolute;
  right: 70px;
}
.name {
  position: relative;
  top: -10px;
  margin-left: 5px;
}

.infoShow {
  display: flex;
}
.icon {
  position: relative;
  top: -10px;
}
</style>
