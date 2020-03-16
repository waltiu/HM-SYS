<template>
  <el-dialog title="地图查看" :visible.sync="dialogShow" width="90%" top="5vh" @close="close">
    <slot></slot>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="sure">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'buttuonDialog',
  data () {
    return {
      dialogShow: false
    }
  },
  props: {
    info: Object
  },
  watch: {
    info: function (newVal) {
      if (newVal) {
        this.dialogShow = true
      } else {
        this.dialogShow = false
      }
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    sure () {
      this.$emit('close')
    }
  },
  mounted () {
  }
}
</script>

<style>
</style>
