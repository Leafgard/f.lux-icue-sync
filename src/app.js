const Koa = require('koa')

const FluxController = require('./controllers/FluxController')

const app = new Koa()

app
    .use(FluxController.routes())
    .use(FluxController.allowedMethods())

module.exports = app
