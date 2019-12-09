<template>
  <div>
    <el-dialog title="提示" :visible.sync="status" width="80%">
      <ltForm :infoData="infoData"></ltForm>
      <span slot="footer" class="dialog-footer">
        <el-button @click="status = false">取 消</el-button>
        <el-button type="primary" @click="status = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import ltForm from '../ltForm'
export default {
  name: 'ltDialog',
  components: {
    ltForm
  },
  props: {
    infoStatus: Boolean
  },
  data () {
    return {
      status: false,
      infoData: {}
    }
  },
  watch: {
    infoStatus: {
      handler: function (newVal) {
        if (newVal) {
          this.status = true
          this.infoData = newVal
        }
      },
      immediate: true
    }
  },
  mounted () {
    this.status = false
    this.$store.watch(state => state.defaultZoom.zoom, (newVal) => {
      this.status = false
      this.infoData = newVal
    })
  }
}
</script>

<style>
</style>
