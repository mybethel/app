import collection from './collection'

describe('settings', () => {
  it('proxies to the settings store, if available', () => {
    const document = collection({
      settings: {
        items: [{ key: 'foo', value: 'bar' }]
      }
    })

    expect(document.settings.size).toBe(1)
    expect(document.settings.get('foo')).toBe('bar')
  })

  it('gracefully fails if no settings exist on the collection', () => {
    const document = collection({ settings: null })
    expect(document.settings.size).toBe(0)
  })
})
