<template>
  <div style=" display:flex">
    <img src="/img/drawer.jpeg" @click="changeState" width="100px" height="100px" />
    <div v-if="drawerState">
      <div class="barDetail">
        <region></region>
      </div>
    </div>
  </div>
</template>
<script>
import region from './card/region'
import source from './card/source'
export default {
  components: {
    region,
    source
  },
  data () {
    return {
      drawerState: false

    }
  },
  methods: {
    changeState () {
      this.drawerState = !this.drawerState
    }
  }

}
</script>
<style scoped>
.barDetail {
  position: relative;
  top: -300px;
  height: 800px;
  width: 250px;
  background-color: aliceblue;
}
</style>
