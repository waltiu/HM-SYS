<template>
  <div>
    <div class="barDetail">
      <region style="marginBottom:10px"></region>
      <iconsSchool style="marginBottom:10px"></iconsSchool>
    </div>
  </div>
</template>

<script>
import region from './region'
import iconsSchool from './source'
export default {
  components: {
    region,
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
