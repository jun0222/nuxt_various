<template>
  <div>
    <h1>SSR Posts</h1>
    <PostListComponent :posts="posts" />
  </div>
</template>

<script>
// FIXME: 絶対パスでインポートする
import PostListComponent from '../../components/PostListComponent/PostListComponent.vue'

export default {
  components: {
    PostListComponent,
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    return { posts: data }
  },
}
</script>
