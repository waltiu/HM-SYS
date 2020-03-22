<template>
  <div>
    <div class="headerInfo">
      <div style="fontSize: 40px;color: #fa5741;">
        <span>{{info.price}}</span>
        <span style="fontSize:16px;padding:10px">元/月</span>
      </div>
      <div class="jump">
        <span class="el-icon-link">微信</span>
        &nbsp;&nbsp;
        <span class="el-icon-star-off">关注</span>
      </div>
      <div>
        <span class="feature">{{info.feature[0]}}</span>
        <span class="feature">{{info.feature[1]}}</span>
        <span class="feature">{{info.feature[2]}}</span>
      </div>
    </div>
    <div>
      <p class="detailInfo">
        <span class="detail">租赁方式：</span>
        {{info.saleType}}
      </p>
      <p class="detailInfo">
        <span class="detail">房屋类型：</span>
        {{info.layout}}
      </p>
      <p class="detailInfo">
        <span class="detail">朝向楼层：</span>
        {{info.face}}
        &nbsp;&nbsp;
        {{info.levelDetail.type
        }}{{
        info.levelDetail.info
        }}层
      </p>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'baseInfo',
  props: {
    info: Object
  },
  watch: {
    info: function (newVal) {
      console.log(newVal)
    }
  }
}
</script>

<style scoped>
.jump {
  position: relative;
  left: 350px;
}
.headerInfo {
  padding-bottom: 10px;
  border-bottom: 1px solid #849aae;
}
.feature {
  width: 50px;
  height: 10px;
  background-color: #849aae;
  font-size: 16px;
  border-radius: 5px;
  margin: 3px;
}
.detail {
  color: #9399a5;
}
.detailInfo {
  margin-top: 20px;
}
</style>
