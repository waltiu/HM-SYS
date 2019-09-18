<template>
  <div>
    <el-table :data="showData" style="width: 100%" height="600px">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column
        v-for="item  in config"
        :key="item.key"
        :prop="item.key"
        :label="item.title"
        :width="item.width"
      ></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'ltTable',
  props: {
    showData: Array,
    config: Array
  },
  mounted () {
  }

}
</script>
