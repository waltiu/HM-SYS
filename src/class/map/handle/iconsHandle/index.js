import Handle from '../base'
import * as maptalks from 'maptalks'
export class IconsHandle extends Handle {
  constructor (map, layerName = 'iconsHandle') {
    super(map, layerName)
  }
  show (data) {
    this.handleData(data)
    this.hidden()
    this.layer = new maptalks.VectorLayer(this.layerName).addTo(this.map)
    this.loop()
    // this.render()
  }
  handleData (data) {
    this.data = data
    return this.data
  }

  render (item) {
    let obj = new maptalks.Marker(item.mapInfo, this.handleStyle()).addTo(this.layer)
    if (this.layerName !== 'defaultVillage' && this.layerName !== 'default') {
      this.blindEvent(obj, item)
    }
  }
}
