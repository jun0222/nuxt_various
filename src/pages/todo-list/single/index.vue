<template>
  <section>
    <h1>ToDoリスト シングルページ</h1>
    <TodoSingle />
  </section>
</template>

<script>
// FIXME: 絶対パスでインポートする
import TodoSingle from '../../../components/TodoSingle/TodoSingle.vue'

export default {
  components: {
    TodoSingle,
  },
}
</script>

<style scoped>
section {
  margin: 20px;
  height: 100%;
}
</style>
