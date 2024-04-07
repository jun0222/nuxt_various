<template>
  <!-- テンプレートエリア: ここではVueのデータバインディングを使ってcount変数の値を表示し、ボタンクリックでincrementメソッドを呼び出します -->
  <div>
    <!-- count変数の値を表示 -->
    <h1>{{ count }}</h1>
    <!-- クリックイベントでincrementメソッドを呼び出すボタン -->
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
// Composition APIのref関数をインポート
import { ref } from '@nuxtjs/composition-api'

export default {
  setup() {
    // refを使ってリアクティブなデータソースとしてcountを定義、初期値は0
    const count = ref(0)

    // countの値を1増やす関数
    function increment() {
      count.value++
    }

    // setup関数からcountとincrementを公開
    return { count, increment }
  },
}
</script>
