#!/bin/bash

# json-serverをバックグラウンドで起動し、プロセスIDを一時ファイルに保存
yarn start:json-server & echo $! > tmp/json-server.pid

# テスト実行
yarn test

# json-serverのプロセスを停止
kill $(cat tmp/json-server.pid) && rm tmp/json-server.pid
