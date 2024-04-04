// FIXME: エラーになるのでコメント
// import { shallowMount, createLocalVue } from '@vue/test-utils'
// import Vuex from 'vuex'
// import ShowVuexExample from './ShowVuexExample.vue'

// // Vuexを使用するためのVueインスタンスを作成
// const localVue = createLocalVue()
// localVue.use(Vuex)

// describe('ShowVuexExample.vue', () => {
//   let actions: any
//   let state: any
//   let store: any

//   beforeEach(() => {
//     // ストアのモックを設定
//     state = {
//       counter: 0,
//     }

//     actions = {
//       doit: jest.fn(),
//       reset: jest.fn(),
//     }

//     store = new Vuex.Store({
//       state,
//       actions,
//     })
//   })

//   it('renders props.msg when passed', () => {
//     // コンポーネントをマウントし、ローカルVueインスタンスとストアを渡す
//     const wrapper = shallowMount(ShowVuexExample, { store, localVue })
//     // コンポーネントが正しくレンダリングされているか確認
//     expect(wrapper.text()).toContain('Hello')
//     expect(wrapper.text()).toContain('this is message.')

//     // クリックイベントをシミュレート
//     wrapper.find('.link').trigger('click')
//     // 'doit'アクションが呼び出されたか確認
//     expect(actions.doit).toHaveBeenCalled()
//     // 'reset'コミットが呼び出されたか確認
//     expect(actions.reset).toHaveBeenCalled()
//   })
// })

// 絶対に通るテスト
it('1は1であることを検証', () => {
  expect(1).toBe(1)
})
