import Vue from 'vue'
import { apolloClient } from './apollo'

import mutation from '../queries/login.gql'

/**
 * @public
 * Information here is provided globally and should be used by plugins to
 * determine access and display information about the user or ministry.
 */
export const authData = Vue.observable({
  user: {},
  ministry: {},

  get isAdmin () {
    return this.isLoggedIn && this.user.permission === 'admin'
  },
  get isLoggedIn () {
    return !!this.user.id
  }
})

const TOKEN_KEY = 'io.bethel.token'

/**
 * @private
 * The Vue plugin below manages token and login state and should only be used
 * by the core application. Any public information is synced to `authData`
 */
const auth = new Vue({
  data: () => ({ token: '' }),
  watch: {
    token (newValue) {
      localStorage.setItem(TOKEN_KEY, newValue)
      apolloClient.resetStore()
    }
  },
  methods: {
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
      authData.user = user
      this.token = token
    }
  }
})

Vue.use(auth)

export default auth
