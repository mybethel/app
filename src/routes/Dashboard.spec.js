import { createLocalVue, shallowMount } from '@vue/test-utils'

import Dashboard from './Dashboard'

describe('Dashboard', () => {
  const mockAuthData = {
    user: { name: 'Albert Martin' },
    avatar: () => ''
  }

  let wrapper
  beforeAll(() => {
    const localVue = createLocalVue()
    wrapper = shallowMount(Dashboard, {
      localVue,
      provide: { authData: mockAuthData },
      stubs: ['v-avatar']
    })
  })

  afterAll(() => wrapper.destroy())

  it('greets the user', () => {
    expect(wrapper.text()).toContain(mockAuthData.user.name)
  })

  it('uses the correct greeting for the appropriate time period', async () => {
    const morning = new Date()
    morning.getHours = jest.fn().mockReturnValue(8)
    wrapper.setData({ date: morning })
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.greeting).toBe('morning')

    const afternoon = new Date()
    afternoon.getHours = jest.fn().mockReturnValue(12)
    wrapper.setData({ date: afternoon })
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.greeting).toBe('afternoon')

    const evening = new Date()
    evening.getHours = jest.fn().mockReturnValue(18)
    wrapper.setData({ date: evening })
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.greeting).toBe('evening')
  })
})
