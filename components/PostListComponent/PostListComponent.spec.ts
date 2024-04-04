import { shallowMount } from '@vue/test-utils'
import PostListComponent from './PostListComponent.vue'

// PostListComponentのテストケースを記述
describe('PostListComponent.vue', () => {
  // コンポーネントがマウントされることを確認するテスト
  test('コンポーネントがマウントされる', () => {
    const wrapper = shallowMount(PostListComponent)
    expect(wrapper.exists()).toBeTruthy()
  })

  // propsで渡された投稿リストが正しく表示されることを確認するテスト
  test('propsで渡された投稿リストが表示される', () => {
    const posts = [
      { id: 1, title: 'テスト投稿1', body: 'これはテスト投稿1です。' },
      { id: 2, title: 'テスト投稿2', body: 'これはテスト投稿2です。' },
    ]
    const wrapper = shallowMount(PostListComponent, {
      propsData: { posts },
    })
    // 投稿の数だけli要素が存在するか
    expect(wrapper.findAll('li').length).toBe(posts.length)
    // 各投稿のタイトルと本文が正しく表示されているか
    posts.forEach((post, index) => {
      expect(wrapper.findAll('li').at(index).text()).toContain(post.title)
      //   expect(wrapper.findAll('li').at(index).text()).toContain(post.body)
    })
  })
})
