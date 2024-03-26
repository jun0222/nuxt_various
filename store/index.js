// TODO: typescript 化したいのでPiniaを使う
import Vuex from 'vuex'

// Vuex ストアを作成する関数
const createStore = () => {
  return new Vuex.Store({
    // ステート (アプリケーションのデータ) を定義する
    state: function () {
      return {
        // message というステート変数を定義し、初期値を設定する
        message: 'This is store message!',
      }
    },

    // ミューテーション (ステートを変更する関数) を定義する
    // ※ここでは定義していない

    // アクション (非同期処理などを行う関数) を定義する
    // ※ここでは定義していない

    // ゲッター (ステートから導出されるデータを計算する関数) を定義する
    // ※ここでは定義していない
  })
}

// createStore 関数をエクスポートする
export default createStore
