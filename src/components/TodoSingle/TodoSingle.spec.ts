// Vue Test Utilsとaxios-mock-adapterをインポートします
import { shallowMount } from '@vue/test-utils'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import flushPromises from 'flush-promises'
import TodoSingle from './TodoSingle.vue'

// axiosのリクエストをモックするためにMockAdapterをインスタンス化します
const mock = new MockAdapter(axios)

describe('TodoSingle.vue', () => {
  // 各テストが実行される前にモックをリセットし、新しい状態でモックを設定します
  beforeEach(() => {
    mock.reset()

    // POSTリクエストのモック。新しいTODOが追加されたときのレスポンスを模倣します
    mock.onPost('http://localhost:3001/path/to/todos').reply(201, {
      id: 2, // 新しく追加されるTODOのID
      title: 'New Test Todo', // 新しく追加されるTODOのタイトル
    })

    // GETリクエストのモック。TODOリストを取得するときのレスポンスを模倣します
    mock.onGet('http://localhost:3001/path/to/todos').reply(200, [
      { id: 1, title: 'Test Todo' }, // 既存のTODO
      { id: 2, title: 'New Test Todo' }, // 新しく追加されたTODO
    ])
  })

  // コンポーネントがマウントされたときにTODOリストが正しくフェッチされ、描画されることをテストします
  it('fetches todos on mount and renders them', async () => {
    // TodoSingleコンポーネントをシャローマウントします
    const wrapper = shallowMount(TodoSingle, {
      mocks: {
        axios, // axiosのモックをコンポーネントに渡します
      },
    })

    await flushPromises() // すべてのプロミスが解決されるのを待ちます
    await wrapper.vm.$nextTick() // VueのDOMの更新が完了するのを待ちます

    // レンダリングされたTODOアイテムの数が期待通りであることを検証します
    expect(wrapper.findAll('li').length).toBe(2) // 期待値は2です
  })
})
