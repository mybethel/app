export const BRAND_PRIMARY = [
  '#E1F4FD', '#B4E4F8', '#84D4F2', '#56C2E9', '#39B7E0', '#2FABD7', '#289CC4', '#1D88A9', '#137590', '#005464'
]

/**
 * Convert a standard Material Design color palette into a Vuetify-compatible object.
 * An offset can be specified to adjust light and dark variants appropriately.
 * @param {Array} palette - Material color palette with 10 shade values of 50 to 900.
 * @param {Int} offset - Optional offset from start to fine tune resulting Vuetify palette.
 * @returns {Object}
 */
export const withPalette = (palette, offset = 0) => [
  'lighten3', 'lighten2', 'lighten1', 'base', 'darken1', 'darken2', 'darken3', 'darken4'
].reduce((theme, key, i) => {
  theme[key] = palette[i + offset]
  return theme
}, {})
