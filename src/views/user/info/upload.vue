<template>
  <div>
    <el-upload class="avatar-uploader" :on-change="getFile" action>
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <div class="tips">
      <span class="el-icon-upload2"></span>点击更换头像
      <span class="el-icon-upload2"></span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imageUrl: ''
    }
  },
  props: {
    info: Object
  },
  watch: {
    info: {
      handler: function (newVal) {
        this.imageUrl = newVal.picture
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    getFile (file, fileList) {
      this.getBase64(file.raw).then(res => {
        this.$emit('getImgBase', res)
        this.imageUrl = res
      })
    },
    getBase64 (file) {
      return new Promise(function (resolve, reject) {
        let reader = new FileReader()
        let imgResult = ''
        reader.readAsDataURL(file)
        reader.onload = function () {
          imgResult = reader.result
        }
        reader.onerror = function (error) {
          reject(error)
        }
        reader.onloadend = function () {
          resolve(imgResult)
        }
      })
    }
  }
}
</script>
<style  scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.tips {
  margin-left: 15%;
  margin-top: 10px;
  color: bisque;
}
</style>
