<template>
  <div>
    <input v-model="newTodo" @keyup.enter="addTodo" />
    <button @click="removeAllTodos">全削除</button>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <input
          v-model="todo.title"
          type="text"
          @keyup.enter="updateTodo(todo)"
        />
        <button @click="removeTodo(todo.id)">削除</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'

export default Vue.extend({
  name: 'TodoSingle',
  data() {
    return {
      todos: [],
      newTodo: '',
    }
  },
  mounted() {
    this.fetchTodos()
  },
  methods: {
    async fetchTodos() {
      try {
        const response = await axios.get('http://localhost:3001/path/to/todos')
        this.todos = response.data
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching todos:', error)
      }
    },
    async addTodo() {
      if (this.newTodo.trim()) {
        try {
          const response = await axios.post(
            'http://localhost:3001/path/to/todos',
            {
              title: this.newTodo,
            }
          )
          this.todos.push(response.data)
          this.newTodo = ''
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('Error adding todo:', error)
        }
      }
    },
    async updateTodo(todo) {
      try {
        await axios.put(`http://localhost:3001/path/to/todos/${todo.id}`, todo)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error updating todo:', error)
      }
    },
    async removeTodo(id) {
      try {
        await axios.delete(`http://localhost:3001/path/to/todos/${id}`)
        this.todos = this.todos.filter((todo) => todo.id !== id)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error removing todo:', error)
      }
    },
    async removeAllTodos() {
      try {
        await axios.delete('http://localhost:3001/path/to/todos')
        this.todos = []
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error removing all todos:', error)
      }
    },
  },
})
</script>

<style scoped>
/* スタイルの指定 */
ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

button {
  padding: 5px 10px;
  background-color: #f00;
  color: #fff;
  border: none;
  border-radius: 5px;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
}
</style>
