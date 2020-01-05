<template>
  <div>正在进行第三方登录ing{{ code }}</div>
</template>

<script>
export default {
  name: '1',
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
        let a = res
      })
    }
  },
  mounted () {
    this.$store.commit('setgithubCode', this.$route.query.code)
  }
}
</script>

<style></style>
