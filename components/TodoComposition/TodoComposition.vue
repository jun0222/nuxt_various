<template>
  <div>
    <h1>Todoリスト</h1>
    <input
      v-model="newTodo"
      placeholder="新しいTodoを追加"
      style="background-color: white"
      @keyup.enter="addTodo"
    />
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <input
          v-model="todo.text"
          style="background-color: white"
          @blur="updateTodo(todo.id, todo.text)"
        />
        <button @click="removeTodo(todo.id)">削除</button>
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
    const { todos, newTodo, addTodo, removeTodo, updateTodo } = useTodo()

    return {
      todos,
      newTodo,
      addTodo,
      removeTodo,
      updateTodo,
    }
  },
}
</script>
