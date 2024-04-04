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

<script>
import { ref } from '@nuxtjs/composition-api'

export default {
  setup() {
    const todos = ref([])
    const newTodo = ref('')

    const addTodo = () => {
      if (newTodo.value.trim()) {
        todos.value.push(newTodo.value)
        newTodo.value = ''
      }
    }

    const removeTodo = (index) => {
      todos.value.splice(index, 1)
    }

    return {
      todos,
      newTodo,
      addTodo,
      removeTodo,
    }
  },
}
</script>
