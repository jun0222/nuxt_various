<template>
  <div>
    <h1>Todoリスト</h1>
    <input
      v-model="newTodo"
      placeholder="新しいTodoを追加"
      @keyup.enter="addTodo"
    />
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo }}
        <button @click="removeTodo(index)">削除</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import useTodo from '~/composables/useTodo'

export default {
  name: 'TodoComposition',
  setup() {
    // useTodoコンポジション関数からロジックを取得
    const { todos, newTodo, addTodo, removeTodo } = useTodo()

    return {
      todos,
      newTodo,
      addTodo,
      removeTodo,
    }
  },
}
</script>
