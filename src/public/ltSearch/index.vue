  <template>
  <div>
    <el-card>
      名称：
      <el-input clearable v-model="query" style="width:200px" label="名称"></el-input>
      <el-button @click="search">搜索</el-button>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'ltSearch',
  data () {
    return {
      query: ''
    }
  },
  methods: {
    search () {
      this.$emit('search', this.query)
    }
  },
  mounted () {
    this.$emit('search')
  }

}
</script>
