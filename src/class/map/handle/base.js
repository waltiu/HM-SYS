import * as maptalks from 'maptalks'
export default class Handle {
  constructor (map, layerName) {
    this.map = map
    this.data = []
    this.style = {}
    this.layerName = layerName
  }
  // 图层显示
  show (data, style) {
    this.handleData(data)
    this.handleStyle(style)
    this.hidden()
    this.layer = new maptalks.VectorLayer(this.layerName).addTo(this.map)
    this.loop()
    // this.render()
  }

  // 图层隐藏
  hidden () {
    this.map.removeLayer(this.layer)
  }
  handleData () {
    // 数据处理
  }
  handleStyle () {
    // 样式声明
  }
  // 遍历数据
  loop () {
    this.data.forEach(item => {
      this.render(item)
    })
  }
  render () {
    // 数据渲染
  }
}
