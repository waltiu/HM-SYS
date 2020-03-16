<template>
  <div>
    <img src="https://f11.baidu.com/it/u=337246036,3164087595&fm=76" @click="test" ref="a" />
    <img src="/img/drawer.jpeg" @click="test" ref="b" />
    <img src="/img/drawer.jpeg" @click="test" ref="c" />
  </div>
</template>

<script>
export default {
  methods: {
    test () {
      let a = this.$refs.a.src
      this.$emit('changePhoto', a)
    }
  }

}
</script>
