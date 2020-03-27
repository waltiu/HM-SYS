<template>
  <div>
    <div class="headerInfo">
      <div style="fontSize: 40px;color: #fa5741;">
        <span>{{ info.price || "404" }}</span>
        <span style="fontSize:16px;padding:10px">元/月</span>
      </div>
      <div class="jump">
        <span class="el-icon-link">微信</span>
        &nbsp;&nbsp;
        <span class="el-icon-star-off">关注</span>
      </div>
      <div v-if="info.feature">
        <span class="feature" v-for="(item, index) of info.feature" :key="index">{{ item }}</span>
      </div>
    </div>
    <div>
      <p class="detailInfo">
        <span class="detail">租赁方式：</span>
        {{ info.saleType || "暂无数据" }}
      </p>
      <p class="detailInfo">
        <span class="detail">付款方式：</span>
        {{ info.payType || "暂无数据" }}
      </p>
      <p class="detailInfo">
        <span class="detail">资源来源：</span>
        {{ info.Intermediary || "暂无数据" }}
      </p>
    </div>
    <el-card class="comment">
      <el-collapse>
        <el-collapse-item title="评论区" name="1">
          <div class="info">
            <div v-for="item of commenList.info" :key="item" style="width:140px">
              <div class="content">
                <p class="title">{{item.user}}：</p>
                <p>{{item.info}}</p>
              </div>

              <p class="time">{{item.time}}</p>
            </div>
          </div>
          <span>{{new Date().toLocaleString()}}</span>
          <span class="open" @click="showComment">留言:</span>
          <div v-if="commenText">
            <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textareaInfo"></el-input>
            <el-button type="primary" class="eventButton" @click="publish">发表</el-button>
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'baseInfo',
  data () {
    return {
      textareaInfo: '',
      commenText: false,
      user: '',
      commenList: ''
    }
  },
  props: {
    info: [Object, String]
  },
  watch: {
    info: function (newVal) {
      this.$http.get('/api/comment/getList', { params: {
        id: newVal._id
      }
      }).then(res => {
        this.commenList = res.data.data[0] || []
      })
    }
  },
  methods: {
    showComment () {
      this.textareaInfo = ''
      this.commenText = !this.commenText
    },
    publish () {
      let info = {
        'user': this.user.name,
        'info': this.textareaInfo,
        'time': new Date().toLocaleString()
      }
      if (!this.commenList) {
        this.commenList = {
          _id: this.info._id,
          info: []
        }
      }
      console.log(this.commenList)
      this.commenList.info.push(info)
      this.$http.post('/api/comment/update', this.commenList).then(res => {
        this.commenList = res.data.data
      })
    }
  },
  mounted () {
    this.user = JSON.parse(sessionStorage.getItem('useInfo'))
  }
}
</script>

<style scoped>
.jump {
  position: relative;
  left: 350px;
  top: -10px;
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
.comment {
  width: 300px;
  position: absolute;
  right: 180px;
  top: 280px;
}
.open {
  margin-left: 50px;
  box-shadow: 5px;
  color: tan;
  width: 200px;
  background-color: #9399a5;
  padding: 0px 10px 0px 10px;
}
.eventButton {
  position: relative;
  right: -190px;
  margin-top: 10px;
}
.info {
  height: 120px;
  overflow-y: auto;
}
.time {
  font-size: 12px;
  position: relative;
  left: 80px;
  font-style: italic;
}
.content {
  display: flex;
  width: 190px;
  overflow: hidden;
}
.title {
  font-weight: 300;
  color: teal;
}
</style>
