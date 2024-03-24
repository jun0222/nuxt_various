<template>
  <section class="container">
    <!-- タイトルを表示する -->
    <h1>{{ title }}</h1>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <p v-html="message"></p>
    <!-- v-htmlディレクティブを使って、HTMLを含むメッセージを表示する -->
    <hr />
    <!-- 水平線を表示する -->
    <div class="right">
      <router-link to="/">Go to Top</router-link>
      <!-- Vue Routerを使ってトップページへのリンクを提供する -->
    </div>
  </section>
</template>

<script>
export default {
  validate({ params }) {
    // パラメーターが未定義かどうかをチェックし、それに基づいて真偽値を返す
    if (params.id === undefined || params.pass === undefined) {
      return false
    } else {
      return true
    }
  },
  data() {
    return {
      title: 'Param Page',
    }
  },
  computed: {
    message() {
      // ルートパラメータからidとpassを取得し、未定義の場合はプレースホルダを表示
      const id =
        this.$route.params.id !== undefined
          ? this.$route.params.id
          : '*** no id ***' // validate使っているので不要だがフォールバックのサンプル
      const pass =
        this.$route.params.pass !== undefined
          ? this.$route.params.pass
          : '*** no password ***' // validateメソッドで未定義の場合はプレースホルダを表示
      return 'ID：' + id + '<br>PASS：' + pass
    },
  },
}
</script>

<style>
.container {
  padding: 5px 10px; /* コンテナにパディングを追加 */
}

h1 {
  font-size: 60pt; /* h1タグのフォントサイズと色を指定 */
  color: #345980;
}

p {
  padding-top: 5px; /* pタグの上部にパディングを追加 */
  font-size: 20pt; /* pタグのフォントサイズを指定 */
}

a {
  font-size: 16pt; /* リンクのフォントサイズを指定 */
}

.right {
  text-align: right; /* rightクラスが適用された要素のテキストを右寄せ */
}
</style>
