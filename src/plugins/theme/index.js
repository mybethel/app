import { withPalette, BRAND_PRIMARY } from './colors'

export { default as icons } from './icons'

export const theme = {
  themes: {
    dark: {
      primary: withPalette(BRAND_PRIMARY)
    },
    light: {
      primary: withPalette(BRAND_PRIMARY, 3)
    }
  }
}
