// todoリスト用のコード
export const state = () => ({
  todos: [],
})

export const mutations = {
  addTodo(state, todo) {
    state.todos.push(todo)
  },
  removeTodo(state, todoIndex) {
    state.todos.splice(todoIndex, 1)
  },
}

// // pages/memp-app/index.vue
// // import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'

// export const state = () => ({
//   message: 'count number.',
//   counter: 0,
// })

// export const mutations = {
//   doit(state) {
//     const n = Math.floor(Math.random() * 10)
//     state.counter += n
//     state.message = 'add ' + n + '.'
//   },
//   reset(state) {
//     state.counter = 0
//     state.message = 'reset now.'
//   },
// }

// export const plugins = [process.client ? createPersistedState() : null].filter(
//   Boolean
// )

// ShowVuexExample用のコード
// import Vuex from 'vuex'

// // Vuex ストアを作成する関数
// const createStore = () => {
//   return new Vuex.Store({
//     // ステート (アプリケーションのデータ) を定義する
//     state: function () {
//       return {
//         // メッセージを格納するステート変数
//         message: 'count number.',
//         // カウンターの値を格納するステート変数
//         counter: 0,
//       }
//     },

//     // ミューテーション (ステートを変更する関数) を定義する
//     mutations: {
//       // カウンターの値を増減させる
//       count: function (state, n) {
//         state.counter += n
//       },
//       // メッセージを更新する
//       say: function (state, msg) {
//         state.message = msg
//       },
//       // カウンターとメッセージをリセットする
//       reset: function (state) {
//         state.counter = 0
//         state.message = 'reset now...'
//       },
//     },

//     // アクション (非同期処理などを行う関数) を定義する
//     actions: {
//       // ランダムな値でカウンターを増加させ、メッセージを更新する
//       doit: function (context) {
//         const n = Math.floor(Math.random() * 10)
//         context.commit('count', n)
//         context.commit('say', 'add ' + n + '!')
//       },
//     },
//   })
// }

// // createStore 関数をエクスポートする
// export default createStore
