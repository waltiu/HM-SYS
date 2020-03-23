<template>
  <div class="headerCard">
    <el-card>
      <div style="padding:15px">
        <p style="fontSize:22px">{{ info.name }}</p>
        <P style="color: #9399a5;">房源登记时间：{{ info.time }}</P>
        <p style="color: #9399a5;">房源编号：{{ info._id }}</p>
        <p class="warnTip">官方投诉QQ：2884804</p>
      </div>
      <div style="display:flex">
        <photo-list :info="info"></photo-list>
        <el-card style="width:600px;marginLeft:100PX">
          <base-info :info="info"></base-info>
        </el-card>
      </div>
      <div>
        <div class="report__house">
          <img
            src="https://image1.ljcdn.com/rent-front-image/ea4f955b555dc13dd6364436691d1f77.1522402869543_d5ac046b-21a1-465a-9a26-628065c9ae84"
            width="20px"
          />
          <span>
            真实存在，真实在租，真实价格，假一赔百
            <i class="icon"></i>
          </span>
        </div>
      </div>
    </el-card>
    <house-info :info="info" style="marginTop:50PX"></house-info>
    <location-info :info="info"></location-info>

    <extend-info :info="info"></extend-info>
    <recommond-info :info="info"></recommond-info>
  </div>
</template>

<script>
import { photoTitle } from './index'
import photoList from './comp/photoList'
import baseInfo from './comp/baseInfo'
import houseInfo from './comp/houseInfo'
import extendInfo from './comp/extednInfo'
import locationInfo from './comp/map'
import recommondInfo from './comp/recommond'
export default {
  name: 'detailInfo',
  data () {
    return {
      info: ''
    }
  },
  components: {
    photoList,
    baseInfo,
    houseInfo,
    extendInfo,
    locationInfo,
    recommondInfo
  },
  mounted () {
    this.$http
      .get('/api/source/houseSearch', {
        params: {
          _id: this.$route.params.id
        }
      })
      .then(res => {
        this.info = res.data.data[0]
      })
  }
}
</script>

<style scoped>
.headerCard {
  width: 1300px;
  margin: 0px auto;
  left: 0px;
  right: 0px;
}
.baseInfo {
  display: flex;
}
.warnTip {
  position: relative;
  color: brown;
  left: 1000px;
  top: 10px;
}
</style>
