import * as maptalks from 'maptalks'
export default class Handle {
  constructor (map, layerName) {
    this.map = map
    this.data = []
    this.style = {}
    this.layerName = layerName
    this.baseLayer = {}
    this.map.removeLayer('Tips')
    this.baseLayer['tips'] = new maptalks.VectorLayer('Tips', null, {
      'zIndex': '99'
    }).addTo(this.map)
  }
  // 图层显示
  show (data) {
    this.handleData(data)
    this.hidden()
    this.layer = new maptalks.VectorLayer(this.layerName).addTo(this.map)

    this.loop()
    // this.render()
  }

  // 图层隐藏
  hidden () {
    if (this.layer) {
      this.map.removeLayer(this.layer)
    }
  }
  handleData () {
    // 数据处理
  }
  handleStyle () {
    // 样式声明
  }
  blindEvent (obj, item) {
    let center = [item.mapCenter.lng, item.mapCenter.lat]
    obj.on('click', () => {
      console.log(item)
    })
    obj.on('mouseenter', () => {
      new maptalks.Marker(center, {
        'properties': {
          'name': item.name
        },
        'symbol': {
          'textFaceName': 'sans-serif',
          'textName': '{name}',
          'textWeight': 'normal',
          'textStyle': 'normal',
          'textSize': 15,
          'textFont': null,
          'textFill': '#34495e',
          'textOpacity': 1,
          'textHaloFill': '#fff',
          'textHaloRadius': 5,
          'textWrapWidth': null,
          'textWrapCharacter': '\n',
          'textLineSpacing': 0,
          'textDx': 0,
          'textDy': 10,
          'textHorizontalAlignment': 'middle',
          'textVerticalAlignment': 'top',
          'textAlign': 'auto'
        }
      }).addTo(this.baseLayer['tips'])
    })
    obj.on('mouseout', () => {
      this.baseLayer['tips'].clear()
    })
  }
  // 遍历数据
  loop () {
    this.data.map(item => {
      this.render(item)
    })
  }
  render () {
    // 数据渲染
  }
}
