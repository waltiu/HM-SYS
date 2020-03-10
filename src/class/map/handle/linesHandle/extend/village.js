import * as maptalks from 'maptalks'
import { LineHandle } from '../index'
export class VillageHandle extends LineHandle {
  constructor (map, layerName = 'VillageHandle') {
    super(map, layerName)
  }
  handleStyle () {
    return {
      arrowStyle: null, // arrow-style : now we only have classic
      arrowPlacement: 'vertex-last', // arrow's placement: vertex-first, vertex-last, vertex-firstlast, point
      visible: true,
      editable: true,
      cursor: null,
      shadowBlur: 0,
      shadowColor: 'black',
      draggable: false,
      dragShadow: false, // display a shadow during dragging
      drawOnAxis: null,
      symbol: {
        'lineColor': '#A0522D',
        'lineWidth': 5
      }
    }
  }
}
