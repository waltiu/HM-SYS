const config = {
  name: {
    key: 'name',
    title: '简介',
    width: 200,
    searchAble: {
      tf: true,
      type: 'input'
    },
    tableShow: {
      tf: true
    },
    mapSearchAble: {
      tf: true
    },
    editAble: {
      tf: true,
      type: 'input'
    }
  },
  district: {
    key: 'district',
    title: '大区',
    width: 30,
    searchAble: {
      tf: true,
      type: 'select',
      values: [
        '和平区', '沈河区', '皇姑区', '大东区', '铁西区', '东陵区', '于洪区', '沈北新区', '苏家屯区', '浑南新区'
      ]
    },
    tableShow: {
      tf: true
    },
    mapSearchAble: {
      tf: false
    },
    editAble: {
      tf: true,
      type: 'select',
      values: [
        '和平区', '沈河区', '皇姑区', '大东区', '铁西区', '东陵区', '于洪区', '沈北新区', '苏家屯区', '浑南新区'
      ]

    }
  },

  saleType: {
    key: 'saleType',
    title: '租赁方式',
    width: 50,
    searchAble: {
      tf: true,
      type: 'singleSelect',
      values: ['整租', '合租']
    },
    tableShow: {
      tf: true
    },
    mapSearchAble: {
      tf: true
    },
    editAble: {
      tf: true,
      type: 'select',
      values: ['整租', '合租']

    }
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
      tf: true
    },
    editAble: {
      tf: true,
      type: 'villageSelect'
    }
  },
  price: {
    key: 'price',
    title: '价格',
    width: 100,
    searchAble: {
      tf: true,
      type: 'inputAreaPrice'

    },
    tableShow: {
      tf: true
    },
    mapSearchAble: {
      tf: false
    },
    editAble: {
      tf: true,
      type: 'input',
      values: ['0—800元/月', '800—900元/月', '900—1000元/月', '1000—1100元/月', '1100—1200元/月', '1200—1300元/月', '1400—1500元/月', '1500—2000元/月', '2000-10000元/月']

    }
  },
  // priceDetail: {
  //   key: 'priceDetail',
  //   title: '价格',
  //   width: 110,
  //   searchAble: {
  //     tf: false,
  //     type: 'singleSelect',
  //   },
  //   tableShow: {
  //     tf: false
  //   },
  //   mapSearchAble: {
  //     tf: false
  //   },
  //   editAble: {
  //     tf: false,
  //     type: 'priceInput',
  //     values: {
  //       total: ['50万', '50-70万', '70-90万', '90-110万', '110-130万', '130-150万', '150-200万', '200-300万', '300万以上'],
  //       hire: ['0—800元/月', '800—900元/月', '900—1000元/月', '1000—1100元/月', '1100—1200元/月', '1200—1300元/月', '1400—1500元/月', '1500—2000元/月', '2000-10000元/月']
  //     }
  //   }
  // },
  layout: {
    key: 'layout',
    title: '户型',
    width: 110,
    searchAble: {
      tf: false,
      type: 'singleSelect',
      valuesRoom: ['一室', '二室', '三室', '四室'],
      valuesHall: ['一厅', '二厅', '三厅', '四厅']

    },
    tableShow: {
      tf: true
    },
    mapSearchAble: {
      tf: true
    },
    editAble: {
      tf: true,
      type: 'typeSelect',
      values: {
        Room: ['一室', '二室', '三室', '四室'],
        Hall: ['一厅', '二厅', '三厅', '四厅']
      }

    }
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
      tf: false
    },
    editAble: {
      tf: true,
      type: 'areaInput'

    }
  },
  areaDetail: {
    key: 'areaDetail',
    title: '房屋面积',
    width: 110,
    searchAble: {
      tf: false,
      type: 'singleSelect',
      values: ['一室', '二室', '三室', '四室']
    },
    tableShow: {
      tf: false
    },
    mapSearchAble: {
      tf: false
    },
    editAble: {
      tf: false,
      type: 'input',
      values: ['一室', '二室', '三室', '四室']

    }
  },
  level: {
    key: 'level',
    title: '楼层',
    width: 80,
    searchAble: {
      tf: false,
      type: 'singleSelect',
      values: ['高层', '低层', '别墅']
    },
    tableShow: {
      tf: true
    },
    mapSearchAble: {
      tf: false
    },
    editAble: {
      tf: false,
      type: 'input'
    }
  },
  levelDetail: {
    key: 'levelDetail',
    title: '楼层',
    width: 90,
    searchAble: {
      tf: false
    },
    tableShow: {
      tf: false
    },
    mapSearchAble: {
      tf: false
    },
    editAble: {
      tf: true,
      type: 'twiceInput',
      values: ['高层', '低层', '别墅']

    }
  },
  payType: {
    key: 'payType',
    title: '付款',
    width: 90,
    searchAble: {
      tf: true,
      type: 'singleSelect',
      values: ['压一付一', '压一付二', '压一付三']
    },
    tableShow: {
      tf: false
    },
    mapSearchAble: {
      tf: false
    },
    editAble: {
      tf: true,
      type: 'select',
      values: ['压一付一', '压一付二', '压一付三']

    }
  },
  face: {
    key: 'face',
    title: '朝向',
    width: 80,
    searchAble: {
      tf: false,
      type: 'select',
      values: ['朝南', '向西', '东北']
    },
    tableShow: {
      tf: false
    },
    mapSearchAble: {
      tf: false
    },
    editAble: {
      tf: true,
      type: 'select',
      values: ['朝南', '向西', '东北']

    }
  },

  Intermediary: {
    key: 'Intermediary',
    title: '中介',
    width: 100,
    searchAble: {
      tf: true,
      type: 'IntermediarySelect',
    },
    tableShow: {
      tf: true
    },
    mapSearchAble: {
      tf: true
    },
    editAble: {
      tf: false,
      type: 'select',
      values: ['中介1', '中介2', '中介3', '个人房源']

    }
  },
  source: {
    key: 'source',
    title: '来源',
    width: 100,
    searchAble: {
      tf: false,
      type: 'singleSelect',
      values: ['中介1', '中介2', '中介3', '个人房源']
    },
    tableShow: {
      tf: false
    },
    mapSearchAble: {
      tf: false
    },
    editAble: {
      tf: true,
      type: 'sourceSelect',
      values: ['中介1', '中介2', '中介3', '个人房源']

    }
  },

  address: {
    key: 'address',
    title: '补充信息',
    width: 80,
    searchAble: {
      tf: false
    },
    tableShow: {
      tf: false
    },
    mapSearchAble: {
      tf: false
    },
    editAble: {
      tf: true,
      type: 'input'
    }
  },
  feature: {
    key: 'feature',
    title: '房屋特色',
    width: 80,
    searchAble: {
      tf: true,
      type: 'select',
      values: ['近地铁', '赠车位', '临地铁', '精装房', '超低价', '周边设施全', '拎包入住', '采光好', , '急出售', '带阳台']
    },
    tableShow: {
      tf: false
    },
    mapSearchAble: {
      tf: false
    },
    editAble: {
      tf: true,
      type: 'checkBox',
      values: ['近地铁', '赠车位', '临地铁', '精装房', '超低价', '周边设施全', '拎包入住', '采光好', '急出售', '带阳台']

    }
  },
  setInfo: {
    key: 'setInfo',
    title: '配套设置',
    searchAble: {
      tf: false
    },
    tableShow: {
      tf: false
    },
    mapSearchAble: {
      tf: false
    },
    editAble: {
      tf: true,
      type: 'checkBox',
      values: ['洗衣机', '空调', '衣柜', '电视', '冰箱', '热水器', '床', '暖气', '宽带', '天然气']
    }
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
      tf: false
    },
    editAble: {
      tf: false,
      type: 'false'
    }
  }

}
export default config
