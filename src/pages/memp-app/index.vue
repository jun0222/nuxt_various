<template>
  <section class="container">
    <!-- メモアプリのタイトル -->
    <h1>Memo</h1>
    <!-- タイトルと内容を入力するフォーム -->
    <table>
      <tr>
        <th>Title</th>
        <td>
          <!-- タイトルの入力欄 -->
          <input
            v-model="title"
            type="text"
            name="title"
            class="title"
            size="40"
            @focus="set_flg"
          />
          <!-- 検索ボタン -->
          <button @click="find">find</button>
        </td>
      </tr>
      <tr>
        <th>Memo</th>
        <td>
          <!-- 内容の入力欄 -->
          <textarea
            v-model="content"
            name="content"
            class="content"
            cols="50"
            rows="5"
          ></textarea>
        </td>
      </tr>
      <tr>
        <th></th>
        <td>
          <!-- 保存ボタン -->
          <button @click="insert">save</button>
          <!-- 削除ボタン（削除アニメーション付き） -->
          <transition name="del">
            <button v-if="sel_flg != false" @click="remove">delete</button>
          </transition>
        </td>
      </tr>
    </table>
    <!-- メモの一覧を表示する部分 -->
    <hr />
    <ul class="list">
      <li v-for="(item, index) in page_items" :key="index">
        <!-- メモを選択して詳細を表示するためのリスト -->
        <span @click="select(item)">{{ item.title }} ({{ item.created }})</span>
      </li>
    </ul>
    <hr />
    <!-- ページ送りのナビゲーション -->
    <div class="nav">
      <span @click="prev">&lt;prev</span>｜ <span @click="next">next&gt;</span>
    </div>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      // タイトルと内容の初期値
      title: '',
      content: '',
      // 1ページあたりのメモ数
      num_per_page: 7,
      // 検索フラグと選択フラグ
      find_flg: false,
      sel_flg: false,
    }
  },
  computed: {
    // ストアからメモを取得
    memo: function () {
      return this.$store.state.memo.memo
    },
    // ページに表示されるメモの配列を計算する
    page_items: function () {
      if (this.find_flg) {
        // 検索フラグがtrueの場合、検索結果を表示する
        const arr = []
        const data = this.$store.state.memo.memo
        data.forEach((element) => {
          if (
            // タイトルに検索文字列が含まれる場合に追加する
            element.title.toLowerCase().includes(this.title.toLowerCase()) >= 0
          ) {
            arr.push(element)
          }
        })
        return arr
      } else if (this.sel_flg !== false) {
        // 選択フラグがtrueの場合、選択されたメモのみ表示する
        return [this.sel_flg]
      } else {
        // 通常のページ表示の場合、ページング処理を行う
        return this.$store.state.memo.memo.slice(
          this.num_per_page * this.$store.state.memo.page,
          this.num_per_page * (this.$store.state.memo.page + 1)
        )
      }
    },
    // ページ番号のgetterとsetter
    page: {
      get: function () {
        return this.$store.state.memo.page
      },
      set: function (p) {
        let pg =
          // 新しいページ番号が範囲外の場合、最大ページ番号に調整する
          p > (this.$store.state.memo.memo.length - 1) / this.num_per_page
            ? Math.ceil(
                (this.$store.state.memo.memo.length - 1) / this.num_per_page
              ) - 1
            : p
        pg = pg < 0 ? 0 : pg
        this.$store.commit('memo/set_page', pg)
      },
    },
  },
  created: function () {
    // コンポーネントが作成されたときに初期のページ番号を設定する
    this.$store.commit('memo/set_page', 0)
  },
  methods: {
    // 検索フラグや選択フラグをリセットする
    set_flg: function () {
      if (this.find_flg || this.sel_flg !== false) {
        this.find_flg = false
        this.sel_flg = false
        this.title = ''
        this.content = ''
      }
    },
    // メモを追加する
    insert: function () {
      this.$store.commit('memo/insert', {
        title: this.title,
        content: this.content,
      })
      this.title = ''
      this.content = ''
    },
    // メモを選択する
    select: function (item) {
      this.find_flg = false
      this.sel_flg = item
      this.title = item.title
      this.content = item.content
    },
    // メモを削除する
    remove: function () {
      if (this.sel_flg === false) {
        return false
      } else {
        this.$store.commit('memo/remove', this.sel_flg)
        this.set_flg()
      }
    },
    // 検索を実行する
    find: function () {
      this.sel_flg = false
      this.find_flg = true
    },
    // 次のページに移動する
    next: function () {
      this.page++
    },
    // 前のページに移動する
    prev: function () {
      this.page--
    },
  },
}
</script>

<style>
.container {
  padding: 5px 10px;
}

h1 {
  font-size: 60pt;
  color: #345980;
}

p {
  padding-top: 5px;
  font-size: 20pt;
}

div {
  font-size: 14pt;
}

pre {
  padding: 10px;
  font-size: 18pt;
  background-color: #efefef;
}

input {
  font-size: 14pt;
  margin: 5px;
}

textarea {
  font-size: 14pt;
  margin: 5px;
}

button {
  font-size: 14pt;
  padding: 1px 10px;
  margin: 5px;
}

hr {
  border-style: none;
  border-top: solid;
  border-width: 5px;
  border-color: #def;
  margin: 20px 0 10px;
}

li {
  font-size: 14pt;
  height: 32px;
}

th {
  background-color: #345980;
  color: white;
}

td {
  background-color: aliceblue;
  color: #345980;
  padding: 5px;
}

.nav {
  padding: 0 10px;
  cursor: pointer;
}

.list {
  cursor: pointer;
}

.del-enter-active,
.del-leave-active {
  transition: opacity 0.5s;
}

.del-enter,
.del-leave-to {
  opacity: 0;
}
</style>
