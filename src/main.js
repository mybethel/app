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
  render: h => h(App)
}).$mount('#app')
