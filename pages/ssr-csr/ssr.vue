<template>
  <div>
    <h1>SSR Posts</h1>
    <PostListComponent :posts="posts" />
  </div>
</template>

<script>
import PostListComponent from '~/components/PostListComponent.vue'

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
