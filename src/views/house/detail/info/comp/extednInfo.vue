<template>
  <div>
    <P class="title1">配套设施</P>
    <p class="title2" style="marginTop:10px">基本信息：</p>
    <div class="list">
      <div v-for="(item,index) of extendConfig" :key="index" class="item">
        <img :src="item.url" width="80px" height="80px" />
        <p :style="computedStyle(index)">{{item.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { extendConfig } from './index'
export default {
  name: 'extendInfo',
  props: {
    info: [Object, String]

  },

  methods: {
    computedStyle (index) {
      if (this.info && this.info.setInfo.includes(index)) {
        return ''
      } else {
        console.log(2)
        return 'text-decoration:line-through;'
      }
    }
  },
  data () {
    return {
      extendConfig: '',
      pStyle: 'text-decoration:line-through'
    }
  },
  mounted () {
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
.list {
  display: flex;
  width: 800px;
  position: relative;
  left: 150px;
  flex-wrap: wrap;
}
.item {
  width: 100px;
  padding: 30px;
  text-align: center;
}
</style>
