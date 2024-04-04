import { ref } from '@nuxtjs/composition-api'

export default function useTodo() {
  const todos = ref<string[]>([])
  const newTodo = ref('')

  const addTodo = () => {
    if (newTodo.value.trim()) {
      todos.value.push(newTodo.value)
      newTodo.value = ''
    }
  }

  const removeTodo = (index: number) => {
    todos.value.splice(index)
  }

  return {
    todos,
    newTodo,
    addTodo,
    removeTodo,
  }
}
