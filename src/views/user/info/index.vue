<template>
  <div>
    <el-card>
      <p class="title">修改资料</p>
      <div class="card">
        <el-form label-width="100px">
          <el-form-item label="用户类型：">
            <p>{{userInfo.permission}}</p>
          </el-form-item>
          <el-form-item label="用户名：">
            <el-input style="width:200px" disabled v-model="userInfo.name"></el-input>
          </el-form-item>
          <el-form-item label="手机号：">
            <el-input style="width:200px" v-model="userInfo.tel"></el-input>
          </el-form-item>
          <el-form-item label="邮箱：">
            <el-input style="width:200px" v-model="userInfo.email"></el-input>
          </el-form-item>
          <el-form-item label="性别： ">
            <el-radio-group v-model="userInfo.sex">
              <el-radio label="1">男</el-radio>
              <el-radio label="2">女</el-radio>
              <el-radio label="0">未知</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="备注：">
            <el-input
              v-model="userInfo.note"
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              style="width:200px"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              icon="el-icon-edit"
              class="changeButton"
              @click="changeInfo"
            >修改信息</el-button>
          </el-form-item>
        </el-form>
      </div>
      <header-upload class="uoload" @getImgBase="getImgBase" :info="info"></header-upload>
    </el-card>
  </div>
</template>

<script>
import headerUpload from './upload'
export default {
  name: 'userInfo',
  components: {
    headerUpload
  },
  data () {
    return {
      userInfo: {}
    }
  },
  props: {
    info: Object
  },
  methods: {
    getImgBase (info) {
      this.userInfo.picture = info
    },
    changeInfo () {
      this.$http.post(`/api/users/userUpate`, this.userInfo).then(res => {
        this.resetSetItem(
          'useInfo',
          JSON.stringify(res.data)
        ),
          this.$message({
            message: '信息修改成功！',
            type: 'success'
          });
      })
    }
  },
  watch: {
    info: {
      handler: function (newVal) {
        this.userInfo = newVal
      },
      immediate: true,
      deep: true
    }
  }

}
</script>

<style scoped>
.card {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  width: 1000px;
  margin-top: 10px;
}
.title {
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 2px solid #eceef2;
}
.changeButton {
  width: 200px;
}
.uoload {
  position: absolute;
  right: 190px;
  top: 120px;
}
</style>