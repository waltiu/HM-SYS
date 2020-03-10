<template>
  <div>
    <el-tabs style="height: 200px;">
      <el-tab-pane label="我的收藏">
        <collect :info="info" @reload="getTableInfo"></collect>
      </el-tab-pane>
      <el-tab-pane label="个人信息">
        <info :info="info"></info>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import collect from './collect'
import info from './info'
export default {
  name: 'userInfo',
  components: {
    collect,
    info
  },
  data () {
    return {
      info: {}
    }
  },
  methods: {
    getTableInfo () {
      let name = { name: JSON.parse(sessionStorage.getItem('useInfo')).name }
      this.$http.get('/api/users/userInfo', { params: name }).then(res => {
        this.info = res.data
      })
    }
  },
  mounted () {
    this.getTableInfo()
  }

}
</script>

<style>
</style>