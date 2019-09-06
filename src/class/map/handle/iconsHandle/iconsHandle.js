import Handle from '../base'
import * as maptalks from 'maptalks'
export class IconsHandle extends Handle {
  constructor (map, layerName = 'iconsHandle') {
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
    new maptalks.Marker(item, this.style).addTo(this.layer)
  }
}
