/**
 * koa-router传递参数 GET
 */
const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router
    .get('/',async(ctx,next)=>{
        ctx.body = ctx.query;
    })

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000,()=>{
    console.log('[demo] Starting at port 3000');
})