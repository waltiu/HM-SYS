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
          let githubUser = {
            name: res.data.name,
            email: res.data.email,
            location: res.data.location,
            password: res.data.name,
            token: 'I am token ?'
          }
          this.$http.get('/api/users/login', {
            params: githubUser
          }).then(res => {
            if (res.data.status === 200) {
              sessionStorage.setItem(
                'permission',
                'visitors'
              )
              sessionStorage.setItem(
                'token',
                res.data.data.token
              )
              sessionStorage.setItem(
                'useInfo',
                JSON.stringify(res.data.data)
              )
              this.$router.push('/analysis')
            } else {
              this.$http.post('/api/users/register', githubUser
              ).then(res => {
                sessionStorage.setItem(
                  'permission',
                  JSON.stringify(res.data.permission)
                )
                sessionStorage.setItem(
                  'token',
                  'visitors'
                )
                this.$router.push('/analysis')
              })
            }
          })
        }
        if (!res.status) {
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
