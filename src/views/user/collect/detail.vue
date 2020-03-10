<template>
  <div>
    <i class="el-icon-thumb" style="fontSize:25px" @click="jumpUrl"></i>
  </div>
</template>

<script>
export default {
  name: 'detail',
  props: {
    raw: Object,
    type: String
  },
  methods: {
    jumpUrl () {
      this.$router.push(`/${this.type}`)
      let info = this.raw.info
      this.$store.commit('getQuery', { name: info.name })


    }
  }
}
</script>

<style>
</style>