<template>
  <div>
    <maptalks-map @getMap="(info)=>{this.map=info}"></maptalks-map>
    <div class="bar">
      <search-location class="search"></search-location>
      <zoom class="zoom"></zoom>
      <right-bar :map="map"></right-bar>
    </div>
  </div>
</template>
<script>
import 'maptalks/dist/maptalks.css'
import searchLocation from './search'
import zoom from './zoom'
import rightBar from './rightBar'
import axios from 'axios'
export default {
  name: 'baseMap',
  data () {
    return {
      query: '',
      layer: [

      ],
      map: {}
    }
  },
  components: {
    searchLocation,
    zoom,
    rightBar

  },
  methods: {
    search () {
      axios.get('/searchLocation/place/v2/suggestion', {
        params: {
          query: this.query,
          region: '沈阳',
          city_limit: true,
          output: 'json',
          ak: 'lvNKaGepBi4j6QORExntHLDTZkXLoCdi'
        }
      })
      // .then(res => (console.log(res)))
    }
  },
  mounted () {
  }
  // mounted () {
  //   this.$nextTick(() => {
  //     const map = new maptalks.Map('map', {
  //       center: [123.4254440161916, 41.79928173774194],
  //       zoom: 18,
  //       minZoom: 5,
  //       maxZoom: 19,
  //       baseLayer: new maptalks.TileLayer('base', {
  //         urlTemplate: 'http://218.25.36.152:9009/arctiler/google/services/TiandituMap3857/Google/{z}/{x}/{y}.png',
  //         attribution: '&copy; waltiu '
  //       }),
  //     });
  //     // console.log('map: ', map);
  //   });
  // },
}
</script>

<style >
.container {
  width: 100%;
  height: 80vh;
}
.bar {
  position: absolute;
  z-index: 999;
  top: 120px;
}
.search {
  position: relative;
  z-index: 999;
}
.zoom {
  position: absolute;
  top: 200px;
}
</style>
