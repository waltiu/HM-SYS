<template>
  <div>
    <el-button type="primary" circle size="big" @click="addZoom" class="addZoom">
      <i class="el-icon-circle-plus"></i>
    </el-button>
    <p class="currentZoom">{{$store.state.defaultZoom.zoom}}</p>
    <el-button type="primary" circle size="big" @click="reduceZoom" class="reduceZoom">
      <i class="el-icon-remove"></i>
    </el-button>
  </div>
</template>
<script>
export default {
  name: 'zoom',
  data () {
    return {
      zoom: ''
    }
  },
  methods: {
    addZoom () {
      this.$store.commit('addZoom')
    },
    reduceZoom () {
      this.$store.commit('reduceZoom')
    }
  }

}
</script>
<style scoped>
.addZoom {
  margin: 10px;
}
.currentZoom {
  font-size: 22px;
  margin: 10px 15px;
}
.reduceZoom {
  margin: 10px;
}
</style>
