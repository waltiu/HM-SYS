import Vue from 'vue'

function getBase64 (file) {
  return new Promise(function (resolve, reject) {
    let reader = new FileReader()
    let imgResult = ''
    reader.readAsDataURL(file)
    reader.onload = function () {
      imgResult = reader.result
    }
    reader.onerror = function (error) {
      reject(error)
    }
    reader.onloadend = function () {
      resolve(imgResult)
    }
  })
}
async function getFile (file) {
  let info = await getBase64(file).then(res => {
    return res
  })
  return info
}
Vue.prototype.$toBase64 = (file, fileList) => {
  return getFile(file)
}
