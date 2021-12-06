import Vue from 'vue'
import App from './App.vue'
import router from './routes'

import { registry } from './apps'

import apiClient from './plugins/api'
import apolloProvider from './plugins/apollo'
import auth, { authData } from './plugins/auth'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

router.beforeEach(async (to, from, next) => {
  if (to.path !== '/login' && !await auth.init()) return next('/login')
  next()
})

new Vue({
  router,
  provide: {
    apiClient,
    authData,
    plugins: registry.plugins
  },
  vuetify,
  apolloProvider,
  data: () => ({
    mq: window.matchMedia('(prefers-color-scheme: dark)')
  }),
  created () {
    this.onPrefersColorSchemeChanged(this.mq)
    this.mq.onchange = this.onPrefersColorSchemeChanged
  },
  methods: {
    onPrefersColorSchemeChanged ({ matches: preferDark }) {
      vuetify.framework.theme.dark = preferDark
      document.head.querySelector('link[rel="mask-icon"]').setAttribute('color', preferDark ? '#FFF' : '#137490')
    }
  },
  render: h => h(App)
}).$mount('#app')
