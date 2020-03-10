const config = {
  name: {
    key: 'name',
    title: '名称',
    width: 200,
    searchAble: {
      tf: true,
      type: 'input'
    },
    tableShow: {
      tf: true
    },
    mapSearchAble: {
      tf: true,
    },
  },
  district: {
    key: 'district',
    title: '大区',
    width: 30,
    searchAble: {
      tf: false,
    },
    tableShow: {
      tf: true
    },
    mapSearchAble: {
      tf: false,
    },
  },
  village: {
    key: 'village',
    title: '园区',
    width: 100,
    searchAble: {
      tf: true,
      type: 'input'
    },
    tableShow: {
      tf: true
    },
    mapSearchAble: {
      tf: true,
    },
  },
  saleType: {
    key: 'saleType',
    title: '售卖类型',
    width: 50,
    searchAble: {
      tf: true,
      type: 'singleSelect',
      values: ['出租', '售卖']
    },
    tableShow: {
      tf: true
    },
    mapSearchAble: {
      tf: true,
    },
  },
  price: {
    key: 'price',
    title: '价格',
    width: 100,
    searchAble: {
      tf: true,
      type: 'inputAreaPrice',
      values: {
        total: ['50万', '50-70万', '70-90万', '90-110万', '110-130万', '130-150万', '150-200万', '200-300万', '300万以上'],
        hire: ['0—800元/月', '800—900元/月', '900—1000元/月', '1000—1100元/月', '1100—1200元/月', '1200—1300元/月', '1400—1500元/月', '1500—2000元/月', '2000-10000元/月']
      }
    },
    tableShow: {
      tf: true
    },
    mapSearchAble: {
      tf: false,
    },
  },
  houseType: {
    key: 'houseType',
    title: '户型',
    width: 110,
    searchAble: {
      tf: true,
      type: 'singleSelect',
      values: ['一室', '二室', '三室', '四室']
    },
    tableShow: {
      tf: true
    },
    mapSearchAble: {
      tf: true,
    },
  },
  area: {
    key: 'area',
    title: '房屋面积',
    width: 90,
    searchAble: {
      tf: true,
      type: 'inputAreaArea',
      values: ['50m²以下', '50-70m²', '70-90m²', '90-110m²', '110-130m²', '130-150m²', '150-200m²', '200-300m²', '300m²以上']
    },
    tableShow: {
      tf: true
    },
    mapSearchAble: {
      tf: false,
    },
  },
  level: {
    key: 'level',
    title: '楼层',
    width: 80,
    searchAble: {
      tf: true,
      type: 'singleSelect',
      values: ['高层', '低层', '别墅']
    },
    tableShow: {
      tf: false
    },
    mapSearchAble: {
      tf: false,
    },
  },
  levelDetail: {
    key: 'levelDetail',
    title: '楼层',
    width: 90,
    searchAble: {
      tf: false,
    },
    tableShow: {
      tf: false
    },
    mapSearchAble: {
      tf: false,
    },
  },
  face: {
    key: 'face',
    title: '朝向',
    width: 80,
    searchAble: {
      tf: false,
      type: 'select',
      values: ['高层', '低层', '别墅']
    },
    tableShow: {
      tf: false
    },
    mapSearchAble: {
      tf: false,
    },
  },
  feature: {
    key: 'feature',
    title: '特色',
    width: 80,
    searchAble: {
      tf: true,
      type: 'select',
      values: ['近地铁', '赠车位', '临地铁', '精装房', '超低价', '周边设施全', '拎包入住', '采光好', '超低价', '急出售', '带阳台']
    },
    tableShow: {
      tf: false
    },
    mapSearchAble: {
      tf: false,
    },
  },
  Intermediary: {
    key: 'Intermediary',
    title: '寄售中介',
    width: 80,
    searchAble: {
      tf: true,
      type: 'singleSelect',
      values: ['中介1', '中介2', '中介3']
    },
    tableShow: {
      tf: false
    },
    mapSearchAble: {
      tf: true,
    },
  },

  address: {
    key: 'address',
    title: '详细地址',
    width: 80,
    searchAble: {
      tf: false,
    },
    tableShow: {
      tf: true
    },
    mapSearchAble: {
      tf: false,
    },
  },
  operations: {
    key: 'operations',
    title: '操作',
    searchAble: {
      tf: false
    },
    tableShow: {
      tf: true
    },
    mapSearchAble: {
      tf: false,
    },
  }

}
export default config
