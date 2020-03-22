<template>
  <div>
    <el-carousel indicator-position="outside" style="width:600px;height:400px">
      <el-carousel-item v-for="(item,index) in info.photoInfo" :key="index">
        <img :src="item" style="width:100%;height:100%" />
        <p class="photoTitle">{{photoTitle[index].title}}</p>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { photoTitle } from '../index.js'
export default {
  name: 'photoList',
  props: {
    info: Object
  },
  data () {
    return {
      photoTitle: {}
    }
  },
  mounted () {
    this.photoTitle = photoTitle

  }
}
</script>

<style scoped>
.photoTitle {
  position: absolute;
  z-index: 999;
  top: 10px;
  border: 1px solid rebeccapurple;
  background-color: antiquewhite;
  font-size: 26px;
}
</style>