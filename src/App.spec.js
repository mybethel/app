import { createLocalVue, shallowMount } from '@vue/test-utils'

import Vue from 'vue'

import App from './App'

describe('App', () => {
  const mockAuthData = Vue.observable({
    isLoggedIn: false
  })

  let wrapper
  beforeAll(() => {
    wrapper = shallowMount(App, {
      localVue: createLocalVue(),
      provide: { authData: mockAuthData },
      stubs: ['router-view']
    })
  })

  afterAll(() => wrapper.destroy())

  it('only shows the toolbar for logged-in users', async () => {
    expect(wrapper.findComponent({ name: 'AppBar' }).exists()).toBe(false)

    mockAuthData.isLoggedIn = true
    await wrapper.vm.$nextTick()

    expect(wrapper.findComponent({ name: 'AppBar' }).exists()).toBe(true)
  })
})
