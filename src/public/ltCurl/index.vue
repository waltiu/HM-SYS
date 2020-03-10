<template>
  <div v-if="permission">
    <div style="position: fixed; z-index: 20; right: 120px; bottom: 50px;">
      <!-- <div v-if="buttonStatus" class="update">
        <div class=" el-icon-edit icon" @click="click('edit')"></div>
        <p class="line2"></p>
      </div> -->
      <div class="operList">
        <div v-if="buttonStatus" class="botton13  increase">
          <span class="el-icon-plus icon" @click="click('add')"></span>
          <div class="line"></div>
        </div>
        <div
          class="base"
          @click="
            () => {
              buttonStatus = !buttonStatus;
            }
          "
        >
          <p :class="iconStyle" style="fontSize:20px"></p>
        </div>
        <div
          v-if="buttonStatus && info.length > 0"
          class=" botton13 deincrease"
        >
          <div class="line"></div>

          <span class="el-icon-minus icon" @click="click('delete')"></span>
        </div>
      </div>
    </div>
    <curl
      :curlType="curlType"
      :info="info"
      :type="type"
      @reload="reload"
    ></curl>
  </div>
</template>

<script>
import curl from "./curl";
export default {
  name: "mdAdd",
  props: {
    type: String, // 组件名称
    info: Array // 组件附加信息
  },
  components: {
    curl
  },
  data() {
    return {
      buttonStatus: false,
      permission: false,
      iconStyle: "el-icon-menu",
      curlType: null
    };
  },

  methods: {
    click(type) {
      this.curlType = type;
      this.buttonStatus = !this.buttonStatus;
    },
    reload() {
      this.curlType = null;
      this.$emit("reload");
      console.log(this.curlType);
    }
  },
  watch: {
    buttonStatus: {
      handler: function(newVal) {
        if (newVal) {
          this.iconStyle = "el-icon-loading";
        } else {
          this.iconStyle = "el-icon-menu";
        }
      }
    }
  },
  mounted() {
    if (sessionStorage.getItem("permission") === "admin") {
      this.permission = true;
    } else {
      this.permission = false;
    }
  }
};
</script>
<style scoped>
.base {
  background-color: #409eff;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.update {
  margin-bottom: 25px;
  position: relative;
  left: 9px;
  top: -14px;
}
.operList {
  display: flex;
}
.botton13 {
  padding: 20px 15px 0px 15px;
  position: absolute;
}
.increase {
  right: 50px;
  margin-top: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.deincrease {
  left: 50px;
  margin-top: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon {
  background-color: #409eff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.abc {
  width: 45px;
  height: 3px;
  color: bisque;
  position: relative;
  top: 1px;
  margin-left: 0px;
}
.line2 {
  width: 45px;
  height: 3px;
  color: bisque;
  position: relative;
  top: 1px;
  margin-left: 0px;
}
.line {
  width: 45px;
  height: 3px;
  color: bisque;
  position: relative;
  top: 1px;
  margin-left: 0px;
}
</style>
