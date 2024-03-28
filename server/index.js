const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('server/api/db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

module.exports = server
