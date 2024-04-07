<template>
  <div>
    <h1>CSR Posts</h1>
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
  data() {
    return {
      posts: [],
    }
  },
  mounted() {
    this.$axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        this.posts = response.data
      })
  },
}
</script>
