## 目次

<!-- TOC -->

    - [目次](#目次)
    - [composition-api](#composition-api)
    - [Nuxt.js, Vue.js のタグ](#nuxtjs-vuejs-のタグ)
    - [Vue.js のメソッド](#vuejs-のメソッド)
    - [ディレクトリ構成](#ディレクトリ構成)
    - [エラー](#エラー)
    - [commit message のルール](#commit-message-のルール)
    - [Vue.js のリポジトリ](#vuejs-のリポジトリ)
    - [package.json](#packagejson)
    - [コマンド](#コマンド)

- [色々入れ直し](#色々入れ直し)
- [色々入れ直し](#色々入れ直し)
- [yarn.lock と nodemodules を削除して再インストール](#yarnlock-と-nodemodules-を削除して再インストール)
- [テストライブラリの追加と axios-mock-adapter の追加](#テストライブラリの追加と-axios-mock-adapter-の追加)
  - [todo](#todo)

<!-- /TOC -->

## composition-api

0->1 で初めてなので、生成 AI に聞くだけでは無理だった。ずっとハマって未解決。  
公式ドキュメントを見て、それでもわからなかったから github を clone して試す。
~~node が新すぎた？~~  
github でもあまり参考にならなかったので、最小単位（1 ファイルでとりあえず composition-api を使ってみる）で試すことにした。  
動作。最小単位から試す。できるだけ小さく分解することが大事。そういう妥協案、回り道の引き出しを増やす。  
`components/CompositionExample/CompositionExample.vue`に記述。

https://composition-api.nuxtjs.org/getting-started/setup

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

## エラー

- node で起動した jest で db.json のデータが残り、冪等なテストができない

  - 根本的にはプロセスを kill する必要があるが、その点の注意書きをテストコマンドで出力することに。

- jest が動かない

  - `"@vue/test-utils": "2~~~",`で Vue3 用を使っていた
    - GPT で必要事項をヒアリングしてもらい、依存関係の一貫性を担保 差分は`6d2280fbeff383394c5cafcd0a45e8b9e1f8661a`

- `index.js`定義のカスタムルートが機能しない

  - node で実行するよう変更して解決。

- `"Unknown option '--routes'"`で json-server が起動しない

  - [github の issue](https://github.com/typicode/json-server/issues/1512)を参考にし、1 系ではなく 0 系にダウングレードして解決

- cli から直接 json-server を起動できない

  - グローバルインストールしていないので、yarn から実行する必要があった。package.json に記述。

- yarn dev で`Cannot find module 'json-server' Require stack: - /Users/username/Desktop/products-202403-/nuxt_various/server/index.js`

  - `serverMiddleware: ['~/server/index.js'],` を nuuxt.config.js に記載していたので、json-server のための記述は package.json に記載することで解決。

- `window is not defined`

  - SSR で window 使おうとしてると起きる

- `Cannot read properties of undefined (reading 'state')`

  - `rm -rf .nuxt && yarn install && yarn dev`して解決。`clean:dev`コマンドとして package.json に追加。

- vuex で`store/index.ts`が型解決できない（module not found）

  - `store/index.ts`を`store/index.js`に変更することで動作した。
  - `nuxt-typed-vuex`を利用するも中々うまくいかず。
  - リサーチして vuex と ts が相性悪いと発覚。`Pinia`の方が ts と相性が良さそうなので js のまま保留

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

## Vue.js のリポジトリ

- [vue-todo](https://github.com/jun0222/vue-todo)

## package.json

```js
{
  // プロジェクトの名前
  "name": "nuxt_various",
  // プロジェクトのバージョン
  "version": "1.0.0",
  // プライベートプロジェクトであることを示すフラグ
  "private": true,
  // 様々なタスクのスクリプト
  "scripts": {
    // 開発モードでプロジェクトを実行
    "dev": "nuxt",
    // プロダクションビルドを実行
    "build": "nuxt build",
    // プロダクションビルドを起動
    "start": "nuxt start",
    // 静的ファイルを生成(プロダクション用)
    "generate": "nuxt generate",
    // ESLintを使ってJavaScriptをリント
    "lint:js": "eslint --ext \".js,.ts,.vue\" --ignore-path .gitignore .",
    // Stylelintを使ってスタイルをリント
    "lint:style": "stylelint \"**/*.{css,scss,sass,html,vue}\" --ignore-path .gitignore",
    // Prettierを使ってコード整形をチェック
    "lint:prettier": "prettier --check .",
    // すべてのリンターを実行
    "lint": "yarn lint:js && yarn lint:style && yarn lint:prettier",
    // リンターによる自動修正を実行
    "lintfix": "prettier --write --list-different . && yarn lint:js --fix && yarn lint:style --fix",
    // Gitフックをインストール
    "prepare": "husky install",
    // Jestを使ってテストを実行
    "test": "jest"
  },
  // lint-stagedのコミット時リンティング設定
  "lint-staged": {
    "*.{js,ts,vue}": "eslint --cache",
    "*.{css,scss,sass,html,vue}": "stylelint",
    "*.**": [
      "prettier --check --ignore-unknown"
    ]
  },
  // プロジェクトの依存ライブラリ
  "dependencies": {
    "@nuxtjs/axios": "^5.13.6",
    "core-js": "^3.25.3",
    "nuxt": "^2.15.8",
    "vue": "^2.7.10",
    "vue-server-renderer": "^2.7.10",
    "vue-template-compiler": "^2.7.10",
    "vuetify": "^2.6.10"
  },
  // 開発時の依存ライブラリ
  "devDependencies": {
    "@babel/eslint-parser": "^7.19.1",
    "@commitlint/cli": "^17.1.2",
    "@commitlint/config-conventional": "^17.1.0",
    "@nuxt/types": "^2.15.8",
    "@nuxt/typescript-build": "^2.1.0",
    "@nuxtjs/eslint-config-typescript": "^11.0.0",
    "@nuxtjs/eslint-module": "^3.1.0",
    "@nuxtjs/stylelint-module": "^4.1.0",
    "@nuxtjs/vuetify": "^1.12.3",
    "@vue/test-utils": "^1.3.0",
    "babel-core": "7.0.0-bridge.0",
    "babel-jest": "^29.1.2",
    "eslint": "^8.24.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-jest": "^27.0.4",
    "eslint-plugin-nuxt": "^4.0.0",
    "eslint-plugin-vue": "^9.5.1",
    "husky": "^8.0.1",
    "jest": "^29.1.2",
    "jest-environment-jsdom": "^29.1.2",
    "lint-staged": "^13.0.3",
    "postcss-html": "^1.6.0",
    "prettier": "^2.7.1",
    "stylelint": "^16.2.1",
    "stylelint-config-recommended-vue": "^1.5.0",
    "stylelint-config-standard": "^36.0.0",
    "ts-jest": "^29.0.3",
    "vue-jest": "^3.0.4"
  }
}
```

## コマンド

```bash
# 色々入れ直し
rm -rf .nuxt && yarn install && yarn dev

# yarn.lock と node_modules を削除して再インストール
rm -rf node_modules yarn.lock && yarn install

# テストライブラリの追加と axios-mock-adapter の追加
yarn add --dev @vue/test-utils jest vue-jest babel-jest @babel/preset-env @babel/core && yarn add --dev axios-mock-adapter
```

## todo

- [ ] storybook
- [ ] cicd circleci
- [ ] [6:06:33 PM] ERROR (node:79242) [stylelint:002] DeprecationWarning: The CommonJS Node.js API is deprecated. See https://stylelint.io/migration-guide/to-16
- [ ] ディレクトリ構成
- [ ] todo リストを進化させていく

  - [ ] hooks
  - [ ] composition-api
  - [ ] login

- [ ] 環境変数
- [ ] graphql
- [ ] vuetify でのデザイン
- [ ] express
