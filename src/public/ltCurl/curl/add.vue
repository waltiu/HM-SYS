<template>
  <el-dialog title="增加数据" :visible.sync="dialogVisible" width="25%" @close="close">
    <el-form ref="formData" :model="formData" label-width="80px">
      <el-form-item v-for="item of tableConfig" :key="item.key" :label="item.title">
        <div v-if="item.type==='input'">
          <el-input v-model="formData[item.key]" style="width:200px"></el-input>
        </div>
        <div v-else-if="item.type==='select'">
          <el-select v-model="formData[item.key]" placeholder clearable style="width:200px">
            <el-option v-for="(item,index) of item.values" :key="index" :value="item"></el-option>
          </el-select>
        </div>
      </el-form-item>
      <el-form-item label="地理信息">
        <el-button type="primary" @click="selectPoint">坐标选择</el-button>
        <el-button type="warning" @click="pointRest">重新选择</el-button>
      </el-form-item>
    </el-form>
    <select-point
      :selectInfo="selectPointTf"
      :type="type"
      @reload="reload"
      :resetPoint="resetPoint"
    ></select-point>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="submit">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import selectPoint from '../../map/selectPoint/index'
export default {
  name: 'add',
  components: {
    selectPoint
  },
  data () {
    return {
      dialogVisible: false,
      formData: {
        mapInfo: {}
      },
      selectPointTf: false,
      resetPoint: false
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
    pointRest () {
      this.resetPoint = true
      this.selectPointTf = true
    },
    selectPoint () {
      this.selectPointTf = true
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
  }

}
</script>

<style></style>
