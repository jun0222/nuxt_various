<template>
  <!-- コンポーネントのルート要素 -->
  <div>
    <!-- 新しいTODOを追加するためのテキスト入力。Enterキーを押すことでaddTodoメソッドが呼ばれます -->
    <input v-model="newTodo" @keyup.enter="addTodo" />
    <!-- 全てのTODOを削除するボタン。クリックするとremoveAllTodosメソッドが呼ばれます -->
    <button @click="removeAllTodos">全削除</button>
    <!-- 現在のTODOリストを表示するためのリスト -->
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <!-- 各TODO項目のタイトルを表示・編集可能なテキストフィールド -->
        <input
          v-model="todo.title"
          type="text"
          @keyup.enter="updateTodo(todo)"
        />
        <!-- 個別のTODOを削除するボタン。クリックするとremoveTodoメソッドが引数todo.idを持って呼ばれます -->
        <button @click="removeTodo(todo.id)">削除</button>
      </li>
    </ul>
  </div>
</template>

<script>
// axiosをインポートして、HTTPリクエストを簡単に行えるようにします
import axios from 'axios'
// Vueコンポーネントを作成するためにVueをインポートします
import Vue from 'vue'

export default Vue.extend({
  name: 'TodoSingle', // コンポーネントの名前
  data() {
    // コンポーネントの状態（リアクティブデータ）
    return {
      todos: [], // 現在のTODOリスト
      newTodo: '', // 新しいTODOを追加するためのテキストフィールドの内容
    }
  },
  mounted() {
    // コンポーネントがマウントされた後に、サーバーからTODOリストをフェッチします
    this.fetchTodos()
  },
  methods: {
    // サーバーからTODOリストを非同期にフェッチするメソッド
    async fetchTodos() {
      try {
        const response = await axios.get('http://localhost:3001/path/to/todos')
        // レスポンスのデータをtodos配列にセットします
        this.todos = response.data
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching todos:', error)
      }
    },
    // 新しいTODOを追加するメソッド
    async addTodo() {
      if (this.newTodo.trim()) {
        try {
          const response = await axios.post(
            'http://localhost:3001/path/to/todos',
            {
              title: this.newTodo,
            }
          )
          // 追加されたTODOをtodos配列にプッシュします
          this.todos.push(response.data)
          this.newTodo = '' // 入力フィールドをクリアします
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('Error adding todo:', error)
        }
      }
    },
    // 特定のTODOを更新するメソッド
    async updateTodo(todo) {
      try {
        await axios.put(`http://localhost:3001/path/to/todos/${todo.id}`, todo)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error updating todo:', error)
      }
    },
    // 特定のTODOを削除するメソッド
    async removeTodo(id) {
      try {
        await axios.delete(`http://localhost:3001/path/to/todos/${id}`)
        // 削除されたTODOを除外してtodos配列を更新します
        this.todos = this.todos.filter((todo) => todo.id !== id)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error removing todo:', error)
      }
    },
    // 全てのTODOを削除するメソッド
    async removeAllTodos() {
      try {
        await axios.delete('http://localhost:3001/path/to/todos')
        // todos配列を空にします
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
  list-style: none; /* リストアイテムの前にある点を非表示にします */
  padding: 0; /* パディングを0に設定します */
}

li {
  display: flex; /* フレックスボックスを使用してアイテムを横に並べます */
  justify-content: space-between; /* アイテムを両端に配置します */
  align-items: center; /* アイテムを中央揃えにします */
  padding: 10px; /* パディングを設定します */
  border-bottom: 1px solid #ccc; /* 下側に境界線を追加します */
}

button {
  padding: 5px 10px; /* ボタンのパディングを設定します */
  background-color: #f00; /* ボタンの背景色を設定します */
  color: #fff; /* ボタンのテキスト色を設定します */
  border: none; /* ボタンの境界線を非表示にします */
  border-radius: 5px; /* ボタンの角を丸くします */
}

input {
  width: 100%; /* 入力フィールドの幅を100%に設定します */
  padding: 10px; /* 入力フィールドのパディングを設定します */
  font-size: 16px; /* フォントサイズを設定します */
  border: 1px solid #ccc; /* 境界線のスタイルを設定します */
  border-radius: 5px; /* 入力フィールドの角を丸くします */
  background-color: white; /* 背景色を白に設定します */
}
</style>
