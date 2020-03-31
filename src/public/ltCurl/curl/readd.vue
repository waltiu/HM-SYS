<template>
  <el-dialog title="增加数据" :visible.sync="dialogVisible" width="70%" @close="close">
    <div style="height: 300px;">
      <el-steps :active="active" finish-status="success" align-center>
        <el-step title="基本信息"></el-step>
        <el-step title="图片上传"></el-step>
        <el-step title="地理信息"></el-step>
      </el-steps>
    </div>
    <el-card v-show="active===0" class="cardInfo">
      <form-info
        :tableConfig="tableConfig"
        :villageInfo="villageInfo"
        :IntermediaryInfo="IntermediaryInfo"
        :type="type"
        @getInfo="(info) => {formData = {...formData,...info}}"
      ></form-info>
    </el-card>
    <el-card v-show="active===1" class="cardInfo">
      <photo-info @getInfo="(info) => {formData = {...formData,...info}}"></photo-info>
    </el-card>
    <el-card v-show="active===2" class="cardInfo">
      <other-info @getInfo="(info) => {formData = {...formData,...info}}" :info="formData"></other-info>
    </el-card>

    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="submit">确 定</el-button>
    </span>
    <div class="stepOperate">
      <div class="buttonStep">
        <el-button type="info" icon="el-icon-back" circle @click="foward" v-show="active!==0"></el-button>
      </div>
      <div class="buttonStep">
        <el-button type="info" icon="el-icon-right" circle @click="next" v-show="active!==2"></el-button>
      </div>
    </div>
  </el-dialog>
</template>

<script>
import formInfo from './component/form'
import otherInfo from './component/other'
import photoInfo from './component/photo'
export default {
  name: 'add',
  components: {
    formInfo,
    otherInfo,
    photoInfo
  },
  data () {
    return {
      dialogVisible: false,
      formData: {
        mapInfo: {}
      },
      active: 0,
      villageInfo: {},
      IntermediaryInfo: {}

    }
  },
  props: {
    addInfo: Object,
    type: String
  },
  watch: {
    addInfo: function (newVal) {
      if (newVal) {
        this.dialogVisible = true
      }
    }

  },
  computed: {
    tableConfig: function () {
      return Object.values(this.$tableConfig[this.type])
        .filter(item => {
          return item.editAble.tf
        })
        .map(item => {
          return {
            title: item.title,
            key: item.key,
            type: item.editAble.type,
            values: item.editAble.values
          }
        })
    }
  },
  methods: {
    submit () {
      this.$http.post(`/api/source/${this.type}Save`, this.formData).then(res => {
        if (res.data.status === 200) {
          this.dialogVisible = false
          this.$emit('reload')

          this.$message({
            type: 'success',
            message: `${this.formData.name}增加成功！!`
          })
        } else {
          this.$message({
            type: 'warn',
            message: '添加失败，请修改名称!'
          })
        }
      })
    },
    next () {
      if (this.active++ > 2) this.active = 0
    },
    foward () {
      this.active--
    },
    reload (info) {
      this.selectPointTf = false
      if (info) {
        this.formData = { ...this.formData, ...info }
      }
    },
    close () {
      this.$emit('reload')
      this.formData = {}
    }
  },
  mounted () {
    console.log(1)
    this.$http
      .get('/api/source/villageSearch')
      .then(res => {
        let info = res.data.data
        info.map(item => {
          this.villageInfo[item.name] = item
        })
      })
    this.$http
      .get('/api/source/IntermediarySearch')
      .then(res => {
        let info = res.data.data
        info.map(item => {
          this.IntermediaryInfo[item.name] = item
        })
      })
  }
}
</script>

<style scoped>
.stepOperate {
  position: absolute;
  width: 90px;
  margin: 0px auto;
  right: 0px;
  left: 0px;
  top: 15px;
  display: flex;
}
.cardInfo {
  margin: 0px auto;
  width: 90%;
  top: -190px;
  position: relative;
}
.buttonStep {
  width: 45px;
  height: 40px;
}
</style>
