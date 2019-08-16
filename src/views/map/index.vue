<template>
  <div>
    <div>保护</div>
    <div id="map" class="container"></div>
  </div>
</template>
<script>
import 'maptalks/dist/maptalks.css';
import * as maptalks from 'maptalks';
import axios from 'axios'
export default {
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