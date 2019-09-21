<template>
  <div>
    <el-card style="text-align:center" v-if="!show" v-loading="!show">
      <h1 style="font-size:50px">正在获取实时数据ing...</h1>
    </el-card>
    <el-row :gutter="20">
      <el-col :span="6" v-for="item of info" :key="item.title">
        <div class="grid-content bg-purple">
          <transition name="el-fade-in-linear">
            <el-card shadow="hover" class="eCard" v-show="show">
              <i :class="item.icons" :style="item.color" id="icons"></i>
              <div class="text">
                <span>{{item.title}}</span>
                <p>{{item.total}}</p>
              </div>
            </el-card>
          </transition>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'headerCard',
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
          title: '客服电话',
          color: { background: 'rgb(255, 153, 0)' },
          total: '15922232724',
          icons: 'el-icon-phone-outline'
        }
      ]
    }
  },
  mounted () {
    this.i = 0
    setInterval(() => {
      this.show = true
      console.log('1')
    }, 2500)
  }

}
</script>

<style  scoped>
#icons {
  font-size: 110px;
  text-align: center;
  width: 120px;
  height: 120px;
  border-right: 1px solid;
  color: aliceblue;
}
.text {
  width: 200px;
  text-align: center;
  float: right;
  position: relative;
  padding-top: 20px;
  margin: 0px auto;
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
</style>
