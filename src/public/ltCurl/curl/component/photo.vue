<template>
  <div>
    <el-carousel :autoplay="false" arrow="always" @change="change">
      <el-carousel-item v-for="item in infoConfig" :key="item.key">
        <el-upload
          class="upload-demo"
          drag
          multiple
          :before-upload="success"
          :file-list="fileList[item.key]"
          list-type="picture"
          action
        >
          <div>{{item.title}}</div>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            将文件拖到此处，或
            <em>点击上传</em>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
          </div>
        </el-upload>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'housePhoto',
  data () {
    return {
      fileList: {
        main: [
        ],
        Bedroom: [],
        Kitchen: [],
        saloon: [],
        other: []
      },
      formData: {
        photoInfo: {

        }
      },
      infoConfig: [
        {
          title: '封面',
          key: 'main'
        },
        {
          title: '卧室',
          key: 'Bedroom'
        },
        {
          title: '厨房',
          key: 'Kitchen'
        },
        {
          title: '客厅',
          key: 'saloon'
        },
        {
          title: '卫生间',
          key: 'Toilet'
        },
        {
          title: '其他',
          key: 'other'
        }
      ],
      indexKey: 'main'
    }
  },
  methods: {

    change (index) {
      this.indexKey = this.infoConfig[index].key
    },
    success (info) {
      this.$toBase64(info).then(res => {
        this.formData.photoInfo[this.indexKey] = res
        let list = {
          name: info.name,
          url: res
        }
        this.fileList[this.indexKey] = []
        this.fileList[this.indexKey].push(list)
        this.$emit('getInfo', this.formData)
      })
    }
  }
}
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.upload-demo {
  width: 350px;
  margin: 0px auto;
  right: 0px;
  left: 0px;
  top: 3%;
  position: relative;
}
.el-upload-list--picture {
  width: 360px;
}
</style>
