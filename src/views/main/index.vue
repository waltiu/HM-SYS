<template>
  <div>
    <el-container>
      <el-container>
        <el-aside style="width:15%" class="aside">
          <div class="barLeft">
            <img
              src="http://static.fangxiaoer.com/web/images/ico/head/logo.png"
              alt="房小二网"
              class="icon"
            />
            <div class="ment">
              <el-menu
                class="el-menu-vertical-demo"
                background-color="#464c5b"
                text-color="#fff"
                :router="true"
                :unique-opened="true"
                active-text-color="#2d8cf0"
                :default-active="this.defaultOPen"
              >
                <el-submenu :index="item.id" v-for="item of colum" :key="item.id">
                  <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>{{item.name}}</span>
                  </template>
                  <el-menu-item-group style="overflow-y: auto;overflow-x: hidden;">
                    <el-menu-item :index="item1.path" v-for="item1 of item.chidren" :key="item1.id">
                      <i class="el-icon-location"></i>
                      {{item1.name}}
                    </el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
            </div>
          </div>
        </el-aside>
        <el-main class="main">
          <el-header>
            <div class="header">Header</div>
          </el-header>
          <div>
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
    <lt-dialog></lt-dialog>
  </div>
</template>

<script>
import Router from 'vue-router'
import ltDialog from '../../public/ltDialog/mapDialog'
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
export default {
  name: 'mainShow',
  components: {
    ltDialog
  },
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
  }

}
</script>

<style scoped>
.barLeft {
  float: left;
  background: #464c5b;
  height: 100vh;
  width: 100%;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
}

.header {
  height: 12%;
}
.icon {
  position: relative;
  left: 15%;
  top: 10px;
  padding: 30px 0px 30px 0px;
}
.ment {
  position: relative;
  top: 30px;
}
</style>
