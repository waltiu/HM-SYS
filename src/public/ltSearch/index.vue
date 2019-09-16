  <template>
  <div>
    <el-input clearable v-model="query"></el-input>
    <el-button type="danger" @click="search">搜索</el-button>
  </div>
</template>
<script>
export default {
  name: 'ltSearch',
  methods: {
    data () {
      return {
        query: 1
      }
    },
    search () {
      this.$emit('search', this.query)
    }
  }

}
</script>
