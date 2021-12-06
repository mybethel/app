import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import { icons, theme } from './theme'

Vue.use(Vuetify)

const vuetify = new Vuetify({
  icons: {
    iconfont: 'mdiSvg',
    values: icons
  },
  theme
})

export default vuetify
