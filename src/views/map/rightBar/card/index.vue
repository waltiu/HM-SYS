<template>
  <div>
    <div class="barDetail">
      <village style="marginBottom:10px"></village>
      <iconsSchool style="marginBottom:10px"></iconsSchool>
    </div>
  </div>
</template>

<script>
import village from './village'
import iconsSchool from './source'
export default {
  components: {
    village,
    iconsSchool
  }
}
</script>

<style>
.barDetail {
  position: relative;
  top: 15px;
  width: 320px;
  margin: 0px auto;
}
</style>
