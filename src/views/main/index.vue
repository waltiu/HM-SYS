<template>
  <div>
    <el-container>
      <el-header class="header" height="120px">Header</el-header>
      <el-container>
        <el-aside width="15%" class="aside">
          <div class="barLeft">
            <el-menu
              class="el-menu-vertical-demo"
              background-color="#545c64"
              text-color="#fff"
              :router="true"
              :unique-opened="true"
              active-text-color="#ffd04b"
              :default-active="this.defaultOPen"
            >
              <el-submenu :index="item.id" v-for="item of colum" :key="item.id">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>{{item.name}}</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item :index="item1.path" v-for="item1 of item.chidren" :key="item1.id">
                    <i class="el-icon-location"></i>
                    {{item1.name}}
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </div>
        </el-aside>
        <el-main class="main">
          <div>
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Router from 'vue-router'
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
export default {
  name: 'mainShow',
  data () {
    return {
      colum: '',
      isCollapse: false,
      defaultOPen: '',
      key: []
    }
  },
  methods: {
    selectTip (res) {
      // console.log('1', res)
    }
  },
  watch: {
    debug: function (newVal) {
      if (newVal) {
        this.$router.push('/error')
      }
    }
  },
  computed: {
    debug: function () {
      return this.key.join('') === 'litanshizhu'
    }
  },
  mounted () {
    this.colum = JSON.parse(sessionStorage.getItem('permission'))
    this.defaultOPen = this.$route.path.slice(1)
    document.addEventListener('keydown', () => {
      const key = event.key
      this.key.push(key)
    })
    // console.log(this.defaultOPen)
  }

}
</script>

<style scoped="scoped">
.barLeft {
  height: 910px;
  background-color: antiquewhite;
}
.aside {
  width: 100%;
  height: 100%;
}
.main {
  width: 100%;
  height: 910px;
}
.header {
  width: 100%;
  height: 100%;
}
</style>
