import { createLocalVue, shallowMount } from '@vue/test-utils'

import Vuetify from 'vuetify'

import Login from './Login'

describe('Login', () => {
  const mockAuth = { login: jest.fn() }
  const mockRouter = { push: jest.fn() }

  let wrapper
  beforeAll(() => {
    const localVue = createLocalVue()

    const vuetify = new Vuetify()
    wrapper = shallowMount(Login, {
      localVue,
      vuetify,
      mocks: {
        $auth: mockAuth,
        $router: mockRouter
      },
      provide: {
        theme: { isDark: false }
      }
    })
  })

  afterAll(() => wrapper.destroy())

  it('prompts an anonymous user to login', () => {
    expect(wrapper.text()).toContain('Sign in')
    expect(wrapper.findAllComponents({ name: 'VTextField' }).length).toBe(2)
  })

  it('gracefully handles invalid login', async () => {
    mockAuth.login.mockResolvedValueOnce(false)
    await wrapper.vm.login()
    expect(wrapper.vm.error).toBe(true)
    expect(mockRouter.push).not.toHaveBeenCalled()
  })

  it('resets the error state when the user interacts with the form', async () => {
    wrapper.vm.form.email = 'albert@imor.tl'
    wrapper.vm.form.password = 'nicetry'
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.error).toBe(false)
  })

  it('redirects the user to the homepage on success', async () => {
    mockAuth.login.mockResolvedValueOnce(true)
    await wrapper.vm.login()
    expect(wrapper.vm.error).toBe(false)
    expect(mockRouter.push).toHaveBeenCalled()
  })
})
