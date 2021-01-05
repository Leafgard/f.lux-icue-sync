const Router = require('koa-router')
const FluxService = require('../services/FluxService')

const router = new Router({
    prefix: '/flux'
})

router.post('/set', async (ctx, next) => {
    const { ct: kelvin } = ctx.query
    ctx.body = await FluxService.updateLighting(kelvin)
    await next()
})

module.exports = router
