<template>
  <div v-if="this.lengthInfo > 1">
    <P class="title1">推荐房源</P>
    <p class="title2" style="marginTop:10px">房源信息：</p>
    <div class="list">
      <div v-for="(item, index) of recommendInfo" :key="index" class="item">
        <el-card>
          <div @click="jumper(item)">
            <img :src="computedSrc(item)" style="width:150px;height:150px" />
            <p>{{ item.name }}</p>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recommondInfo',
  data () {
    return {
      recommendInfo: '',
      lengthInfo: 0
    }
  },
  props: {
    info: [Object, String]
  },
  methods: {
    computedSrc (item) {
      if (item.photoInfo && item.photoInfo.main) {
        return item.photoInfo.main
      } else {
        return require('./image/暂无数据.png')
      }
    },
    jumper (item) {
      let routeUrl = this.$router.resolve({
        path: `/detail/${item._id}`

      })
      window.open(routeUrl.href, '_blank')
    }
  },
  watch: {
    info: function (newVal) {
      let query = {
        district: newVal.district
      }
      this.$http.get('/api/source/houseSearch', { params: query }).then(res => {
        this.recommendInfo = res.data.data.slice(0, 3)
        this.lengthInfo = this.recommendInfo.length
      })
    }
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
  width: 200px;
  padding: 30px;
  text-align: center;
}
</style>
