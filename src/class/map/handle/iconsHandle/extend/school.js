import { IconsHandle } from '../index'
import * as maptalks from 'maptalks'
export class SchoolHandle extends IconsHandle {
  constructor (map, layerName = 'houseHandle') {
    super(map, layerName)
  }
  handleStyle () {
    return {
      'symbol': [
        {
          'markerFile': 'url(/img/map/school.jpg)',
          'markerWidth': 29,
          'markerHeight': 29,
          'markerDy': -20
        }
      ]
    }
  }
}