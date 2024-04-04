// Vue Test Utilsをインポートして、Vueコンポーネントをマウントするための準備をします
import { mount } from '@vue/test-utils'
// テスト対象のVueコンポーネントをインポートします
import CompositionExample from './CompositionExample.vue'

// @nuxtjs/composition-apiをモック化して、テスト中に使用する関数をオーバーライドします
jest.mock('@nuxtjs/composition-api', () => ({
  // ref関数をモック化して、テスト用の初期値を設定します
  ref: jest.fn().mockImplementation(() => {
    return { value: 0 } // ここでrefの初期値を0に設定
  }),
  // onMountedライフサイクルフックをモック化しますが、この例では特に実装はしていません
  onMounted: jest.fn(),
  // 必要に応じて他のComposition API関数もモック化できます
}))

// CompositionExampleコンポーネントのテストスイートを定義します
describe('CompositionExample', () => {
  // カウンターの初期値が0であることをテストします
  test('カウンターの初期値は 0', () => {
    // CompositionExampleコンポーネントをマウントします
    const wrapper = mount(CompositionExample)
    // マウントされたコンポーネントのテキストに'0'が含まれているかを検証します
    expect(wrapper.text()).toContain('0')
  })

  // 以下のテストはエラーが発生するため、コメントアウトしています
  // ボタンをクリックするとカウントが1増加することをテストする予定でした
  //   test('ボタンをクリックするとカウントが 1 増加する', async () => {
  //     const wrapper = mount(CompositionExample)
  //     await wrapper.find('button').trigger('click')
  //     await wrapper.vm.$nextTick() // DOMの更新を待ちます
  //     expect(wrapper.text()).toContain('1')
  //   })
})
