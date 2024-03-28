/* eslint-disable no-console */
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('server/api/db.json')
const middlewares = jsonServer.defaults()

// routes.jsonの読み込み
const routes = require('./api/routes.json')
server.use(jsonServer.rewriter(routes))

server.use(middlewares)

// カスタムルートの追加 → こちらはnodeで実行しないと意味ない
// eslint-disable-next-line @typescript-eslint/no-unused-vars
server.get('/custom', (req, res) => {
  res.status(200).jsonp({ msg: 'Hello, World!' })
})

// 全件削除のカスタムルート
// eslint-disable-next-line @typescript-eslint/no-unused-vars
server.delete('/todos', (req, res) => {
  const db = router.db // ローカルDBの取得
  db.set('todos', []).write() // 'todos' コレクションを空にする
  res.sendStatus(204) // No Content
})

server.use(router)

// FIXME: ポートベタがき
server.listen(3001, () => {
  console.log(`JSON Server is running on port ${3001}`)
  console.log('Available Endpoints:')
  console.log(`  GET /custom`)
  console.log(`  DELETE /todos`)
  // router.db.getState()を使用して、自動生成されたエンドポイントのリストを取得・表示
  Object.keys(router.db.getState()).forEach((resource) => {
    console.log(`  GET /${resource}`)
    console.log(`  POST /${resource}`)
    console.log(`  PUT /${resource}/:id`)
    console.log(`  DELETE /${resource}/:id`)
  })
})
