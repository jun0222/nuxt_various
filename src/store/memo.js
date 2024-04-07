export const state = () => ({
  memo: [],
  page: 0,
})

export const mutations = {
  insert: function (state, obj) {
    const d = new Date()
    const fmt =
      d.getFullYear() +
      '-' +
      (d.getMonth() + 1).toString().padStart(2, '0') + // 月を2桁に修正
      '-' +
      d.getDate().toString().padStart(2, '0') + // 日を2桁に修正
      ' ' +
      d.getHours().toString().padStart(2, '0') + // 時を2桁に修正
      ':' +
      d.getMinutes().toString().padStart(2, '0') // 分を2桁に修正
    state.memo.unshift({
      title: obj.title,
      content: obj.content,
      created: fmt,
    })
    this.commit('saveMemo')
  },

  set_page: function (state, p) {
    state.page = p
    // ここでページの状態を保存しても良いかもしれませんが、
    // 通常はページ番号よりもデータ内容の保存が重要です。
  },

  remove: function (state, obj) {
    const index = state.memo.findIndex(
      (memo) =>
        memo.title === obj.title &&
        memo.content === obj.content &&
        memo.created === obj.created
    )
    if (index !== -1) {
      state.memo.splice(index, 1)
      this.commit('saveMemo')
    }
  },

  saveMemo: function (state) {
    window.localStorage.setItem('memo', JSON.stringify(state.memo))
  },

  loadMemo: function (state) {
    const vuexStored = window.localStorage.getItem('vuex')
    if (vuexStored) {
      const storedState = JSON.parse(vuexStored)
      if (storedState.memo && storedState.memo.memo) {
        state.memo = storedState.memo.memo
      }
    }
  },
}

export const actions = {
  initMemo: function ({ commit }) {
    commit('loadMemo')
  },
}
