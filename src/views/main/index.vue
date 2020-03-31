<template>
  <div class="item">
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
                <el-submenu
                  :index="index"
                  v-for="(item, index) of permission"
                  :key="index"
                >
                  <template slot="title">
                    <i :class="item.icon"></i>
                    <span>{{ item.name }}</span>
                  </template>
                  <el-menu-item-group
                    style="overflow-y: auto;overflow-x: hidden;"
                  >
                    <el-menu-item
                      :index="child.path"
                      v-for="(child, ind) of item.chidren"
                      :key="ind"
                      @click="clickItem(child)"
                    >
                      <i class="el-icon-location"></i>
                      {{ child.name }}
                    </el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
            </div>
          </div>
        </el-aside>
        <el-main class="main">
          <el-header>
            <div class="header">
              <header-info></header-info>
            </div>
          </el-header>
          <div class="item">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
    <lt-dialog></lt-dialog>
  </div>
</template>

<script>
import Router from "vue-router";
import ltDialog from "../../public/ltDialog/mapDialog";
import list from "./main.js";
import headerInfo from "./componets/header";
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
export default {
  name: "mainShow",
  components: {
    ltDialog,
    headerInfo
  },

  data() {
    return {
      colum: "",
      isCollapse: false,
      defaultOPen: "",
      key: [],
      columConfig: {},
      permission: {}
    };
  },
  methods: {
    selectTip(res) {},
    clickItem(child) {
      if (child.route) {
        window.open(child.route);
      }
    }
  },
  watch: {
    debug: function(newVal) {
      if (newVal) {
        this.$router.push("/error");
      }
    }
  },
  computed: {
    debug: function() {
      return this.key.join("") === "litanshizhu";
    }
  },
  mounted() {
    this.columConfig = list;
    if (sessionStorage.getItem("permission") === "admin") {
      this.permission = this.columConfig.admin;
    } else {
      this.permission = this.columConfig.visitors;
      console.log(this.permission);
    }
    this.defaultOPen = this.$route.path.slice(1);
    document.addEventListener("keydown", () => {
      const key = event.key;
      this.key.push(key);
    });
  }
};
</script>

<style scoped>
.barLeft {
  float: left;
  background: #464c5b;
  height: 100%;
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
