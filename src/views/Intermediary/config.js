const config = {
  name: {
    key: 'name',
    title: '名称',
    width: 180,
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
    editAble: {
      tf: true,
      type: 'input',

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
    tableShow: {
      tf: true
    },
    mapSearchAble: {
      tf: false,
    },
    editAble: {
      tf: true,
      type: 'select',
      values: ['沈阳']
    }

  },
  district: {
    key: 'district',
    title: '大区',
    width: 100,
    searchAble: {
      tf: true,
      type: 'select',
      values: ['铁西', '于洪', '皇姑']
    },
    tableShow: {
      tf: true
    },
    mapSearchAble: {
      tf: true,
    },
    editAble: {
      tf: true,
      type: 'select',
      values: ['铁西', '于洪', '皇姑']
    }
  },
  numbers: {
    key: 'numbers',
    title: '房源数',
    width: 180,
    searchAble: {
      tf: false,
      type: 'input'
    },
    tableShow: {
      tf: true
    },
    mapSearchAble: {
      tf: false,
    },
    editAble: {
      tf: false,
    }
  },

  address: {
    key: 'address',
    title: '详细地址',

    searchAble: {
      tf: false
    },
    tableShow: {
      tf: true
    },
    mapSearchAble: {
      tf: false,
    },
    editAble: {
      tf: true,
      type: 'input',
    }
  },

  url: {
    key: 'url',
    title: '官方网址',
    searchAble: {
      tf: false
    },
    tableShow: {
      tf: false
    },
    mapSearchAble: {
      tf: false,
    },
    editAble: {
      tf: true,
      type: 'input'
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
      tf: false,
    },
    editAble: {
      tf: false,
    }
  }

}
export default config
