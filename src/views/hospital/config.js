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
      type: 'input'
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
  type: {
    key: 'type',
    title: '类型',
    width: 80,
    searchAble: {
      tf: true,
      type: 'select',
      values: ['甲级', '乙级', '丙级']
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
      values: ['甲级', '乙级', '丙级']
    }
  },
  organization: {
    key: ' organization',
    title: '医疗机构',
    width: 80,
    searchAble: {
      tf: true,
      type: 'select',
      values: ['综合医院', '中医医院', '中西医综合医院', '民族医医院', '专科医院', '康复医院']
    },
    tableShow: {
      tf: true
    },
    editAble: {
      tf: true,
      type: 'select',
      values: ['综合医院', '中医医院', '中西医综合医院', '民族医医院', '专科医院', '康复医院']
    },
    mapSearchAble: {
      tf: true,
    },
  },

  address: {
    key: 'address',
    title: '详细地址',
    width: 300,
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
      type: 'input'
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
