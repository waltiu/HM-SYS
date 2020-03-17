<template>
  <div>
    <add :addInfo="addInfo" :type="type" @reload="reload"></add>
    <delete-info :deleteInfo="deleteInfo" :type="type" @reload="reload"></delete-info>
    <readd :addInfo="readdInfo" :type="type" @reload="reload"></readd>
  </div>
</template>

<script>
import deleteInfo from './delete'
import add from './add'
import readd from './readd'
export default {
  name: 'curlIndex',
  components: {
    add,
    deleteInfo,
    readd
  },
  props: {
    curlType: String,
    info: Array,
    type: String
  },
  data () {
    return {
      deleteInfo: null,
      addInfo: null,
      readdInfo: null
    }
  },
  watch: {
    curlType: {
      handler: function (newVal) {
        if (newVal) {
          if (newVal === 'add' && this.type === 'house') {
            this.readdInfo = {}
          } else if (newVal === 'add') {
            this.addInfo = {}
          } else if (newVal === 'delete') {
            this.deleteInfo = this.info || null
          }
        }
      },
      deep: true
    }
  },
  methods: {
    reload () {
      this.$emit('reload')
    }
  }
}
</script>

<style></style>
