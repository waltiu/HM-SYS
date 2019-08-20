<template>
  <div>
    <input v-model="jq" />
    <button @click="search">搜索</button>
    <div></div>
    <div id="map" class="container"></div>
  </div>
</template>
<script>
import 'maptalks/dist/maptalks.css';
import * as maptalks from 'maptalks';
import axios from 'axios'
export default {
  data: {
    return () {
      jq: ''
    }
  },
  methods: {
    search () {
      console.log(this.jq)
      // axios.get('http://api.map.baidu.com/place/v2/search?query=ATM%E6%9C%BA&tag=%E9%93%B6%E8%A1%8C&region=%E5%8C%97%E4%BA%AC&output=json&ak=lvNKaGepBi4j6QORExntHLDTZkXLoCdi')
      axios.get('/searchLocation/place/v2/suggestion?query=ATM&region=%E5%8C%97%E4%BA%AC&output=json&ak=lvNKaGepBi4j6QORExntHLDTZkXLoCdi'
      )
        .then(res => {
          console.log(res)
        })
    }
  },
  mounted () {
    this.$nextTick(() => {
      const map = new maptalks.Map('map', {
        center: [-0.113049, 51.498568],
        zoom: 14,
        baseLayer: new maptalks.TileLayer('base', {
          urlTemplate: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          subdomains: ['a', 'b', 'c'],
          attribution: '&copy; <a href="http://www.osm.org" target="_blank">OpenStreetMap</a> contributors'
        }),
      });
      // console.log('map: ', map);
    });
  },
};
</script>

<style >
.container {
  width: 100%;
  height: 80vh;
}
</style>


lvNKaGepBi4j6QORExntHLDTZkXLoCdi