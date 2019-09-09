<template>
  <div style=" display:flex">
    <img src="/img/drawer.jpeg" @click="changeState" width="100px" height="100px" />
    <div v-if="drawerState">
      <div class="barDetail">
        <region></region>
        <iconsSchool></iconsSchool>
        <test></test>
      </div>
    </div>
  </div>
</template>
<script>
import region from './card/region'
import iconsSchool from './card/source'
import test from './card/draw'
export default {
  components: {
    region,
    iconsSchool,
    test
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
