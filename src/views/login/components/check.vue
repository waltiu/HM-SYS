<template>
  <div style="display:flex" class="check">
    <div>
      <el-input
        @focus="focus"
        @blur="blur"
        class="inputCheck"
        placeholder="请输入验证码"
        v-model="emitCheckData"
        prefix-icon="el-icon-message-solid"
      ></el-input>
    </div>
    <div class="canvas" @click="clickChange">
      <img
        class="back"
        src="http://img4.imgtn.bdimg.com/it/u=3907755254,838443552&fm=26&gp=0.jpg"
        width="90"
        height="37"
      />
      <canvas id="mycanvas" width="110" height="37">您的浏览器不支持canvas，请换个浏览器试试~</canvas>
    </div>
  </div>
</template>

<script>
export default {
  name: 'check',
  data () {
    return {
      checkData: '',
      emitCheckData: '',
      timer: ''
    }
  },

  methods: {
    focus () {
      window.clearInterval(this.timer)
    },
    blur () {
      if (this.emitCheckData.length === 4) {
        if (this.emitCheckData === this.checkData) {
          this.$emit('checkNumber', true)
        } else {
          this.$message({
            message: '验证码错误,请重新输入!',
            type: 'error'
          })
        }
      }
    },
    lineX () {
      var ranLineX = Math.floor(Math.random() * 90)
      return ranLineX
    },
    lineY () {
      var ranLineY = Math.floor(Math.random() * 25)
      return ranLineY
    },
    randData () {
      var str = 'abcdefghijklmnopqrstuvwxyz0123456789'
      var arr = str.split('')
      var validate = []
      var ranNum
      for (var i = 0; i < 4; i++) {
        ranNum = Math.floor(Math.random() * 36)
        validate.push(arr[ranNum])
        this.checkData += arr[ranNum]
      }
      return validate
    },
    rgb () {
      var r = Math.floor(Math.random() * 256)
      var g = Math.floor(Math.random() * 256)
      var b = Math.floor(Math.random() * 256)
      var color = '#' + r.toString(16) + g.toString(16) + b.toString(16)
      return color
    },
    rand (type) {
      switch (type) {
        case 'fontStyle':
          let arr1 = ['italic', 'normal', 'italic', 'oblique']
          return arr1[Math.floor((Math.random() * arr1.length))]
        case 'fontWidth':
          let arr2 = ['normal', 'thick', 'thicker']
          return arr2[Math.floor((Math.random() * arr2.length))]
        case 'fontSize':
          let arr3 = ['20px', '21px', '22px', '23px', '24px', '25px', '17px', '18px', '16px']
          return arr3[Math.floor((Math.random() * arr3.length))]
      }
    },
    drawLine (cxt) {
      for (var j = 0; j < 8; j++) {
        cxt.strokeStyle = this.rgb()
        cxt.beginPath()
        cxt.moveTo(this.lineX(), this.lineY())
        cxt.lineTo(this.lineX(), this.lineY())
        cxt.lineWidth = 0.5
        cxt.closePath()
        cxt.stroke()
      }
    },
    drawData (cxt, data) {
      for (var i = 0; i < 4; i++) {
        cxt.fillStyle = this.rgb()
        let font = `${this.rand('fontSize')} ${this.rand('fontStyle')} ${this.rand('fontWidth')}`
        cxt.font = font
        cxt.fillText(data[i], 10 + 17 * i, 25)
      }
    },
    clickChange () {
      var mycanvas = document.getElementById('mycanvas')
      var cxt = mycanvas.getContext('2d')
      cxt.fillStyle = '#000'
      cxt.fillRect(0, 0, 90, 40)
      this.drawLine(cxt)
      let data = this.randData()
      this.drawData(cxt, data)
    }
  },
  mounted () {
    this.clickChange()
    this.timer = setInterval(() => {
      this.checkData = ''
      this.clickChange()
    }, 2000)
  }

}
</script>

<style scoped>
.inputCheck {
  width: 105%;
  height: 30%;
  left: 23%;
}
.canvas {
  position: relative;
  left: 19%;
  top: 1px;
}
.check {
  height: 25px;
}
.back {
  position: absolute;
  opacity: 0.4;
}
</style>
