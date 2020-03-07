<template>
  <div>
    <el-table
      :data="showData"
      style="width: 100%"
      height="500px"
      @selection-change="getSelection"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column
        v-for="item in config"
        :key="item.key"
        :prop="item.key"
        :label="item.title"
        :width="item.width"
        align="center"
      >
        <template slot-scope="scope">
          <div v-if="item.key === 'operations'">
            <slot :info="scope.row"></slot>
          </div>
          <div v-else>{{ scope.row[item.key] }}</div>
        </template>
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
  mounted () {},
  methods: {
    getSelection (info) {
      this.$emit('getSelection', info)
    }
  }
}
</script>
