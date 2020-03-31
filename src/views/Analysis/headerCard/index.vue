<template>
  <div>
    <!-- <div style="text-align:center" v-if="!show" v-loading="!show" class="loading">
      <h1 style="font-size:50px">正在获取实时数据ing...</h1>
    </div>-->
    <div class="allCard">
      <div v-for="item of info" :key="item.title">
        <el-card shadow="hover" class="eCard">
          <i :class="item.icons" :style="item.color" id="icons"></i>
          <div class="text">
            <span>{{ item.title }}</span>
            <detail :index="item.total"></detail>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import detail from "./deatil";
export default {
  name: "headerCard",
  components: {
    detail
  },
  data() {
    return {
      i: "",
      info: [
        {
          title: "客服",
          color: { background: "rgb(25, 190, 107)" },
          total: "2884804",
          icons: "el-icon-phone"
        }
      ]
    };
  },
  mounted() {
    this.$http.get("/api/source/houseSearch").then(res => {
      let houseTotal = res.data.data.length;
      this.info.push({
        title: "房屋资源总数",
        color: { background: "rgb(25, 190, 107)" },
        total: houseTotal,
        icons: "el-icon-s-data"
      });
    });
    this.$http.get("/api/source/IntermediarySearch").then(res => {
      let IntermediaryTotal = res.data.data.length;
      this.info.push({
        title: "中介资源总数",
        color: { background: "rgb(255, 153, 0)" },
        total: IntermediaryTotal,
        icons: "el-icon-star-on"
      });
    });
    this.$http.get("/api/users/userList").then(res => {
      let userTotal = res.data.data.length;
      this.info.push({
        title: "总用户人数",
        color: { background: "rgb(228, 108, 187)" },
        total: userTotal,
        icons: "el-icon-user"
      });
    });
    console.log(this.info);
  }
};
</script>

<style scoped>
.eCard {
  width: 19.6vw;
  margin-right: 1vw;
  text-align: center;
}
#icons {
  width: 30px;
  height: 30px;
  line-height: 20px;
}
.text {
  width: 100%;
}
.el-card__body {
  padding: 0px !important;
}
.text span {
  font-size: 20px;
}
.text p {
  font-size: 30px;
}
.allCard {
  display: flex;
  height: 200px;
}
.loading {
  width: 80%;
  position: absolute;
  top: 260px;
}
</style>
