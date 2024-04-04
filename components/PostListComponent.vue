<template>
  <!-- 投稿リストを表示するためのリスト -->
  <ul>
    <!-- posts配列をループして、各投稿のタイトルをリストアイテムとして表示 -->
    <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
  </ul>
</template>

<script>
export default {
  // コンポーネントに渡されるpropsの定義
  props: {
    // posts: 投稿の配列。必須。
    posts: {
      type: Array, // 型はArray
      required: true, // 必須フラグはtrue
    },
  },
}
</script>
