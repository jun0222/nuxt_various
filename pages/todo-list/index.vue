<template>
  <section>
    <h1>ToDoリスト</h1>
    <TodoList />
  </section>
</template>

<script>
import TodoList from '~/components/TodoList'

export default {
  components: {
    TodoList,
  },
}
</script>

<style scoped>
section {
  margin: 20px;
  height: 100%;
}
</style>
