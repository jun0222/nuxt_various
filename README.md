<!-- TOC -->

- [nuxt_various](#nuxt_various)
  - [stylelint](#stylelint)
    - [エラー](#エラー)
  - [commit message のルール](#commit-message-のルール)

<!-- /TOC -->

# nuxt_various

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
