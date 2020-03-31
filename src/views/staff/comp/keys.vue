<template>
  <div class="keys">
    <div v-for="(item, index) of config" :key="index">
      <p class="title">{{ item.key }}：</p>
      <div v-for="(item, index) of item.values" :key="index">
        <div class="listItem">
          <span class="el-icon-key" :style="computedStyle(item)" />
          <p style="color:#455859">{{ index }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { config } from "./index";
export default {
  name: "keys",
  data () {
    return {
      config: [],
      tableData: []
    };
  },
  methods: {
    computedStyle (item) {
      if (item === 0) {
        return {
          color: "red",
          fontSize: "28px"
        };
      } else if (item === 1) {
        return {
          color: "green",
          fontSize: "28px"
        };
      } else {
        return {
          color: " bisque",
          fontSize: "28px"
        };
      }
    }
  },
  mounted () {

    this.config = config;
    this.$http
      .get('/api/source/IntermediarySearch', {        params: {
          name: '房小二'
        }
      })
      .then(res => {
        this.tableData = res.data.data
        console.log(this.tableData, 999)
      })
  }
};
</script>

<style scoped>
.keys {
  width: 500px;
  height: 200px;
  overflow-y: auto;
  text-align: left;
  position: relative;
  margin-top: -100px;
}
.title {
  text-shadow: 0px 0px 6px #fff, 0px 0px 42px #07a771ea, 0px 0px 72px #07a771ea,
    0px 0px 150px #07a771ea;
  font-size: 20px;
}
.listItem {
  text-align: center;
}
</style>
