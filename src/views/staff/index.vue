<template>
  <div class="info">
    <div class="header">
      <img src="./image/header.png" style="width:100%" />
      <p class="title">房小二中介管理</p>
    </div>
    <div class="allInfo">
      <div class="sort">
        <sort :tableData="tableData"></sort>
      </div>
      <div class="right">
        <div>
          <p class="title2">钥匙管理</p>

          <keys class="keys" :tableData="tableData"></keys>
        </div>
        <div class="mange">
          <manage :tableData="tableData"></manage>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sort from "./comp/sort";
import keys from "./comp/keys";
import manage from "./comp/manage";
export default {
  name: "staff",
  components: {
    sort,
    keys,
    manage
  },
  data () {
    return {
      tableData: []
    }
  },
  mounted () {
    this.$http
      .get('/api/source/staffMSearch')
      .then(res => {
        this.tableData = res.data.data
      })
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  top: 0px;
  text-align: center;
  height: 200px;
}
.title {
  font-size: 28px;
  top: 0px;
  color: aliceblue;
  position: relative;
  top: -100px;
  text-shadow: 0px 0px 6px #fff, 0px 0px 42px #07a771ea, 0px 0px 72px #07a771ea,
    0px 0px 150px #07a771ea;
}
.info {
  text-align: center;
  background-color: #113133;
  height: 100vh;
}
.allInfo {
  display: flex;
}
.cardInfo {
  opacity: 0.4;
}
.sort {
  position: relative;
  left: 100px;
}
.right {
  position: relative;
  left: 300px;
  opacity: 0.4;
  background-color: #113133;
}
.keys {
  border: 1px solid rebeccapurple;
}
.mange {
  margin-top: 20px;
}
.title2 {
  text-shadow: 0px 0px 6px #fff, 0px 0px 42px #07a771ea, 0px 0px 72px #07a771ea,
    0px 0px 150px #07a771ea;
  font-size: 20px;
  position: relative;
  top: -100px;
}
</style>
