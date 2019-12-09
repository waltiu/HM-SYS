import Handle from '../base'
import * as maptalks from 'maptalks'
export class IconsHandle extends Handle {
  constructor (map, layerName = 'iconsHandle') {
    super(map, layerName)
  }
  show (data, style) {
    this.handleData(data)
    this.handleStyle(style)
    this.hidden()
    this.layer = new maptalks.VectorLayer(this.layerName).addTo(this.map)
    this.loop()
    // this.render()
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
