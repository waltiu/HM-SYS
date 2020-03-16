<template>
  <div>
    <i class="el-icon-star-off" style="fontSize:25px" @click="collect" :style="styleCollected"></i>
  </div>
</template>

<script>
export default {
  name: 'readOnMap',
  props: {
    raw: Object,
    type: String,
    colletedData: [Array, Object]
  },
  data () {
    return {
      collectedState: false,
      styleCollected: {},
      useName: '',
      index: ''

    }
  },
  methods: {
    collect () {
      let allData = {}
      let updateInfo = {}
      let collectInfo = { ...this.colletedData }
      allData.name = JSON.parse(sessionStorage.getItem('useInfo')).name
      if (this.collectedState) {
        collectInfo[this.type].splice(this.index, 1)
        this.$message({
          message: '取消收藏成功！',
          type: 'success'
        })
      } else {
        updateInfo.name = this.raw.info.name
        updateInfo.type = this.type
        updateInfo.collectedTime = new Date()
        collectInfo[this.type].push(updateInfo)
        this.$message({
          message: '收藏成功！',
          type: 'success'
        })
      }
      allData.collected = collectInfo
      this.$http.post(`/api/users/userUpate`, allData)
      this.collectedState = !this.collectedState
    }
  },
  watch: {
    colletedData: {
      handler: function (newVal) {
        if (newVal) {
          let collectedList = []
          newVal[this.type].map((item, index) => {
            collectedList.push(item.name)
          })
          if (collectedList.includes(this.raw.info.name)) {
            this.collectedState = true
            this.index = collectedList.indexOf(this.raw.info.name)
          }
        }
      },
      deep: true,
      immediate: true
    },
    collectedState: {
      handler: function (newVal) {
        if (newVal) {
          this.styleCollected = {
            'color': 'red'
          }
        } else {
          this.styleCollected = {}
        }
      },
      deep: true,
      immediate: true
    }

  }

}
</script>

<style>
</style>
