import { ref, onMounted } from '@nuxtjs/composition-api'
import axios from 'axios'

export default function useTodo() {
  const todos = ref<{ id: number; text: string }[]>([])
  const newTodo = ref('')

  const fetchTodos = async () => {
    const response = await axios.get('http://localhost:3001/todos')
    todos.value = response.data
  }

  const addTodo = async () => {
    if (newTodo.value.trim()) {
      const response = await axios.post('http://localhost:3001/todos', {
        text: newTodo.value,
      })
      todos.value.push(response.data)
      newTodo.value = ''
    }
  }

  const removeTodo = async (id: number) => {
    await axios.delete(`http://localhost:3001/todos/${id}`)
    todos.value = todos.value.filter((todo) => todo.id !== id)
  }

  const updateTodo = async (id: number, text: string) => {
    const response = await axios.put(`http://localhost:3001/todos/${id}`, {
      text,
    })
    if (response.status === 200) {
      const index = todos.value.findIndex((todo) => todo.id === id)
      if (index !== -1) {
        todos.value[index].text = text
      }
    } else {
      throw new Error('Todoの更新に失敗しました。')
    }
  }

  onMounted(fetchTodos)

  return {
    todos,
    newTodo,
    addTodo,
    removeTodo,
    updateTodo,
  }
}
