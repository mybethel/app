import Vue from 'vue'
import { apolloClient } from './apollo'

import mutation from '../queries/login.gql'

const TOKEN_KEY = 'io.bethel.token'

const auth = new Vue({
  data: () => ({
    token: '',
    ministry: {},
    user: {}
  }),
  computed: {
    isLoggedIn: vm => !!vm.user.id,
    isAdmin: vm => vm.hasRole('admin')
  },
  watch: {
    token (newValue) {
      localStorage.setItem(TOKEN_KEY, newValue)
      apolloClient.resetStore()
    }
  },
  methods: {
    hasRole (role) {
      return this.isLoggedIn && this.user.permission === role
    },
    install (localVue) {
      localVue.prototype.$auth = localVue.$auth = this
    },
    async init () {
      const cachedToken = localStorage.getItem(TOKEN_KEY)
      if (!this.isLoggedIn && !cachedToken) return false

      const { data: { issueToken } } =
        await apolloClient.mutate({ mutation, variables: { token: cachedToken } })
      this.setToken(issueToken)

      return true
    },
    async login ({ email, password }) {
      try {
        const { data: { issueToken } } =
          await apolloClient.mutate({ mutation, variables: { email, password } })
        this.setToken(issueToken)

        return true
      } catch (err) {
        return false
      }
    },
    setToken ({ user, token }) {
      this.user = user
      this.token = token
    }
  }
})

Vue.use(auth)

export default auth
