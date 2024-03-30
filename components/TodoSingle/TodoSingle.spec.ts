import { shallowMount } from '@vue/test-utils'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import TodoSingle from './TodoSingle.vue'

const mock = new MockAdapter(axios)

describe('TodoSingle.vue', () => {
  beforeEach(() => {
    mock.reset()
  })

  it('fetches todos on mount and renders them', async () => {
    mock
      .onGet('http://localhost:3001/path/to/todos')
      .reply(200, [{ id: 1, title: 'Test Todo' }])

    const wrapper = shallowMount(TodoSingle, {
      mocks: {
        axios,
      },
    })

    await wrapper.vm.$nextTick()
    expect(wrapper.findAll('li').length).toBe(1)
  })
})
