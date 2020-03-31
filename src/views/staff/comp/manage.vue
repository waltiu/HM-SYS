<template>
  <div class="tableList">
    <p class="title">员工管理</p>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="tel" label="电话" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="count" label="成交数量"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'mange',
  props: {
    tableData: Array
  }

};
</script>
<style scoped>
.title {
  text-shadow: 0px 0px 6px #fff, 0px 0px 42px #07a771ea, 0px 0px 72px #07a771ea,
    0px 0px 150px #07a771ea;
  font-size: 20px;
}
.tableList {
  height: 300px;
  overflow: hidden;
}
</style>
