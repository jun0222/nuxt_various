import { shallowMount } from '@vue/test-utils'
import Tutorial from './Tutorial.vue'

describe('Tutorial.vue', () => {
  // 正常系のテストケースを1つ記述
  it('renders props.msg when passed', () => {
    // propsDataでmsgプロパティに値を渡してコンポーネントをマウント
    const msg = 'Welcome'
    const wrapper = shallowMount(Tutorial, {
      propsData: { msg },
    })
    // コンポーネントが正しくレンダリングされ、msgプロパティの値が含まれているかを確認
    expect(wrapper.text()).toContain(msg)
  })
})
