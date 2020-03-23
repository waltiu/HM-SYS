<template>
  <div>
    <P class="title1">房屋信息</P>
    <p class="title2" style="marginTop:10px">基本信息：</p>
    <div class="detail1">
      <div
        v-for="(item,index) of baseConfig"
        :key="index"
        class="tips"
      >{{item.title}}：{{info[item.key]||item.values}}</div>
    </div>
  </div>
</template>

<script>
import { baseConfig, extendConfig } from './index'
export default {
  name: 'houseInfo',
  props: {
    info: [Object, String]
  },
  data () {
    return {
      baseConfig: [],
      extendConfig: []
    }
  },
  mounted () {
    this.baseConfig = baseConfig
    this.extendConfig = extendConfig
  }
}
</script>

<style scoped>
.title1 {
  font-size: 22px;
  color: #101d37;
}
.title2 {
  color: rgba(48, 48, 51, 0.6);
  position: relative;
  left: 100px;
}
.detail1 {
  display: flex;
  width: 800px;
  position: relative;
  left: 200px;
  flex-wrap: wrap;
  color: black;
}
.tips {
  width: 300px;
  margin: 10px 50px 10px 0px;
}
</style>
