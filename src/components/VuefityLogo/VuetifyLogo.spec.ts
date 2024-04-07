import { shallowMount } from '@vue/test-utils'
import VuetifyLogo from './VuetifyLogo.vue'

describe('VuetifyLogo.vue', () => {
  // VuetifyLogoコンポーネントが正しくレンダリングされるかのテスト
  it('renders correctly', () => {
    // shallowMountを使用して、VuetifyLogoコンポーネントをマウント
    const wrapper = shallowMount(VuetifyLogo)
    // レンダリングされたHTMLに'vuetify-logo'クラスを持つimgタグが含まれているかを確認
    expect(wrapper.find('.vuetify-logo').exists()).toBe(true)
    // imgタグのsrc属性が正しいかを確認
    expect(wrapper.find('.vuetify-logo').attributes('src')).toBe(
      '/vuetify-logo.svg'
    )
    // imgタグのalt属性が正しいかを確認
    expect(wrapper.find('.vuetify-logo').attributes('alt')).toBe('Vuetify Logo')
  })
})
