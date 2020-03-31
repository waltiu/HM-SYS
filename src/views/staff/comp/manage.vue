<template>
  <div>
    <p class="title">员工管理</p>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="name" label="电话" width="180"> </el-table-column>
      <el-table-column prop="address" label="成交数量"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "诡术妖姬",
          address: "9",
          name: " 10086"
        },
        {
          date: "疾风剑豪",
          address: "3",
          name: "2884804"
        },
        {
          date: "亡灵战神",
          address: "2",
          name: "10010"
        },
        {
          date: "德玛西亚",
          address: "10",
          name: "12345678910"
        },
        {
          date: "黑色玫瑰",
          address: "15",
          name: "1351231512312"
        }
      ]
    };
  }
};
</script>
<style scoped>
.title {
  text-shadow: 0px 0px 6px #fff, 0px 0px 42px #07a771ea, 0px 0px 72px #07a771ea,
    0px 0px 150px #07a771ea;
  font-size: 20px;
}
</style>
