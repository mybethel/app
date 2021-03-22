import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import { mdiApps, mdiChevronDown, mdiCog, mdiEye, mdiEyeOff, mdiFolder, mdiPlayBoxMultiple } from '@mdi/js'
import { makePalette } from 'material-color-tool'

const brand = makePalette('#137490')

Vue.use(Vuetify)

const vuetify = new Vuetify({
  icons: {
    iconfont: 'mdiSvg',
    values: {
      apps: mdiApps,
      chevronDown: mdiChevronDown,
      folder: mdiFolder,
      media: mdiPlayBoxMultiple,
      settings: mdiCog,
      show: mdiEye,
      hide: mdiEyeOff
    }
  },
  theme: {
    themes: {
      dark: {
        primary: {
          lighten3: brand[0],
          lighten2: brand[1],
          lighten1: brand[2],
          base: brand[3],
          darken1: brand[4],
          darken2: brand[5],
          darken3: brand[6],
          darken4: brand[7]
        }
      },
      light: {
        primary: {
          lighten5: brand[3],
          lighten4: brand[4],
          lighten3: brand[5],
          lighten2: brand[6],
          lighten1: brand[7],
          base: brand[8],
          darken1: brand[9]
        }
      }
    }
  }
})

function usePreferredScheme (e) {
  document.body.classList.add('theme--' + (e.matches ? 'dark' : 'light'))
  document.body.classList.remove('theme--' + (!e.matches ? 'dark' : 'light'))
  vuetify.framework.theme.dark = e.matches
  document.head.querySelector('link[rel="mask-icon"]').setAttribute('color', e.matches ? '#FFF' : '#137490')
}

const mq = window.matchMedia('(prefers-color-scheme: dark)')
usePreferredScheme(mq)
mq.addListener(usePreferredScheme)

export default vuetify
