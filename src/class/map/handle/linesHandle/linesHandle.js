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
  handleStyle (style) {
    this.style = style
    return this.style
  }
  render (item) {
    new maptalks.LineString(item, this.style).addTo(this.layer)
  }
}
