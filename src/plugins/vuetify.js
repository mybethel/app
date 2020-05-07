import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import { mdiApps } from '@mdi/js'

Vue.use(Vuetify)

const vuetify = new Vuetify({
  icons: {
    iconfont: 'mdiSvg',
    values: {
      apps: mdiApps
    }
  }
})

function usePreferredScheme (e) {
  document.body.classList.add('theme--' + (e.matches ? 'dark' : 'light'))
  document.body.classList.remove('theme--' + (!e.matches ? 'dark' : 'light'))
  vuetify.framework.theme.dark = e.matches
}

const mq = window.matchMedia('(prefers-color-scheme: dark)')
usePreferredScheme(mq)
mq.addListener(usePreferredScheme)

export default vuetify
