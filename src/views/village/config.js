const config = {
  name: {
    key: 'name',
    title: '名称',
    width: 150,
    searchAble: {
      tf: true,
      type: 'input'
    },
    mapSearchAble: {
      tf: true
    },
    tableShow: {
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
    width: 80,
    searchAble: {
      tf: true,
      type: 'select',
      values: [
        '和平区', '沈河区', '皇姑区', '大东区', '铁西区', '东陵区', '于洪区', '沈北新区', '苏家屯区', '浑南新区'
      ]
    },
    mapSearchAble: {
      tf: true
    },
    tableShow: {
      tf: true
    },
    editAble: {
      tf: true,
      type: 'select',
      values: [
        '和平区', '沈河区', '皇姑区', '大东区', '铁西区', '东陵区', '于洪区', '沈北新区', '苏家屯区', '浑南新区'
      ]
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
      tf: false
    },
    tableShow: {
      tf: true
    },
    editAble: {
      tf: true,
      type: 'select',
      values: ['沈阳']
    }
  },
  isSchoolOverArea: {
    key: 'isSchoolOverArea',
    title: '学区区域',
    width: 100,
    searchAble: {
      tf: true,
      type: 'select',
      values: ['是', '否']
    },
    mapSearchAble: {
      tf: true
    },
    tableShow: {
      tf: true
    },
    editAble: {
      tf: true,
      type: 'select',
      values: ['是', '否']
    }
  },
  isSubwayOverArea: {
    key: 'isSubwayOverArea',
    title: '地铁区域',
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
    },
    editAble: {
      tf: true,
      type: 'select',
      values: ['是', '否']
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
      tf: false
    },
    tableShow: {
      tf: true
    },
    editAble: {
      tf: true,
      type: 'input'
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
      tf: false
    },
    tableShow: {
      tf: true
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
    mapSearchAble: {
      tf: false
    },
    tableShow: {
      tf: true
    },
    editAble: {
      tf: false
    }
  }

}
export default config
