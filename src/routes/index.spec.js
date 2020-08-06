import VueRouter from 'vue-router'

import router from './'

describe('routes', () => {
  it('exports a VueRouter instance', () => {
    expect(router).toBeInstanceOf(VueRouter)
  })
})
