<template>
  <div class="item">
    <maptalks-map @getMap="(info)=>{this.map=info}" class="map">
      <right-bar :map="map" :style="{'z-index': '999', position: 'absolute', 'right': 0}"></right-bar>
    </maptalks-map>
    <div class="bar">
      <search-location class="search"></search-location>
      <zoom class="zoom"></zoom>
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
  position: absolute;
  top: -50px;
  left: -10px;
  z-index: 999;
}
.zoom {
  position: absolute;
  top: 200px;
}

.map {
  position: relative;
  right: 20px;
  top: -20px;
}
</style>
