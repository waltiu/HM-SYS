<template>
  <div>
    <el-switch
      v-model="value"
      active-color="#13ce66"
      inactive-color="#ff4949"
      @change="state()"
      class="switchButton"
    ></el-switch>
  </div>
</template>

<script>
export default {
  name: 'swith',
  data () {
    return {
      value: false,
      mapShowData: null,
      comutedData: null
    }
  },
  props: {
    type: String
  },
  methods: {
    state () {
      if (this.value) {
        this.$http.get(`/api/source/${this.type}Search`, { params: null }).then(res => {
          this.mapShowData = res.data.data
          let mapInfo = []
          if (this.type === 'village') {
            this.comutedData = this.mapShowData.map(item => {
              let code = []
              item.mapInfo.map(val => {
                code.push([val.lng, val.lat])
              })
              return { ...item, ...{ mapInfo: code } }
            })
          } else {
            this.comutedData = this.mapShowData.map(item => {
              let code = [item.mapInfo.lng, item.mapInfo.lat]
              return { ...item, ...{ mapInfo: code } }
            })
          }

          this.$emit('showMapInfo', this.comutedData)

        })
      } else {
        this.comutedData = null
        this.$emit('showMapInfo', this.comutedData)

      }
    }
  }
}
</script>

<style>
</style>