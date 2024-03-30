import { shallowMount } from '@vue/test-utils'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import flushPromises from 'flush-promises'
import TodoSingle from './TodoSingle.vue'

const mock = new MockAdapter(axios)

describe('TodoSingle.vue', () => {
  beforeEach(() => {
    mock.reset()

    // POSTリクエスト（新しいTODOの追加）に対するモックの設定
    mock.onPost('http://localhost:3001/path/to/todos').reply(201, {
      id: 2, // 新しく追加される想定のTODOのID
      title: 'New Test Todo', // 新しく追加される想定のTODOのタイトル
    })

    // GETリクエスト（TODOリストの取得）に対するモックの設定
    // ここでは、新しく追加されたTODOが既にリストに含まれている状態を模倣
    mock.onGet('http://localhost:3001/path/to/todos').reply(200, [
      { id: 1, title: 'Test Todo' }, // 既存のTODO
      { id: 2, title: 'New Test Todo' }, // 新しく追加されたTODO
    ])
  })

  it('fetches todos on mount and renders them', async () => {
    const wrapper = shallowMount(TodoSingle, {
      mocks: {
        axios,
      },
    })

    await flushPromises() // 全てのプロミスが解決されるのを待つ
    await wrapper.vm.$nextTick() // VueのDOM更新が完了するのを待つ

    expect(wrapper.findAll('li').length).toBe(2) // 追加されたTodoも含めた総数をチェック
  })
})
