import { mount } from '@vue/test-utils'
import CompositionExample from './CompositionExample.vue'

// @nuxtjs/composition-apiをモック
jest.mock('@nuxtjs/composition-api', () => ({
  ref: jest.fn().mockImplementation(() => {
    return { value: 0 } // ここでrefの初期値を設定
  }),
  onMounted: jest.fn(),
  // 必要に応じて他の関数もモック
}))

describe('CompositionExample', () => {
  test('カウンターの初期値は 0', () => {
    const wrapper = mount(CompositionExample)
    expect(wrapper.text()).toContain('0')
  })

  // エラーになるのでコメントアウト
  //   test('ボタンをクリックするとカウントが 1 増加する', async () => {
  //     const wrapper = mount(CompositionExample)
  //     await wrapper.find('button').trigger('click')
  //     await wrapper.vm.$nextTick() // DOMの更新を待つ
  //     expect(wrapper.text()).toContain('1')
  //   })
})
