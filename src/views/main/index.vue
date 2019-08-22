<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="15%">
          <div class="barLeft">
            <el-menu
              class="el-menu-vertical-demo"
              background-color="#545c64"
              text-color="#fff"
              :router="true"
              active-text-color="#ffd04b"
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
        <el-main>
          <div>
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      colum: '',
      isCollapse: false
    }
  },
  mounted () {
    this.colum = JSON.parse(sessionStorage.getItem('permission'))
    console.log(1, this.colum)
  }

}
</script>

<style scoped="scoped">
.barLeft {
  height: 690px;
  background-color: antiquewhite;
}
</style>
