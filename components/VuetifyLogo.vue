<template>
  <!-- Vuetifyのロゴを表示するためのimgタグ -->
  <img class="vuetify-logo" alt="Vuetify Logo" src="/vuetify-logo.svg" />
</template>

<style>
/* .vuetify-logoクラスを持つ要素にスタイルを適用 */
.vuetify-logo {
  height: 180px; /* ロゴの高さを180pxに設定 */
  width: 180px; /* ロゴの幅を180pxに設定 */
  transform: rotateY(560deg); /* 初期状態でY軸を中心に560度回転 */
  animation: turn 3.5s ease-out forwards 1s; /* 1秒後に3.5秒かけてturnアニメーションを実行 */
}

/* turnアニメーションの定義 */
@keyframes turn {
  100% {
    transform: rotateY(
      0deg
    ); /* アニメーション終了時にY軸を中心に0度回転（元の状態に戻る） */
  }
}
</style>
