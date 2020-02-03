<template>
  <div>
    <el-table :data="showData" style="width: 100%" height="500px">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column
        v-for="item  in config"
        :key="item.key"
        :prop="item.key"
        :label="item.title"
        :width="item.width"
        align="center"
      >
        <div v-if="item.key==='operations'">
          <slot></slot>
        </div>
      </el-table-column>
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
