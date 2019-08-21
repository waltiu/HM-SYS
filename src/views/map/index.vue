<template>
  <div>
    <div class="bar">
    <search-location></search-location>
    </div>
    <div id="map" class="container"></div>
  </div>
</template>
<script>
import 'maptalks/dist/maptalks.css';
import * as maptalks from 'maptalks';
import searchLocation from './search'
import axios from 'axios'
export default {
 data() {
			return {
				query:''
			}
    },
  components:{
    searchLocation,
  },
  methods: {
    search () {
          axios.get('/searchLocation/place/v2/suggestion', {
    params: {
      query:this.query,
      region: '沈阳',
      city_limit: true,
      output: 'json',
      ak: 'lvNKaGepBi4j6QORExntHLDTZkXLoCdi'
    }
  })
  .then(res=>(console.log(res)))
    }
  },
  mounted () {
    this.$nextTick(() => {
      const map = new maptalks.Map('map', {
        center: [-0.113049,51.498568],
        zoom: 18,
         minZoom: 5,
      maxZoom: 19,
        baseLayer: new maptalks.TileLayer('base', {
         urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
          subdomains: ['a','b','c','d'],
          attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
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
.bar{
  position: absolute;
  z-index: 999
}
</style>


lvNKaGepBi4j6QORExntHLDTZkXLoCdi