<template>
  <!-- コンポーネントのHTMLマークアップが始まります。 -->
  <section class="container">
    <!-- セクションタグでコンテンツを区切り、"container"クラスを使ってスタイリングのためのフックを提供します。 -->
    <h1>{{ title }}</h1>
    <!-- h1タグで、このコンポーネントのタイトルを表示します。"title"はVueインスタンスのデータプロパティを参照しています。 -->
    <p>{{ $store.state.message }}</p>
    <!-- pタグで、Vuexストアのstateオブジェクト内の"message"プロパティの値を表示します。Vuexは、Vue.jsアプリケーションでの状態管理パターンの実装です。 -->
  </section>
</template>

<script>
export default {
  // このスクリプトブロックでは、Vueコンポーネントのオプションオブジェクトを定義しています。
  data: function () {
    // `data`関数は、コンポーネントのリアクティブなデータを定義します。この関数はオブジェクトを返す必要があります。
    return {
      title: 'Hello',
      // `title`プロパティは、コンポーネントのテンプレートで使用されるデータを保持します。ここでは初期値として'Hello'を設定しています。
    }
  },
}
</script>
