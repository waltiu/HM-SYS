<template>
  <div>
    <el-container>
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
          <div class="header">Header</div>

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
  height: 910px;
  background-color: antiquewhite;
}

.aside {
  width: 100%;
  height: 100%;
}

.main {
  width: 100%;
}

.header {
  width: 120%;
  height: 12%;
  margin: 0px;
  padding: 0px;
  background-image: url(/img/headerBack.jpg);
  background-size: 110% 100%;
  background-repeat: no-repeat;
  position: relative;
  top: -20px;
  left: -22px;
}
</style>
