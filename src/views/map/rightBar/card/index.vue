<template>
  <div>
    <div class="barDetail">
      <village style="marginBottom:10px"></village>
      <house style="marginBottom:10px"></house>
      <school style="marginBottom:10px"></school>
      <hosiptal style="marginBottom:10px"></hosiptal>
      <Intermediary style="marginBottom:10px"></Intermediary>
    </div>
  </div>
</template>

<script>
import village from './village'
import house from './house'
import school from './school'
import hosiptal from './hospital'
import Intermediary from './Intermediary'
export default {
  components: {
    village,
    school,
    house,
    hosiptal,
    Intermediary
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
