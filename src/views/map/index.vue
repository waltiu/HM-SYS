<template>
  <div class="item">
    <maptalks-map @getMap="(info)=>{this.map=info}" class="map"></maptalks-map>
    <div class="bar">
      <search-location class="search"></search-location>
      <zoom class="zoom"></zoom>
    </div>
    <right-bar :map="map" class="rightBar"></right-bar>
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
    console.log(this.$tableConfig)
  }

}
</script>

<style >
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
.rightBar {
  position: absolute;
  right: 30px;
  top: 45%;
}
.map {
  position: relative;
  right: 20px;
  top: -20px;
}
</style>
