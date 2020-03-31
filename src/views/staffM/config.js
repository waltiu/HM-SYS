const config = {
  name: {
    key: 'name',
    title: '员工姓名',
    width: 180,
    searchAble: {
      tf: true,
      type: 'input'
    },
    editAble: {
      tf: true,
      type: 'input',

    }

  },
  tel: {
    key: 'tel',
    title: '员工电话',
    width: 280,
    searchAble: {
      tf: false,
      type: 'input'
    },
    editAble: {
      tf: true,
      type: 'input',

    }

  },
  count: {
    key: 'count',
    title: '房源数',
    width: 280,
    searchAble: {
      tf: false,
      type: 'input'
    },
    editAble: {
      tf: true,
      type: 'input',

    }

  },
  address: {
    key: 'address',
    title: '员工地址',
    width: 400,
    searchAble: {
      tf: false,
      type: 'input'
    },
    editAble: {
      tf: true,
      type: 'input',

    }

  },



}
export default config
