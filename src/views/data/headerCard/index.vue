<template>
  <div>
    <!-- <div style="text-align:center" v-if="!show" v-loading="!show" class="loading">
      <h1 style="font-size:50px">正在获取实时数据ing...</h1>
    </div>-->
    <div class="allCard">
      <div v-for="item of info" :key="item.title">
        <el-card shadow="hover" class="eCard">
          <i :class="item.icons" :style="item.color" id="icons"></i>
          <div class="text">
            <span>{{item.title}}</span>
            <detail :index="item.total"></detail>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import detail from './deatil'
export default {
  name: 'headerCard',
  components: {
    detail
  },
  data () {
    return {
      i: '',
      show: false,
      info: [
        {
          title: '房屋资源总数量',
          color: { background: 'rgb(25, 190, 107)' },
          total: '81230',
          icons: 'el-icon-s-data'
        },
        {
          title: '客户总人数',
          color: { background: 'rgb(255, 153, 0)' },
          total: '11103',
          icons: 'el-icon-star-on'
        },
        {
          title: '在线客服人数',
          color: { background: 'rgb(228, 108, 187)' },
          total: '1016',
          icons: 'el-icon-user'
        },
        {
          title: '已成交订单数量',
          color: { background: 'rgb(25, 190, 107)' },
          total: '5230',
          icons: 'el-icon-s-data'
        }
      ]
    }
  },
  mounted () {
    this.i = 0
    setInterval(() => {
      this.show = true
      console.log('1')
    }, 1500)
  }

}
</script>

<style  scoped>
.eCard {
  width: 19.6vw;
  margin-right: 1vw;
}
#icons {
  font-size: 110px;
  text-align: center;
  width: 20vw;
  height: 20vh;
  border-right: 1px solid;
  color: aliceblue;
}
.text {
  width: 100%;
}
.el-card__body {
  padding: 0px !important;
}
.text span {
  font-size: 20px;
}
.text p {
  font-size: 30px;
}
.allCard {
  display: flex;
}
.loading {
  width: 80%;
  position: absolute;
  top: 260px;
}
</style>
