const config = {
  name: {
    key: 'name',
    title: '名称',
    width: 180,
    searchAble: {
      tf: true,
      type: 'input'
    },
    mapSearchAble: {
      tf: true,
    },
    tableShow: {
      tf: true
    }

  },
  district: {
    key: 'district',
    title: '大区',
    width: 80,
    searchAble: {
      tf: true,
      type: 'select',
      values: ['铁西区', '于洪区', '皇姑区']
    },
    mapSearchAble: {
      tf: true,
    },
    tableShow: {
      tf: true
    }
  },
  city: {
    key: 'city',
    title: '城市',
    width: 100,
    searchAble: {
      tf: true,
      type: 'select',
      values: ['沈阳']
    },
    mapSearchAble: {
      tf: false,
    },
    tableShow: {
      tf: true
    }
  },
  isSchoolOverArea: {
    key: 'isSchoolOverArea',
    title: '学区房',
    width: 100,
    searchAble: {
      tf: true,
      type: 'select',
      values: ['是', '否']
    },
    mapSearchAble: {
      tf: true,
    },
    tableShow: {
      tf: true
    }
  },
  isSubwayOverArea: {
    key: 'isSubwayOverArea',
    title: '临地铁',
    width: 100,
    searchAble: {
      tf: true,
      type: 'select',
      values: ['是', '否']
    },
    mapSearchAble: {
      tf: true,
      type: 'input'
    },
    tableShow: {
      tf: true
    }
  },
  developer: {
    key: 'developer',
    title: '开发商',
    width: 150,
    searchAble: {
      tf: false
    },
    mapSearchAble: {
      tf: false,
    },
    tableShow: {
      tf: true
    }
  },
  address: {
    key: 'address',
    title: '详细地址',
    width: 300,
    searchAble: {
      tf: false
    },
    mapSearchAble: {
      tf: false,
    },
    tableShow: {
      tf: true
    }
  },

  operations: {
    key: 'operations',
    title: '操作',
    searchAble: {
      tf: false
    },
    mapSearchAble: {
      tf: false,
    },
    tableShow: {
      tf: true
    }
  }

}
export default config
