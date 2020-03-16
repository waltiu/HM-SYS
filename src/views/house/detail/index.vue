<template>
  <div>
    <i class="el-icon-thumb" style="fontSize:25px" @click="routerDetail"></i>
  </div>
</template>

<script>
export default {
  name: 'detail',
  methods: {
    routerDetail () {
      let routeUrl = this.$router.resolve({
        path: `/detail/${this.raw.info._id}`

      })
      window.open(routeUrl.href, '_blank')
    }
  },
  props: {
    raw: Object
  }
}
</script>

<style>
</style>
