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
    editAble: {
      type: 'select',
      values: ['铁西', '于洪', '皇姑']
    },
    mapSearchAble: {
      tf: true,
    },
  },
  schoolType: {
    key: 'type',
    title: '类型',
    width: 100,
    searchAble: {
      tf: true,
      type: 'select',
      values: ['本科', '专科', '高中', '职高', '小学', '幼儿园']
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
      values: ['本科', '专科', '高中', '职高', '小学', '幼儿园']
    }
  },
  form: {
    key: 'form',
    title: '形式',
    width: 120,
    searchAble: {
      tf: true,
      type: 'select',
      values: ['公立', '民办']
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
      values: ['公立', '民办']
    }
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
  },


}
export default config
