<template>
<div>
       <el-input
  placeholder="请输入内容"
  prefix-icon="el-icon-search"
  v-model="query"
  clearable>
</el-input>
    <button @click="search">搜索</button>
</div>
    
</template>
<script>
import axios from 'axios'
export default {
   data() {
			return {
				query:''
			}
    },
     methods: {
    search () {
          axios.get('/searchLocation/place/v2/suggestion', {
    params: {
      query:this.query,
      region: '沈阳',
      city_limit: true,
      output: 'json',
      ak: 'lvNKaGepBi4j6QORExntHLDTZkXLoCdi'
    }
  })
  .then(res=>(console.log(res)))
    }
  },
}
</script>