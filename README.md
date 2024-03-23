<!-- TOC -->

- [nuxt_various](#nuxt_various)
  - [Nuxt.js, Vue.js のタグ](#nuxtjs-vuejs-のタグ)
  - [Vue.js のメソッド](#vuejs-のメソッド)
  - [ディレクトリ構成](#ディレクトリ構成)
  - [stylelint](#stylelint)
    - [エラー](#エラー)
  - [commit message のルール](#commit-message-のルール)
  - [todo](#todo)

<!-- /TOC -->

# nuxt_various

## Nuxt.js, Vue.js のタグ

- `<nuxt-link>`: Nuxt.js アプリケーション内でのページ間遷移を効率的に行うためのコンポーネントです。Vue.js の<router-link>に相当し、アプリケーション内の別のページへのリンクを作成する際に使用します。
- `<router-link>`: Vue.js のルーター機能を利用してページ間遷移を行うためのコンポーネントです。Nuxt.js では、<nuxt-link>を使用することで、Vue.js の<router-link>と同様の機能を提供します。
- `<Nuxt />`: このコンポーネントは Nuxt.js のレイアウトファイル内で使用され、アプリケーションのページコンポーネントが描画される場所を指定します。主に、レイアウトの共通部分を定義し、ページコンテンツの具体的な描画位置をこのコンポーネントでマークします。
- `<NuxtChild />`: ネストされたルーティング構造で子ルートコンポーネントを表示するために使用されます。<NuxtChild />は親ページコンポーネント内で定義され、ネストされた子ルートがある場合にそれを描画する役割を持ちます。
- `<client-only>`: クライアントサイドでのみレンダリングする必要があるコンポーネントを囲むために使用されます。サーバーサイドレンダリングを回避し、クライアントサイドでのみコンポーネントが有効になるようにします。
- asyncData メソッド: Nuxt.js のページコンポーネントで定義できる特別なメソッドです。このメソッドを使用して、ページがサーバーサイドでレンダリングされる前に非同期でデータを取得し、ページコンポーネントへと渡すことができます。これにより、ページの初期表示時に必要なデータをあらかじめ準備できます。
- `<no-ssr>`: サーバーサイドレンダリングを回避し、クライアントサイドでのみレンダリングする必要があるコンポーネントを囲むために使用されます。クライアントサイドでのみコンポーネントが有効になるようにします。

## Vue.js のメソッド

- [pages/vue-method](https://github.com/jun0222/nuxt_various/tree/main/pages/vue-method) にサンプルを記述

## ディレクトリ構成

```bash
layouts
  default.vue # デフォルトのレイアウト
  pages
    index.vue # ルートページ
    about.vue # /about にマッチするページ
    users
      _id.vue # /users/:id にマッチするページ
```

## stylelint

### エラー

- VSCode で stylelint がエラーが出ない

  - `.vscode/settings.json` に以下を追加し解決。

  ```json
  { "stylelint.validate": ["css", "scss", "sass", "html", "vue"] }
  ```

- `stylelint.config.js` に以下を追加し解決。

```javascript
module.exports = {
  // その他の設定
  rules: {
    'declaration-block-no-duplicate-properties': true,
  },
}
```

以下のエラーが出ていたので、従って解決した。
元々はこの設定がないと言われていたが、未設定だった。
明示的に設定することで解決した。

![picture 0](images/406e9b123104217be4ef23dad4fae1838c977850a1b40865b1c9b8b1b4480b05.png)

- Unknown word (CssSyntaxError)Stylelint(CssSyntaxError)

  - `yarn remove stylelint-config-prettier` で解決。（stylelint.config.js の extends からも削除） [参考](https://github.com/nuxt/create-nuxt-app/issues/1028)

- `Module build failed (from ./node_modules/vue-loader/lib/index.js): Error: ENOENT: no such file or directory, open '/Users/username/Desktop/products-202403-/nuxt_various/pages/aboutid/\_id.vue'`
  - pages 配下のディレクトリ名を更新したのに、server を再起動していないのが原因。再起動することで解決。

## commit message のルール

commitlint によるコミットメッセージのルールを設定しています。

- build: ビルドシステムや外部依存関係の変更
- chore: 雑用。ビルドプロセスや補助ツールの変更
- ci: CI の設定やスクリプトの変更
- docs: ドキュメントのみの変更
- feat: 新機能の追加
- fix: バグ修正
- perf: パフォーマンスを向上させるコードの変更
- refactor: リファクタリング
- revert: コードの変更を取り消す
- style: コードの意味に影響を与えない変更（空白、フォーマット、セミコロンの欠落など）
- test: テストの追加、変更、削除

## todo

- [ ] pages.json を gitignore する
- [ ] pages.json に index が変に入らないようにする
