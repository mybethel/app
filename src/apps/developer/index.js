import Vue from 'vue'

import { mdiHammerWrench as glyph } from '@mdi/js'

import routes from './routes'

export default {
  id: 'io.bethel.developer',
  displayName: 'Developer',
  icon: {
    color: '#172b3a',
    glyph
  },
  get springboardVisible () {
    return Vue.config.devtools
  },
  routes
}
