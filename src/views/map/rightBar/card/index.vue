<template>
  <div>
    <!-- <img
      src="/img/map/bar.png"
      @click="changeState"
      style="height: 60px;margin-top: 42vh;"
      alt="bar"
      v-if="!iconState"
    />-->
    <div class="barDetail">
      <region style="marginBottom:10px"></region>
      <iconsSchool style="marginBottom:10px"></iconsSchool>
      <test style="marginBottom:10px"></test>
    </div>
  </div>
</template>

<script>
import region from './region'
import iconsSchool from './source'
import test from './draw'
export default {
  components: {
    region,
    iconsSchool,
    test
  }
}
</script>

<style>
.barDetail {
  position: relative;
  top: 15px;
  width: 300px;
  margin: 0px auto;
}
</style>
