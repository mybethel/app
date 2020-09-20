export default data => {
  const settings = new Map((data.settings?.items || []).map(({ key, value }) => [key, value]))

  return new Proxy(data, {
    get (target, prop, receiver) {
      switch (prop) {
        case 'settings':
          return settings

        default:
          return Reflect.get(...arguments)
      }
    }
  })
}
