<template>
  <div>
    <iframe
      src="/Frame/oauth/index.html"
      style=" height: -webkit-fill-available;width: -webkit-fill-available;"
      class="iframezz"
      width="100vw"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'oauthWating',
  computed: {
    code: function () {
      return this.$store.state.oauth.githubCode
    }
  },
  watch: {
    code: {
      handler: function (newVal) {
        if (newVal) {
          this.$http
            .post('/github/login/oauth/access_token', {
              client_id: '87a56680db99ab3b240b',
              client_secret: '7da0cc9ab1fea121963780eb61e8c71dca31cc20',
              code: newVal
            })
            .then(res => this.getUserInfo(res.data))
        }
      },
      immediate: true
    }
  },
  methods: {
    getUserInfo (info) {
      this.$http.get(`/getGithubUserInfo?${info}`).then(res => {
        if (res.status === 200) {
          let a = {
            login: res.data.login,
            name: res.data.name,
            email: res.data.email,
            id: res.data.id
          }
          sessionStorage.setItem('userInfo', a)
          sessionStorage.setItem('permission', 'loginByOauth')
          sessionStorage.setItem('token', res.data.url)

          this.$router.push('/analysis')
        }
        if (!res.status) {
          console.log(9999999999999)
          this.$message({
            message: '登录失败,三秒后将跳转到登录界面!',
            type: 'warning'
          })
          setTimeout(() => {
            this.$router.push('/login')
          }, 3000)
        }
      })
    }
  },
  mounted () {
    this.$store.commit('setgithubCode', this.$route.query.code)
  }
}
</script>

<style></style>
