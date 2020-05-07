import Vue from 'vue'

const TOKEN_KEY = 'io.bethel.token'

const auth = new Vue({
  data: {
    loggedIn: false,
    ministry: {},
    user: {}
  },
  computed: {
    isLoggedIn: vm => !!vm.user.id,
    isAdmin: vm => vm.hasRole('admin')
  },
  methods: {
    hasRole (role) {
      return this.isLoggedIn && this.user.permission === role
    },
    install (localVue) {
      localVue.prototype.$auth = localVue.$auth = this
    },
    async init () {
      const token = localStorage.getItem(TOKEN_KEY)
      if (!this.isLoggedIn && !token) return false
    }
  }
})

Vue.use(auth)

export default auth
