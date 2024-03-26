<template>
  <div>
    <!-- v-model を使って入力値を data の newTodo に双方向バインディング -->
    <!-- @keyup.enter を使って Enter キーが押された時に addTodo メソッドを実行 -->
    <input v-model="newTodo" @keyup.enter="addTodo" />

    <ul>
      <!-- v-for を使って todos 配列の要素を li でレンダリング -->
      <!-- :key を使って要素の一意性を確保 -->
      <li v-for="(todo, index) in todos" :key="index">
        <!-- todo の値を表示 -->
        {{ todo }}
        <!-- @click を使ってボタンがクリックされた時に removeTodo メソッドを実行 -->
        <button @click="removeTodo(index)">削除</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 新しいTodoアイテムを入力するための状態
      newTodo: '',
    }
  },
  computed: {
    // Vuex ストアから todos 状態を取得
    todos() {
      return this.$store.state.todos
    },
  },
  methods: {
    // 新しいTodoアイテムをVuexストアに追加するメソッド
    addTodo() {
      if (this.newTodo.trim()) {
        this.$store.commit('addTodo', this.newTodo)
        this.newTodo = ''
      }
    },
    // Vuex ストアから指定したインデックスのTodoアイテムを削除するメソッド
    removeTodo(index) {
      this.$store.commit('removeTodo', index)
    },
  },
}
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
