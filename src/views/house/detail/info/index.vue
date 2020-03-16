<template>
  <div>
    {{
    info}}
  </div>
</template>

<script>
export default {
  name: 'detailInfo',
  data () {
    return {
      info: ''
    }
  },
  mounted () {
    this.$http.get('/api/source/houseSearch', { params: {
      _id: this.$route.params.id
    } }).then(res => {
      this.info = res.data.data[0]
    })
  }
}
</script>

<style>
</style>
