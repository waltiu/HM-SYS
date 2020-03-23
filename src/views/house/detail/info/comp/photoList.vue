<template>
  <div>
    <el-carousel indicator-position="outside" style="width:600px;height:400px">
      <el-carousel-item v-for="(item, index) in info.photoInfo" :key="index">
        <img :src="computedSrc(item)" style="width:100%;height:100%" />
        <p class="photoTitle">{{ photoTitle[index].title }}</p>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { photoTitle } from '../index.js'
export default {
  name: 'photoList',
  props: {
    info: [Object, String]
  },
  data () {
    return {
      photoTitle: {}
    }
  },
  methods: {
    computedSrc (item) {
      if (item) {
        return item
      } else {
        return require('./image/暂无数据.png')
      }
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
