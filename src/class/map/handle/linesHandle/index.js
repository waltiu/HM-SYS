import * as maptalks from 'maptalks'
import Handle from '../base'
export class LineHandle extends Handle {
  constructor (map, layerName = 'lineHandle') {
    super(map, layerName)
  }

  handleData (data) {
    this.data = data
    return this.data
  }

  render (item) {
    let obj = new maptalks.LineString(item.mapInfo, this.handleStyle()).addTo(this.layer)
    if (this.layerName !== 'defaultVillage' && this.layerName !== 'default') {
      this.blindEvent(obj, item, this.map)
    }
  }
}
