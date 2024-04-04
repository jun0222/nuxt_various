import { mount } from '@vue/test-utils'
import TodoComposition from './TodoComposition.vue'
jest.mock('@nuxtjs/composition-api', () => ({
  ref: jest.fn().mockReturnValue({ value: [] }), // モック化したref関数を返す
}))

describe('TodoComposition.vue', () => {
  test('スナップショットテスト', () => {
    const wrapper = mount(TodoComposition)
    expect(wrapper.element).toMatchSnapshot()
  })

  //   test('新しいTodoを追加する正常系テスト', async () => {
  //     const wrapper = mount(TodoComposition)
  //     const input = wrapper.find('input')
  //     const newTodoText = '新しいTodo'

  //     await input.setValue(newTodoText)
  //     await input.trigger('keydown.enter')
  //     await wrapper.vm.$nextTick()
  //     expect(wrapper.text()).toContain(newTodoText)
  //   })
})
