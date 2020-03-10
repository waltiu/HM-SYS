<template>
  <el-tabs :tab-position="tabPosition" style="height: 200px;">
    <el-tab-pane v-for="item of keys" :key="item.key" :label="item.lable">
      <lt-table
        :showData=" info.collected[item.key]"
        :config="tableConfig"
        style="padding-top:20px"
      >
        <div class="operationList" slot-scope="info">
          <lt-collect
            style="marginRight:12px "
            :raw="info"
            @reload="getTableList"
            :type="item.key"
            :colletedData="collectedData"
          ></lt-collect>
          <detail :raw="info" :type="item.key"></detail>
        </div>
      </lt-table>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import detail from './detail'
import config from './config'
export default {
  name: 'collect',
  components: {
    detail
  },
  data () {
    return {
      tabPosition: 'left',
      keys: [{
        lable: '小区',
        key: 'village'
      }, {
        lable: '房屋',
        key: 'house'
      }, {
        lable: '学校',
        key: 'school'
      }, {
        lable: '医院',
        key: 'hospital'
      }, {
        lable: '中介',
        key: 'Intermediary'
      }],
      collectedInfo: {
        village: {},
        house: {},
        school: {},
        hospital: {},
        Intermediary: {}
      },
      showInfo: 111,
      test: '',
      collectedData: null
    };
  },
  props: {
    info: Object
  },
  methods: {
    getTableList () {
      this.$emit('reload')
    },

  },
  watch: {
    info: function (newVal) {
      this.collectedData = newVal.collected
    }
  },


  computed: {
    tableConfig: function () {
      return Object.values(config)
        .map(item => {
          return {
            title: item.title,
            key: item.key,
            width: item.width
          }
        })
    },

  }
};
</script>
<style scoped>
.operationList {
  display: flex;
  position: relative;
  margin-left: 40%;
}
</style>