<template>
  <!-- コンテナ用のセクション -->
  <section class="container">
    <!-- データプロパティ `title` の値を表示 -->
    <h1>{{ title }}</h1>
    <!-- データプロパティ `message` の値を表示 -->
    <p>{{ message }}</p>
    <hr />
    <!-- クリックイベントでストアのアクションを呼び出す -->
    <div class="link" @click="$store.dispatch('doit')">
      <!-- クリック時にイベントの伝播を止める -->
      <a @click.stop="$store.commit('reset')">
        <!-- ストアのステートの `counter` の値を表示 -->
        clicked: {{ $store.state.counter }}
      </a>
    </div>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      // コンポーネントのデータプロパティを定義
      title: 'Hello',
      message: 'this is message.',
    }
  },
}
</script>

<style>
.link {
  background: green;
}

.link a {
  color: white;
}
</style>
