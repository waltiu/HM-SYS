import { IconsHandle } from '../index'
import * as maptalks from 'maptalks'
export class HospitalHandle extends IconsHandle {
  constructor (map, layerName = 'houseHandle') {
    super(map, layerName)
  }
  handleStyle () {
    return {
      'symbol': [
        {
          'markerFile': 'url(/img/map/hospital.jpg)',
          'markerWidth': 29,
          'markerHeight': 29,
          'markerDy': -20
        }
      ]
    }
  }
}