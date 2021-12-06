const { theme } = require('.')

describe('default theme', () => {
  test('primary', () => {
    expect(theme.themes.dark.primary.base).toBe('#56C2E9')
    expect(theme.themes.light.primary.base).toBe('#289CC4')
  })
})
