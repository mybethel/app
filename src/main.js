import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'

import apolloProvider from './plugins/apollo'
import auth from './plugins/auth'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

router.beforeEach(async (to, from, next) => {
  if (to.path !== '/login' && !await auth.init()) return next('/login')
  next()
})

new Vue({
  router,
  store,
  vuetify,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
