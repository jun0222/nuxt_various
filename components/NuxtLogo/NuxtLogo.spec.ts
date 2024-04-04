import { mount } from '@vue/test-utils'
import NuxtLogo from './NuxtLogo.vue'

describe('NuxtLogo', () => {
  test('はSVGをレンダリングする', () => {
    const wrapper = mount(NuxtLogo)
    expect(wrapper.find('svg').exists()).toBeTruthy()
  })
})
