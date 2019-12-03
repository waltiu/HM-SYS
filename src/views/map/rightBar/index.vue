<template>
  <div style=" display:flex" @wheel.stop="() => {}">
    <div>
      <img
        src="/img/map/bar.png"
        @click="changeState"
        style="height: 60px;margin-top: 42vh;"
        alt="bar"
        v-show="iconState1"
      />
      <img
        src="/img/map/bar.png"
        @click="changeState"
        style="height: 60px;margin-top: 42vh;"
        alt="bar"
        v-show="iconState2"
        class="transform"
      />
    </div>
    <transition name="slide-fade">
      <div v-if="drawerState" class="barAll">
        <div class="barItem">
          <bar-item></bar-item>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import barItem from './card'
export default {
  components: {
    barItem
  },
  data () {
    return {
      drawerState: true,
      iconState1: false,
      iconState2: true
    }
  },
  methods: {
    changeState () {
      this.drawerState = !this.drawerState
      if (!this.drawerState) {
        this.iconState2 = false
        setTimeout(() => {
          this.iconState1 = true
        }, 600)
      } else {
        this.iconState1 = false
        setTimeout(() => {
          this.iconState2 = true
        }, 600)
      }
    }
  }

}
</script>
<style scoped>
.barAll {
  height: 90vh;
  width: 340px;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;

  background: hsla(0, 0%, 100%, 0.6);
  z-index: initial;
}
.barItem {
  width: 350px;
}
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(400px);
  /*opacity: 0;*/
}
.transform {
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
}
</style>
