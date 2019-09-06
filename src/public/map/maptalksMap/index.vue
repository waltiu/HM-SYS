<template>
  <div>
    <div id="map" class="container"></div>
  </div>
</template>
<script>
import 'maptalks/dist/maptalks.css'
import * as maptalks from 'maptalks'

export default {
  name: 'maptalksMap',
  data () {
    return {
      map: {}
    }
  },
  watch: {
    '$store.state.defaultCenter': function () {
      this.map.setCenter([this.$store.state.defaultCenter.lng, this.$store.state.defaultCenter.lat])
    },
    '$store.state.defaultZoom.zoom': function () {
      this.map.setZoom(this.$store.state.defaultZoom.zoom)
    },
    zoom: function () {
      // parseInt(this.map._zoomLevel)
      this.$store.commit('setZoom', parseInt(this.map._zoomLevel))
    }
  },
  computed: {
    zoom: function () {
      return this.map._zoomLevel
    }
  },
  methods: {

  },
  mounted () {
    // this.map.getZoom()
    // console.log(this.zoom)
    this.map = new maptalks.Map('map', {
      center: [this.$store.state.defaultCenter.lng, this.$store.state.defaultCenter.lat],
      zoom: this.$store.state.defaultZoom.zoom,
      minZoom: 8,
      maxZoom: 19,
      baseLayer: new maptalks.TileLayer('base', {
        'urlTemplate': 'http://online4.map.bdimg.com/tile/?qt=vtile&x={x}&y={y}&z={z}&styles=pl&scaler=300',
        spatialReference: {
          projection: 'baidu'
        },
        attribution: '&copy; waltiu '
      })
    })
    // console.log(this.map)
    this.$store.commit('getMap', this.map)
    // 41.799682, 123.403396
    //  41.795428, 123.413131
    // const a=[[ 123.413131,  41.795428],
    //     [121.6341944408, 41.9887584786],
    //      [ 123.403396,  41.799682],
    //     [120.6341944408, 40.9887584786] ]
    //  var line = new maptalks.LineString(a

    //   , {
    //     arrowStyle : null, // arrow-style : now we only have classic
    //     arrowPlacement : 'vertex-last', // arrow's placement: vertex-first, vertex-last, vertex-firstlast, point
    //     visible : true,
    //     editable : true,
    //     cursor : null,
    //     shadowBlur : 0,
    //     shadowColor : 'black',
    //     draggable : false,
    //     dragShadow : false, // display a shadow during dragging
    //     drawOnAxis : null,  // force dragging stick on a axis, can be: x, y
    //     symbol: {
    //       'lineColor' : '#1bbc9b',
    //       'lineWidth' : 3
    //     }
    //   });

    //   new maptalks.VectorLayer('vector', line).addTo(this.map);
  }
}
</script>

<style >
.container {
  width: 100%;
  height: 80vh;
}
</style>



// [ {
          "lng" : 121.6295977024,
          "lat" : 41.9937985132
        }, {
          "lng" : 121.6341944408,
          "lat" : 41.9887584786
        }, {
          "lng" : 121.6330452281,
          "lat" : 41.9880886002
        }, {
          "lng" : 121.6342303285,
          "lat" : 41.987123132
        }, {
          "lng" : 121.6346612339,
          "lat" : 41.9842817914
        }, {
          "lng" : 121.6359181623,
          "lat" : 41.9834773354
        }, {
          "lng" : 121.6635712652,
          "lat" : 41.9982695673
        }, {
          "lng" : 121.6592615631,
          "lat" : 42.0018603542
        }, {
          "lng" : 121.6573222306,
          "lat" : 42.0010563003
        }, {
          "lng" : 121.6477694953,
          "lat" : 42.0056118239
        }, {
          "lng" : 121.6475540072,
          "lat" : 42.0032001176
        }, {
          "lng" : 121.6436754702,
          "lat" : 42.0016463255
        }, {
          "lng" : 121.6394378062,
          "lat" : 42.0010575022
        }, {
          "lng" : 121.6357747199,
          "lat" : 41.999664864
        }, {
          "lng" : 121.6339072479,
          "lat" : 41.9975214845
        }, {
          "lng" : 121.6335481052,
          "lat" : 41.9958064302
        }, {
          "lng" : 121.6295977014,
          "lat" : 41.9937171784
        } ]