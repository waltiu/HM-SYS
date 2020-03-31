const config = {
  name: {
    key: 'name',
    title: '名称',
    width: 180,
    searchAble: {
      tf: true,
      type: 'input'
    }

  },
  area: {
    key: 'area',
    title: '大区',
    width: 80,
    searchAble: {
      tf: true,
      type: 'select',
      values: ['铁西区', '于洪区', '皇姑区']
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
    }
  },
  developer: {
    key: 'developer',
    title: '开发商',
    width: 150,
    searchAble: {
      tf: false
    }
  },
  address: {
    key: 'address',
    title: '详细地址',
    width: 300,
    searchAble: {
      tf: false
    }
  },

  operations: {
    key: 'operations',
    title: '操作',
    searchAble: {
      tf: false
    }
  }

}
export default config
